$(function(){
//鼠标滑过详情页面，红色购物车按钮下方的非自营li标签，动画
    $(".ee li").hover(function(){
        // console.log( $(this).children("span"));
        $(this).children("span").stop(true).toggle();
        $(this).children("span").removeClass("xian").animate({
            "top":"25px"
        },800)
      
    }  ,function(){
        $(this).children("span").stop(true).toggle();
        $(this).children("span").addClass("xian").animate({
            "top":"40px"
        },800)
    })

    //鼠标滑过对应缩小图，显示对应大图

    $(".small img").hover(function(){
        // console.log("awwa");
        console.log(this);
    $(this).addClass("bbb").siblings().removeClass("bbb")
    $(this).parent().prev().children("img").attr("src",$(this).attr("src"))
    },function(){
        $(this).eq(0).parent().prev().children("img").attr("src",$(this).eq(0).attr("src"))
    })
  

})