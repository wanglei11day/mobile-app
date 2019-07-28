require.config({
    paths:{
        "jquery":"jquery-1.9.1.min"
    }
});









require(["jquery"],function($){
//    头部导航下拉菜单
    $(".menuBtn").click(function(){
        if($(".menu").is(":hidden")){
            $(".menu").slideDown("fast");
        }else{
            $(".menu").slideUp("fast");
        };
    });



    //    头部导航下滑线位置改变
    var index=null;
    var left;
    $(".nav ul li").click(function(){
        index=$(this).index();
        left=$(this).position().left;
        $(".nav ul li.active").removeClass("active");
        $(this).addClass("active");
        $(".line").stop().animate({
            left:left
        },500);
    });




});