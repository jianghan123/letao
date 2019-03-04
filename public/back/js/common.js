//开启进度条 第一个ajax发送时，调用
$(document).ajaxStart(function () {
    NProgress.start();
})

//结束进度条 ajax完成时，调用

$(document).ajaxStop(function () {
    NProgress.done();
})

