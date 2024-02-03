(function() {var type_impls = {
"extendr_api":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3Ci8%3E-for-usize\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/convert/num.rs.html#401\">source</a></span><a href=\"#impl-TryFrom%3Ci8%3E-for-usize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"extendr_api/trait.TryFrom.html\" title=\"trait extendr_api::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i8.html\">i8</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/convert/num.rs.html#401\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"extendr_api/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(u: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i8.html\">i8</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a> as <a class=\"trait\" href=\"extendr_api/trait.TryFrom.html\" title=\"trait extendr_api::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i8.html\">i8</a>&gt;&gt;::<a class=\"associatedtype\" href=\"extendr_api/trait.TryFrom.html#associatedtype.Error\" title=\"type extendr_api::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Try to create the target number type from a source\nnumber type. This returns an error if the source value\nis outside of the range of the target type.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"extendr_api/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details></div></details>","TryFrom<i8>","extendr_api::prelude::Ix"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3Ci128%3E-for-usize\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/convert/num.rs.html#402\">source</a></span><a href=\"#impl-TryFrom%3Ci128%3E-for-usize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"extendr_api/trait.TryFrom.html\" title=\"trait extendr_api::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i128.html\">i128</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/convert/num.rs.html#402\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"extendr_api/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(u: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i128.html\">i128</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a> as <a class=\"trait\" href=\"extendr_api/trait.TryFrom.html\" title=\"trait extendr_api::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i128.html\">i128</a>&gt;&gt;::<a class=\"associatedtype\" href=\"extendr_api/trait.TryFrom.html#associatedtype.Error\" title=\"type extendr_api::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Try to create the target number type from a source\nnumber type. This returns an error if the source value\nis outside of the range of the target type.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"extendr_api/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details></div></details>","TryFrom<i128>","extendr_api::prelude::Ix"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3Cu128%3E-for-usize\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/convert/num.rs.html#400\">source</a></span><a href=\"#impl-TryFrom%3Cu128%3E-for-usize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"extendr_api/trait.TryFrom.html\" title=\"trait extendr_api::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/convert/num.rs.html#400\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"extendr_api/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(u: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a> as <a class=\"trait\" href=\"extendr_api/trait.TryFrom.html\" title=\"trait extendr_api::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>&gt;&gt;::<a class=\"associatedtype\" href=\"extendr_api/trait.TryFrom.html#associatedtype.Error\" title=\"type extendr_api::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Try to create the target number type from a source\nnumber type. This returns an error if the source value\nis outside of the range of the target type.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"extendr_api/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details></div></details>","TryFrom<u128>","extendr_api::prelude::Ix"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3Cisize%3E-for-usize\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/convert/num.rs.html#333\">source</a></span><a href=\"#impl-TryFrom%3Cisize%3E-for-usize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"extendr_api/trait.TryFrom.html\" title=\"trait extendr_api::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.isize.html\">isize</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/convert/num.rs.html#333\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"extendr_api/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(u: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.isize.html\">isize</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a> as <a class=\"trait\" href=\"extendr_api/trait.TryFrom.html\" title=\"trait extendr_api::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.isize.html\">isize</a>&gt;&gt;::<a class=\"associatedtype\" href=\"extendr_api/trait.TryFrom.html#associatedtype.Error\" title=\"type extendr_api::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Try to create the target number type from a source\nnumber type. This returns an error if the source value\nis outside of the range of the target type.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"extendr_api/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details></div></details>","TryFrom<isize>","extendr_api::prelude::Ix"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3Cu32%3E-for-usize\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/convert/num.rs.html#399\">source</a></span><a href=\"#impl-TryFrom%3Cu32%3E-for-usize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"extendr_api/trait.TryFrom.html\" title=\"trait extendr_api::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/convert/num.rs.html#399\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"extendr_api/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a> as <a class=\"trait\" href=\"extendr_api/trait.TryFrom.html\" title=\"trait extendr_api::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;&gt;::<a class=\"associatedtype\" href=\"extendr_api/trait.TryFrom.html#associatedtype.Error\" title=\"type extendr_api::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Try to create the target number type from a source\nnumber type. This returns an error if the source value\nis outside of the range of the target type.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"extendr_api/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details></div></details>","TryFrom<u32>","extendr_api::prelude::Ix"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3Ci32%3E-for-usize\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/convert/num.rs.html#401\">source</a></span><a href=\"#impl-TryFrom%3Ci32%3E-for-usize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"extendr_api/trait.TryFrom.html\" title=\"trait extendr_api::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/convert/num.rs.html#401\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"extendr_api/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(u: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a> as <a class=\"trait\" href=\"extendr_api/trait.TryFrom.html\" title=\"trait extendr_api::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>&gt;&gt;::<a class=\"associatedtype\" href=\"extendr_api/trait.TryFrom.html#associatedtype.Error\" title=\"type extendr_api::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Try to create the target number type from a source\nnumber type. This returns an error if the source value\nis outside of the range of the target type.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"extendr_api/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details></div></details>","TryFrom<i32>","extendr_api::prelude::Ix"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3Cu64%3E-for-usize\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/convert/num.rs.html#399\">source</a></span><a href=\"#impl-TryFrom%3Cu64%3E-for-usize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"extendr_api/trait.TryFrom.html\" title=\"trait extendr_api::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/convert/num.rs.html#399\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"extendr_api/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a> as <a class=\"trait\" href=\"extendr_api/trait.TryFrom.html\" title=\"trait extendr_api::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt;&gt;::<a class=\"associatedtype\" href=\"extendr_api/trait.TryFrom.html#associatedtype.Error\" title=\"type extendr_api::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Try to create the target number type from a source\nnumber type. This returns an error if the source value\nis outside of the range of the target type.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"extendr_api/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details></div></details>","TryFrom<u64>","extendr_api::prelude::Ix"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3Ci64%3E-for-usize\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/convert/num.rs.html#401\">source</a></span><a href=\"#impl-TryFrom%3Ci64%3E-for-usize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"extendr_api/trait.TryFrom.html\" title=\"trait extendr_api::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/convert/num.rs.html#401\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"extendr_api/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(u: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a> as <a class=\"trait\" href=\"extendr_api/trait.TryFrom.html\" title=\"trait extendr_api::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt;&gt;::<a class=\"associatedtype\" href=\"extendr_api/trait.TryFrom.html#associatedtype.Error\" title=\"type extendr_api::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Try to create the target number type from a source\nnumber type. This returns an error if the source value\nis outside of the range of the target type.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"extendr_api/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details></div></details>","TryFrom<i64>","extendr_api::prelude::Ix"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3Ci16%3E-for-usize\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/convert/num.rs.html#401\">source</a></span><a href=\"#impl-TryFrom%3Ci16%3E-for-usize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"extendr_api/trait.TryFrom.html\" title=\"trait extendr_api::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/convert/num.rs.html#401\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"extendr_api/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(u: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a> as <a class=\"trait\" href=\"extendr_api/trait.TryFrom.html\" title=\"trait extendr_api::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>&gt;&gt;::<a class=\"associatedtype\" href=\"extendr_api/trait.TryFrom.html#associatedtype.Error\" title=\"type extendr_api::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Try to create the target number type from a source\nnumber type. This returns an error if the source value\nis outside of the range of the target type.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"extendr_api/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details></div></details>","TryFrom<i16>","extendr_api::prelude::Ix"],["<section id=\"impl-ScalarOperand-for-usize\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/ndarray/0.15/src/ndarray/impl_ops.rs.html#47\">source</a><a href=\"#impl-ScalarOperand-for-usize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"extendr_api/prelude/trait.ScalarOperand.html\" title=\"trait extendr_api::prelude::ScalarOperand\">ScalarOperand</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h3></section>","ScalarOperand","extendr_api::prelude::Ix"],["<section id=\"impl-NdIndex%3CDim%3CIxDynImpl%3E%3E-for-usize\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/ndarray/0.15/src/ndarray/dimension/ndindex.rs.html#112\">source</a><a href=\"#impl-NdIndex%3CDim%3CIxDynImpl%3E%3E-for-usize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"extendr_api/prelude/trait.NdIndex.html\" title=\"trait extendr_api::prelude::NdIndex\">NdIndex</a>&lt;<a class=\"struct\" href=\"extendr_api/prelude/struct.Dim.html\" title=\"struct extendr_api::prelude::Dim\">Dim</a>&lt;<a class=\"struct\" href=\"extendr_api/prelude/struct.IxDynImpl.html\" title=\"struct extendr_api::prelude::IxDynImpl\">IxDynImpl</a>&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h3></section>","NdIndex<Dim<IxDynImpl>>","extendr_api::prelude::Ix"],["<section id=\"impl-NdIndex%3CDim%3C%5Busize;+1%5D%3E%3E-for-usize\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/ndarray/0.15/src/ndarray/dimension/ndindex.rs.html#101\">source</a><a href=\"#impl-NdIndex%3CDim%3C%5Busize;+1%5D%3E%3E-for-usize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"extendr_api/prelude/trait.NdIndex.html\" title=\"trait extendr_api::prelude::NdIndex\">NdIndex</a>&lt;<a class=\"struct\" href=\"extendr_api/prelude/struct.Dim.html\" title=\"struct extendr_api::prelude::Dim\">Dim</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">1</a>]&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h3></section>","NdIndex<Dim<[usize; 1]>>","extendr_api::prelude::Ix"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoDimension-for-usize\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/ndarray/0.15/src/ndarray/dimension/conversion.rs.html#47\">source</a><a href=\"#impl-IntoDimension-for-usize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"extendr_api/prelude/trait.IntoDimension.html\" title=\"trait extendr_api::prelude::IntoDimension\">IntoDimension</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Dim\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Dim\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"extendr_api/prelude/trait.IntoDimension.html#associatedtype.Dim\" class=\"associatedtype\">Dim</a> = <a class=\"struct\" href=\"extendr_api/prelude/struct.Dim.html\" title=\"struct extendr_api::prelude::Dim\">Dim</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">1</a>]&gt;</h4></section><section id=\"method.into_dimension\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/ndarray/0.15/src/ndarray/dimension/conversion.rs.html#50\">source</a><a href=\"#method.into_dimension\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"extendr_api/prelude/trait.IntoDimension.html#tymethod.into_dimension\" class=\"fn\">into_dimension</a>(self) -&gt; <a class=\"struct\" href=\"extendr_api/prelude/struct.Dim.html\" title=\"struct extendr_api::prelude::Dim\">Dim</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">1</a>]&gt;</h4></section></div></details>","IntoDimension","extendr_api::prelude::Ix"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3CRobj%3E-for-usize\" class=\"impl\"><a class=\"src rightside\" href=\"src/extendr_api/robj/try_from_robj.rs.html#423-432\">source</a><a href=\"#impl-TryFrom%3CRobj%3E-for-usize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"extendr_api/trait.TryFrom.html\" title=\"trait extendr_api::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"extendr_api/robj/struct.Robj.html\" title=\"struct extendr_api::robj::Robj\">Robj</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"extendr_api/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"enum\" href=\"extendr_api/error/enum.Error.html\" title=\"enum extendr_api::error::Error\">Error</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/extendr_api/robj/try_from_robj.rs.html#423-432\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"extendr_api/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(robj: <a class=\"struct\" href=\"extendr_api/robj/struct.Robj.html\" title=\"struct extendr_api::robj::Robj\">Robj</a>) -&gt; <a class=\"type\" href=\"extendr_api/error/type.Result.html\" title=\"type extendr_api::error::Result\">Result</a>&lt;Self&gt;</h4></section></summary><div class='docblock'>Performs the conversion.</div></details></div></details>","TryFrom<Robj>","extendr_api::prelude::Ix"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3C%26Robj%3E-for-usize\" class=\"impl\"><a class=\"src rightside\" href=\"src/extendr_api/robj/try_from_robj.rs.html#95\">source</a><a href=\"#impl-TryFrom%3C%26Robj%3E-for-usize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"extendr_api/trait.TryFrom.html\" title=\"trait extendr_api::TryFrom\">TryFrom</a>&lt;&amp;<a class=\"struct\" href=\"extendr_api/robj/struct.Robj.html\" title=\"struct extendr_api::robj::Robj\">Robj</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/extendr_api/robj/try_from_robj.rs.html#95\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"extendr_api/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(robj: &amp;<a class=\"struct\" href=\"extendr_api/robj/struct.Robj.html\" title=\"struct extendr_api::robj::Robj\">Robj</a>) -&gt; <a class=\"type\" href=\"extendr_api/error/type.Result.html\" title=\"type extendr_api::error::Result\">Result</a>&lt;Self&gt;</h4></section></summary><div class=\"docblock\"><p>Convert a numeric object to an integer value.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"extendr_api/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"enum\" href=\"extendr_api/error/enum.Error.html\" title=\"enum extendr_api::error::Error\">Error</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details></div></details>","TryFrom<&Robj>","extendr_api::prelude::Ix"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ToVectorValue-for-usize\" class=\"impl\"><a class=\"src rightside\" href=\"src/extendr_api/robj/into_robj.rs.html#254\">source</a><a href=\"#impl-ToVectorValue-for-usize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"extendr_api/robj/into_robj/trait.ToVectorValue.html\" title=\"trait extendr_api::robj::into_robj::ToVectorValue\">ToVectorValue</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.sexptype\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/extendr_api/robj/into_robj.rs.html#254\">source</a><a href=\"#method.sexptype\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"extendr_api/robj/into_robj/trait.ToVectorValue.html#method.sexptype\" class=\"fn\">sexptype</a>() -&gt; SEXPTYPE</h4></section><section id=\"method.to_real\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/extendr_api/robj/into_robj.rs.html#254\">source</a><a href=\"#method.to_real\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"extendr_api/robj/into_robj/trait.ToVectorValue.html#method.to_real\" class=\"fn\">to_real</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a></h4></section><section id=\"method.to_complex\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/extendr_api/robj/into_robj.rs.html#172-177\">source</a><a href=\"#method.to_complex\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"extendr_api/robj/into_robj/trait.ToVectorValue.html#method.to_complex\" class=\"fn\">to_complex</a>(&amp;self) -&gt; Rcomplex<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section><section id=\"method.to_integer\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/extendr_api/robj/into_robj.rs.html#179-184\">source</a><a href=\"#method.to_integer\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"extendr_api/robj/into_robj/trait.ToVectorValue.html#method.to_integer\" class=\"fn\">to_integer</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a><div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section><section id=\"method.to_logical\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/extendr_api/robj/into_robj.rs.html#186-191\">source</a><a href=\"#method.to_logical\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"extendr_api/robj/into_robj/trait.ToVectorValue.html#method.to_logical\" class=\"fn\">to_logical</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a><div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section><section id=\"method.to_raw\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/extendr_api/robj/into_robj.rs.html#193-198\">source</a><a href=\"#method.to_raw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"extendr_api/robj/into_robj/trait.ToVectorValue.html#method.to_raw\" class=\"fn\">to_raw</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section><section id=\"method.to_sexp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/extendr_api/robj/into_robj.rs.html#200-205\">source</a><a href=\"#method.to_sexp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"extendr_api/robj/into_robj/trait.ToVectorValue.html#method.to_sexp\" class=\"fn\">to_sexp</a>(&amp;self) -&gt; SEXP<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></div></details>","ToVectorValue","extendr_api::prelude::Ix"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()