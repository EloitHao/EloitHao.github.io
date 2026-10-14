// 回到顶部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// 切换侧栏显示
function ToggleTOC() {
    var x = document.getElementById("mySidenav");
    if (x.style.display === "none") {
        x.style.display = "inline-block";
        document.getElementById("main").style.marginLeft = "24%";
    } else {
        x.style.display = "none";
        document.getElementById("main").style.marginLeft = "6%";
    }
}

// 滚动时隐藏顶部导航（上滑时再显示），并控制返回顶部按钮
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var topnav = document.getElementById("topnav");
    var backToTop = document.getElementById("BackToTop");

    // 顶部导航：下滑隐藏，上滑显示
    if (prevScrollpos > currentScrollPos) {
        if (topnav) topnav.style.top = "0";
    } else {
        if (topnav) topnav.style.top = "-60px";
    }

    // 返回顶部按钮：滚过一屏的 1/3 后出现
    if (backToTop) {
        backToTop.style.display = currentScrollPos > window.innerHeight / 3 ? "block" : "none";
    }
    prevScrollpos = currentScrollPos;
};

// 手机端：点击侧栏/按钮以外的区域时自动收起侧栏
// 注意：点击 label 会向 checkbox 转发一次 click，需要放行，否则侧栏会被立即误关
document.addEventListener('click', function (e) {
    var checkbox = document.getElementById('sidebar-checkbox');
    if (!checkbox || !checkbox.checked) return;
    if (e.target.closest('.sidebar') || e.target.closest('.sidebar-toggle') || e.target.closest('.sidebar-checkbox')) return;
    checkbox.checked = false;
});
