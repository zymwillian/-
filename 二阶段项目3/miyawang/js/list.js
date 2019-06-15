$(function(){
    //请求商品列表的数据
    $.get({
       
        // url:"http://localhost/code/%E4%BA%8C%E9%98%B6%E6%AE%B5%E9%A1%B9%E7%9B%AE2/miyawang/php/list.json",
        url:"../php/list.json",
        success(data){
            for(i=0;i<data.length;i++){
                // console.log(data[i]);
                let text=` <div class="pub"><a href="">
                <img src="${data[i].src}" alt="">
                <div class="ge">
                    <div class="fix">
                        <span class="fl">￥<b>${data[i].fl}</b><em>自营</em></span>
                        <span class="fr">${data[i].fr}</span>
                    </div>
                    <p>
                        <a href="">${data[i].tit}</a>
                    </p>
                    <div class="ee">
                        <span>${data[i].des}</span>

                        ${data[i].dess}
                    </div>
                </div>
            </a></div>
                `
                $(".shops").append(text)
            }
        }
    })
})