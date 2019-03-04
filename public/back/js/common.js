//开启进度条 第一个ajax发送时，调用
$(document).ajaxStart(function () {
    NProgress.start();
})

//结束进度条 ajax完成时，调用

$(document).ajaxStop(function () {
    NProgress.done();
})

//登入拦截功能,登入页面不需要校验
//前后分离了，前端是不知道该用户是否登陆了，但是后台知道
//发送ajax请求，查询用户状态即可
if (location.href.indexOf("login.html") === -1) {
    //不是登入页，所以开始校验
    $.ajax({
        type: "get",
        url: "/employee/checkRootLogin",
        dataType: "json",
        success: function (info) {
            //已登入
            if (info.success){

            }
            if (info.error === 400){
                //未登入
                location.href = 'login.html'
            }
        }
    })
}



$(function () {
    //1分类管理的切换功能
    $(".nav .category").click(function () {
        //切换slideToggle显示隐藏
        $(".nav .child").stop().slideToggle();
    })
    //2左边侧边栏切换功能
    $('.icon-menu').click(function () {
        //toggleClass切换类
        $('.lt_aside').toggleClass("hidemenu");
        $('.lt_main').toggleClass("hidemenu");
        $('.lt_topbar').toggleClass("hidemenu");

    })
    //3退出功能
    $('.icon_logout').click(function () {
        //bootstrap 显示模态框
        $('logoutModal').modal('show')
    })

    $('#logoutBtn').click(function () {
        //发送ajax退出
        $.ajax({
            type:"get",
            url:'',
            dataType:"json",
            success:function (info) {
                if (info.success) {
                    //退出成功
                    location.href='index.html'
                }
            }
        })
    })
})