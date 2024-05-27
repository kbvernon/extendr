use std::{
    panic::{self, AssertUnwindSafe},
    ptr::{self},
};

use extendr_engine::with_r;
use libR_sys::{R_NilValue, R_withCallingErrorHandler, Rf_error};
use split::split_closure;
use std::cell::RefCell;

#[path = "../split.rs"]
mod split;

thread_local! {
    static RESOURCE_TOTAL: RefCell<i32> = const { RefCell::new(4) } ;
}

struct Resource {
    name: String,
}

impl Drop for Resource {
    fn drop(&mut self) {
        println!("Dropping resource: {}", self.name);
        RESOURCE_TOTAL.with(|x| x.replace_with(|x| *x - 1));
    }
}

fn inner_function() {
    let _inner_res1 = Resource {
        name: String::from("inner_res1"),
    };
    let _inner_res2 = Resource {
        name: String::from("inner_res2"),
    };
    println!("About to panic inside inner_function");
    panic!("Panic inside inner_function");
}

fn outer_function() {
    let _outer_res1 = Resource {
        name: String::from("outer_res1"),
    };
    let _outer_res2 = Resource {
        name: String::from("outer_res2"),
    };

    let result = panic::catch_unwind(AssertUnwindSafe(|| {
        inner_function();
    }));

    match result {
        Ok(_) => println!("No panic occurred in inner_function"),
        Err(err) => println!("Caught a panic in outer_function: {:?}", err),
    }
    with_r(|| unsafe {
        let mut f = || {
            Rf_error(c"eror".as_ptr());
        };
        let (s, cfn) = split_closure(&mut f);

        // Rf_error(c"eror".as_ptr());
        // R_withCallingErrorHandler(Some(cfn), s, None, ptr::null_mut());
        
    });

    println!("Continuing execution in outer_function");
}

#[test]
fn unwinding_rust() {
    outer_function();
    println!("Program continues execution after outer_function");
    assert_eq!(RESOURCE_TOTAL.take(), 0);
}

fn main() {
    outer_function();
    println!("Program continues execution after outer_function");
    // assert_eq!(RESOURCE_TOTAL.take(), 0);
}
