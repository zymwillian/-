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
            if(phone.indexOf(t) == -1){
                $(".err").addClass("fin").text("你输入号码不正确").fadeOut(1500);
               window.alert('该号码尚未注册，请先前往注册')
                    //alert("确定");
                    return window.open("http://localhost/code/%E4%BA%8C%E9%98%B6%E6%AE%B5%E9%A1%B9%E7%9B%AE3/miyawang/join/join.html");
            }else{
                $(".err").addClass("fin").text("号码正确").fadeOut(1500);
            }
           
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
        
        if (phone.indexOf(t) && verifyCode.validate($(".sec").val())) {
            alert("登陆成功即将跳转主页面")
            window.open("http://localhost/code/%E4%BA%8C%E9%98%B6%E6%AE%B5%E9%A1%B9%E7%9B%AE3/miyawang/index.html");
        } else {
            alert("请输入正确相关信息")
        }
    })

})