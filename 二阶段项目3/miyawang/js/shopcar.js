$(function () {

    //进行读取本都存储数据，没有就为空
    let arrData = store.get("key") || [];

    console.log(arrData);

    rand();



    function rand() {
        $(".li").empty();
        let arr=[]
        let zj=0;
        for (i = 0; i < arrData.length; i++) {

            let text = `  <div class="cout cl" data-index=${i}>
                    <div class="th">
    <input type="checkbox">
</div>
<div class="gwimg">
    <a href="">
        <img src="${arrData[i].im}" alt="">
        <span>限时秒杀</span>
    </a>

</div>
<div class="gwname">
    <div class="name-1">
        <p><a href="">${arrData[i].des}</a>
        </p>
        <p>
            <span>${arrData[i].color} ${arrData[i].age}</span>
        </p>
    </div>
</div>
<div class="gwprice">
    <p>￥${arrData[i].pr}</p>
    <p class="oldd">${arrData[i].opr}</p>
</div>
<div class="jisuan">
<button class="jj">-</button>
    <em class="ing">${arrData[i].coun}</em>
    <button class="jf" class="${i}">+</button>
    <span class="xiangou">每人限购五件</span>
</div>
<div class="zui">
    <span>￥${arrData[i].zong}</span>
</div>
<div class="shan">
<p class="de">
    <a href="">删除</a>
</p>
</div>
</div>`

            $(".li").append(text)
           
  
    //计算总价
        arr.push(arrData[i].zong)
        zj +=parseInt(arr[i]*1)
        console.log(zj);   
        }
        $(".zj").text("￥"+zj)

           //计算件数
    console.log(arrData.length);
    $(".sl").text(arrData.length);
    }
 
    //清空所有
    $(".de").click(function(e){
        e.preventDefault();
        store.clear();
        // store.set("key", arrData);
        rand();
    })
    /* 当点击删除按钮的时候，删除对应标签 */
    $(".li").on("click", ".de a", function (e) {
        e.preventDefault();
        /* 当点击的时候删除数据(本地存储的数据)*/
        /*先获取要删除数据的那个索引*/
        // let index = node[0].getAttribute("data-index");
        // let index = node.attr("data-index");  //js dataset.index
        let node = $(this).parent().parent().parent();
        index = node.data("index")
        console.log(node);

        arrData.splice(index, 1);

        /* 同步本地存储数据 */

        store.set("key", arrData);

        /*[02-3] 当点击的时候删除UI界面的这个li标签*/
       
        // node.remove();
        rand();

    })

    /* 当点击加法的时候 */
    var xin= $(this).prev().text();
    $(".li").on("click",".jf",function(){
        let jaa = $(this).parent().parent().data("index")
        arrData[jaa].coun++;
    // arrData[jaa].zong= parseInt(arrData[jaa].coun  *(arrData[jaa].pr *1))
    arrData[jaa].zong=(arrData[jaa].coun  *(arrData[jaa].pr *1)).toFixed(2)
        store.set("key", arrData);
        rand();
    })
    
    /* 当点击减法的时候 */

    $(".li").on("click",".jj",function(){
        let jaa = $(this).parent().parent().data("index")
        arrData[jaa].coun--;
        if( arrData[jaa].coun <=0){
            arrData[jaa].coun =0
        }
    // arrData[jaa].zong= parseInt(arrData[jaa].coun  *(arrData[jaa].pr *1))
    arrData[jaa].zong=(arrData[jaa].coun  *(arrData[jaa].pr *1)).toFixed(2)
        store.set("key", arrData);
        rand();
    })


   

//检测checkBox
$("#CheckAll").click(function(){
    $("input:checkbox").prop("checked","checked");
    // $("input:checkbox").removeAttr("checked");
});



})