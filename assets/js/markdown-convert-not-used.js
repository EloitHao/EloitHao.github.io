
<script>

 var string = document.getElementById("learn").innerHTML;
 var result = string.replace(/white/gi, "black");
 document.getElementById("learn").innerHTML = result;

</script>

var string = "This is bitdegree.org!";
var siteurl = "{page.url}"
var page_real_name = siteurl.replace("https://EloitHao.github.io","")
var page_real_name = siteurl.replace("https://EloitHao.github.io","")

var result = string.replace("<img = ' ", "<img src=\"https://raw.githubusercontent.com/EloitHao/EloitHao.github.io/master/_posts/2018-08-20-One-Forms/");

// 将所有本地 img 转换为 raw.github，以符合 kramdown
// replace "<img = ' ", "<img src=\"https://raw.githubusercontent.com/yk-liu/yk-liu.github.io/master/_posts"
// and replace {{ page.url}}
// (which is "https://yk-liu.github.io/2018/08/20/One-Form") to "2018-08-20-One-Forms" : remove "...github.io/" & replace / to -
// and put that behind
string.replace("<img = ' ", "<img src=\"https://raw.githubusercontent.com/yk-liu/yk-liu.github.io/master/_posts/");
string2="{page.url}".replace("https://yk-liu.github.io/","")
string2.replace("///g","/-")

add "/" to the tail
//将所有页内引用转换为小写，符合 Kramdown
// replace )[#latters-and-hypens]) to lowercase
var string = "大约是八月，然后我收到一封电子邮件",

var modified = string.replace(")]#/\b[A-Z]{2,}\b/g", function(match) {
    return match.toLowerCase();
});

console.log(modified);

// highlight support

//Mermaid 支持
<script src="/assets/js/mermaid.full.min.js"></script>
<script>mermaid.initialize({startOnLoad:true});</script>
<div class="mermaid">
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
</div>

