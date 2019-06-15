$(function () {


    let texp = /^1[3-9]\d{9}$/;
    let t = $(".fir").val()
    let phone = store.get("phnum") || [];
    console.log(phone);
   

    //获取输入框手机号的值，进行正则判断，
    $(".fir").blur(function () {
        // let t = $(".fir").value.trim();
        let t = $(".fir").val()
       
        //正确
        if (texp.test(t)) {
            // for(i=0;i<phone.length;i++){
                if(phone.indexOf(t) == -1){
                    console.log("----");
                    $(".err").addClass("fin").text("号码可以使用").fadeOut(1500);
                    phone.push(t)
                    store.set("phnum", phone);
                }else{
                    // $(".err").addClass("fin").text("该号码已经被注册").fadeOut(1500);
                    if(window.confirm('该号码已经被注册，是否前往登陆页登陆')){
                        //alert("确定");
                        return window.open("http://localhost/code/%E4%BA%8C%E9%98%B6%E6%AE%B5%E9%A1%B9%E7%9B%AE3/miyawang/login/login.html");
                     }else{
                        //alert("取消");
                        return false;
                    }
                }
            // }
          
           
            //错误
        } else {
            $(".err").addClass("fin").text("您输入的手机号有误，需为11位纯数字格式").fadeOut(1500);
        }

    })

    //获取验证码，生成随机4位数验证码
    var verifyCode = new GVerify("v_container");
    // console.log(verifyCode)
    $(".sec").blur(function () {
        console.log($(this));
        var res = verifyCode.validate($(".sec").val());
        if (res) {
            alert("验证正确");
            
            // $(".err").addClass("fin").text("验证码正确").fadeOut(1500);
        } else {
            alert("验证码错误");
            // $(".err").addClass("fin").text("验证码错误").fadeOut(1500);
        }
    })

    $(".yijian").click(function () {
        

        if (texp.test(t)&&phone.indexOf(t) && verifyCode.validate($(".sec").val())) {
            alert("即将跳转登陆页面")
            window.open("http://localhost/code/%E4%BA%8C%E9%98%B6%E6%AE%B5%E9%A1%B9%E7%9B%AE3/miyawang/login/login.html");
        } else {
            alert("请输入正确号码")
        }
    })

})