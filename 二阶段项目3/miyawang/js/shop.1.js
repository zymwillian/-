$(function () {

    let shoplist = [];
  
    let arrData = store.get("key") || [];
    // console.log(arrData);
    // console.log(arrData.length);
    /*00-根据本地存储的数据来生成UI*/
    rander();

    function rander() {
        $(".cart-more .add").empty();
        for (i = 0; i < arrData.length; i++) {
            let tpl = `  
        <dl class="clear">
            <dt>
                <a href="">
                    
                    <img src="${arrData[i].im}" alt="">
                </a>
            </dt>
            <dd>
                <p class="cardes">
                    <span>￥${arrData[i].pr}</span>
                   <a href=""> ${arrData[i].des}</a>
                </p>
                <p class="carnum">X${arrData[i].coun}</p>
            </dd>
            </dl>
       `
            $(".cart-more .add").append(tpl);
       
        }
    }

console.log(  $(".change3 .b").parent().parent().parent().prev().children(".sta").children("img").attr("src"));

    // 点击购物车事件
    /*[01-1]-获取添加按钮绑定点击事件*/
    $(".change3 .b").click(function (e) {
        /*禁止使用默认行为*/
        e.preventDefault();
        // console.log("asdsadsad");
        let title = $(this).parent().prev().prev().children(".tit").text();
        // console.log(title);
        let img = $(this).parent().parent().parent().prev().children(".sta").children("img").attr("src");
        //    console.log(img);

        let pp = $(this).parent().prev().prev().children(".price").children(".price1").children(".new").text();
       let price=pp.slice(1,pp.length)
        let oldprice = $(this).parent().prev().prev().children(".price").children(".price1").children(".old").text();
       
        let num=$(this).parent().prev().children(".change3").children("div").children("em").text();



        
        /*[01-2]-获取拿到的的内容，检查,放到对象里，并且放到数组，*/
      for(j=0;j<1;j++){
        var n = {
           des : title,
           pr : price,
            im : img,
           coun: num,
           opr: oldprice,
           zong:( (price*1) *(num*1)).toFixed(2),
           color:"red",
           age:"8-16岁"
        };
        arrData.push(n)
        console.log(arrData);

        /*把数据保存到本地存储中*/
        store.set("key", arrData);
      }
      rander();
    
    })

  
//    /* 点击款式和尺码，加红色边框，用排它 */
   $(" .change1 .list").click(function(){
    console.log("aaaaaaa");
    
    $(this).addClass("red").siblings().removeClass("red")
     var col=$(this).text();
    // n.color=col;   
})
$(" .change2 .list").click(function(){
    $(this).addClass("red").siblings().removeClass("red")
     var ag=$(this).text();
    // n.age=ag;  
})




    /* 进行商品数量的加减 */
$(".change3 .ja").click(function(){
  console.log("asdasdsad");
  
  var  index=$(this).prev().text()
    index++;
    $(this).prev().text(index)
})

$(".change3 .ji").click(function(){
    var  index=$(this).next().text()
    index--;
    if(index <=1){
        index =1
    }
    $(this).next().text(index)
})

/* 鼠标滑过购物车显示，默认隐藏 */
    $("#box .header-item .fr .shopcar").hover(function(){
    
    $(this).children(".cart-more").stop().toggle();
    })

 
})