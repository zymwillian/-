$(function () {
    $(".er").hover(function () {
        // console.log("aaaa");
        $(this).children("dd").addClass("toggle")
        $(this).children("dd").stop(true).toggle();
    }, function () {
        $(this).children("dd").removeClass("toggle")
        $(this).children("dd").stop(true).toggle();
    })
    // console.log($(".nav .tr"));

    $(".tr").hover(function () {
        // console.log("aaaaaaaaaa");
        
        $(this).children(".li-list").addClass("current")
        $(this).children(".li-list").stop(true).toggle();
    }, function () {
        $(this).children(".li-list").removeClass("current")
        $(this).children(".li-list").stop(true).toggle();
    })

    // $(".menus").hover(function(){
    //     console.log("aaaaa");
        
    //     $(this).children("dl").addClass("current")
    //     $(this).children("dl").stop(true).toggle();
    // },function(){
    //     $(this).children("dl").removeClass("current")
    //     $(this).children("dl").stop(true).toggle();
    // })
})