$(function () {
    //请求foryoulist部分内容
    $.get({
        url: "./php/foryou.php",
        success(responseText) {
            var te = JSON.parse(responseText);
            // console.log(te);
            for (i = 0; i < te.length; i++) {
                let text = ` <a href="" class="dess" data-index="${i}">
                <div>
                    <img src="${te[i].src}" alt="">
                </div>
                <div class="bott">
                    <p class="title">${te[i].title}</p>
                    <p class="des">${te[i].des}</p>
                    <div class="bott2">
                        <span class="new">秒杀价:￥<em>${te[i].new}</em></span>
                        <span class="old">市场价:￥<em>${te[i].old}</em></span>
                    </div>

                    <span class="buy">${te[i].buy}</span>
                    <span class="go">${te[i].go}</span>

                </div>
            </a> `
                $(".foryoulist").append(text)
            }

        }
    })


})