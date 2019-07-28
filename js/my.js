$(function(){

$(".slidefloat ol").click(function() {
  $(this).parent().addClass('hidden');
});

$(".artinav a:eq(0)").addClass('cur');
$(".artinav a").mouseover(function(event) {
    $(".artinav a").removeClass('cur');
    $(this).addClass('cur');
});('cur');
// 导航下拉菜单	
$(".slidelist").hover(function() {
	//alert(0);
	$(".slidelist div").slideToggle(300);
});
//延迟加载
$(".lazy").lazyload({
    effect: "fadeIn",
    threshold: 200
});
//返回顶部
$(".back2top").click(function() {
    $('body,html').animate({ scrollTop: 0 }, 500);
    return false;
});

$(".banner").slide({
    mainCell: ".bd ul",
    titCell: ".hd ul",
    autoPlay: true,
    autoPage: true,
    effect: "fade",
    interTime: 5000,
    delayTime: 5000,
    mouseOverStop: false,
    startFun: function(i, c) {
        var now = $(".banner .bd li").eq(i);
        if (now.attr("data-load") == "no") {
            now.css("backgroundImage", "url(" + now.attr("data-bg") + ")");
            now.attr("data-load", "yes");
        }
    },
    endFun: function(i, c) {
        var now = $(".banner .bd li").eq(i + 1);
        if (now.attr("data-load") == "no") {
            setTimeout(function() {
                now.attr("data-load", "yes");
                now.css("backgroundImage", "url(" + now.attr("data-bg") + ")");
            }, 3000);
        }
    }
});

$(window).bind("scroll", function () {  
var sTop = $(window).scrollTop();  
var sTop = parseInt(sTop);  
if (sTop >= 80) { 
	$(".banner .hd").addClass("hidden");
}else{
	$(".banner .hd").removeClass("hidden");
};  
});  

// 点击滚动翻页显示，关键在于li float:left;display:inline
$(".jxcj").slide({
    titCell:".hd ul",
    mainCell:".bd ul",
    autoPage:true,//页面相接
    effect:"left",//效果
    autoPlay:false,
    //easing:"easeOutCirc",//缓动效果
    vis:3,//可视个数
    scroll:3,//滚动个数
    //interTime: 500,
    //delayTime: 2000,//效果速度
    mouseOverStop: true,//停止播放
    //trigger:click,//触发方式
    pnLoop:false,//前后按钮循环
});



















































})