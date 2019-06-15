$(function(){

var index=window.location.search.slice(1,2);/* 下标 */

console.log(index);



$.get({
    url:"http://localhost/code/%E4%BA%8C%E9%98%B6%E6%AE%B5%E9%A1%B9%E7%9B%AE3/miyawang/php/foryou.php",

    success(responseText) {
        var da = JSON.parse(responseText);
        console.log(da);
      let te=`<div class="tit">
      <a href="">PHEENY</a>

      ${da[index].title}
  </div>
  <div class="desmsg">
  ${da[index].des}
  </div>
  <div class="price">
      <div class="price1">
          <span class="te">售价</span>
          <span class="new">￥ ${da[index].new}</span>
          <span class="old">￥ ${da[index].old}</span>
      </div>
      <div class="price2">
          <span class="te">优惠</span>
          <span class="xian"><a href="">
                  <i>限时秒杀</i>
                  每人限购5件,总限购200件,超出按照原价计算
              </a></span>
          <div class="quan">
              <i>领券</i>
              <span>
                  <a href="">
                      满199减30券
                  </a>
              </span>
          </div>
      </div>
  </div>`

    $(".xiangqing").append(te)
    }
    
 })

})

