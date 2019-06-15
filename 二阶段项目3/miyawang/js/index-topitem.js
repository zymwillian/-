$(function () {

    //请求topitem部分内容
    let arr = [];
    let temp1 = [];
    let temp2 = [];
    $.get({
        url: "./php/topitem.json",
        success(data) {
            let dataitem1 = data.nav1
            let dataitem2 = data.nav2
            console.log(dataitem2 );
            
            let index=0;
            // console.log(dataitem1);
          for(var j=0;j<dataitem2.length;j++){
            
            for (var i = 0; i <1; i++) {
                console.log(dataitem1[j],i); 
//    console.log(dataitem2[j][i],i);              
                let n1 = `
                    <div class="list1">
                        <a href="">
                            <span class="tit">
                                <img src="${dataitem1[j].src}" alt="">
                            </span>
                            ${dataitem1[j].des}
                        </a>

                        <div class="list1-1">
                            <a href="">
                                <div class="list1-img">
                                    <img src="${dataitem2[j][i].src1}" alt="">
                                    <span class="dess">${dataitem2[j][i].dess}</span>
                                </div>
                                <div class="list1-des">
                                    <p>${dataitem2[j][i].listdes}</p>
                                    <div>
                                        <span class="new">￥<em>${dataitem2[j][i].new}</em></span>
                                        <span class="old">￥<em>${dataitem2[j][i].old}</em></span>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                            <div class="list1-img">
                                <img src="${dataitem2[j][i+1].src1}" alt="">
                                <span class="dess">${dataitem2[j][i+1].dess}</span>
                            </div>
                            <div class="list1-des">
                                <p>${dataitem2[j][i+1].listdes}</p>
                                <div>
                                    <span class="new">￥<em>${dataitem2[j][i+1].new}</em></span>
                                    <span class="old">￥<em>${dataitem2[j][i+1].old}</em></span>
                                </div>
                            </div>
                        </a>
                        <a href="">
                        <div class="list1-img">
                            <img src="${dataitem2[j][i+2].src1}" alt="">
                            <span class="dess">${dataitem2[j][i+2].dess}</span>
                        </div>
                        <div class="list1-des">
                            <p>${dataitem2[j][i+2].listdes}</p>
                            <div>
                                <span class="new">￥<em>${dataitem2[j][i+2].new}</em></span>
                                <span class="old">￥<em>${dataitem2[j][i+2].old}</em></span>
                            </div>
                        </div>
                    </a>
                    <a href="">
                    <div class="list1-img">
                        <img src="${dataitem2[j][i+3].src1}" alt="">
                        <span class="dess">${dataitem2[j][i+3].dess}</span>
                    </div>
                    <div class="list1-des">
                        <p>${dataitem2[j][i+3].listdes}</p>
                        <div>
                            <span class="new">￥<em>${dataitem2[j][i+3].new}</em></span>
                            <span class="old">￥<em>${dataitem2[j][i+3].old}</em></span>
                        </div>
                    </div>
                </a>
                <a href="">
                <div class="list1-img">
                    <img src="${dataitem2[j][i+4].src1}" alt="">
                    <span class="dess">${dataitem2[j][i+4].dess}</span>
                </div>
                <div class="list1-des">
                    <p>${dataitem2[j][i+4].listdes}</p>
                    <div>
                        <span class="new">￥<em>${dataitem2[j][i+4].new}</em></span>
                        <span class="old">￥<em>${dataitem2[j][i+4].old}</em></span>
                    </div>
                </div>
            </a>
                </div>
                    </div>`
                $(".topitem-list").append(n1)
            }
          }

        }

    })

})