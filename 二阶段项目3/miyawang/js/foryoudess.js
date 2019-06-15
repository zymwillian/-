$(function(){


 //通过委托事件来绑定事件
 $(".foryoulist").on("click",".dess",function(e){
     e.preventDefault();
     console.log("---");
    num=$(this).data("index");

     $.get({
        url:"http://localhost/code/%E4%BA%8C%E9%98%B6%E6%AE%B5%E9%A1%B9%E7%9B%AE3/miyawang/php/fouyoudess.php?num="+num,

        success(responseText) {
            var data = JSON.parse(responseText);
            console.log(data);
            window.location.href="http://localhost/code/%E4%BA%8C%E9%98%B6%E6%AE%B5%E9%A1%B9%E7%9B%AE3/miyawang/dess/dess.html?"+num+"&"+"w"
        
        }




        
     })
     
 })







})