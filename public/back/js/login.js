$(function () {
    //配置的字段和input框中指定的name关联
    $("#form").bootstrapValidator({
        //配置校验图标
        //2. 指定校验时的图标显示，默认是bootstrap风格
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok', //校验成功
            invalid: 'glyphicon glyphicon-remove', //校验失败
            validating: 'glyphicon glyphicon-refresh' //校验中
        },
        //配置字段
        fields:{
            username: {
                //配置非空
                validators: {
                    notEmpty: {
                        message: "用户名不能为空"
                    },
                    stringLength: {
                        //长度校验
                        min: 2,
                        max: 6,
                        message: "用户名长度在二到六位"
                    }
                    //专门用于配置回调提示的规则
                    callback: {
                        message: "用户名不存在"
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: "密码不能为空"
                    },
                    stringLength: {
                        //长度校验
                        min: 6,
                        max: 12,
                        message: "密码长度在6到12位"
                    },
                    callback: {
                        message: "密码错误"
                    }
                }
            }
        }
    });

    /*
    2登入功能
    success.form.bv 插件自带事件名
     */
    $('#form').on("success.form.bv",function (e) {
        //阻止默认的表单提交
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "/employee/employeeLogin",
            data: $('#form').serialize(),
            dataType: "json",
            success: function (info) {
                console.log(info)
                if (info.success){
                    //info.success == true
                    location.href = "index.html";
                }
                if (info.error === 1000) {
                    alert("用户名错误")
                    $('#form').data("bootstrapValidator").updateStatus("username","INVALID","callback");
                }

                if (info.error === 1001) {
                    alert("密码错误")
                    $("#form").data("bootstrapValidator").updataStatus("password","INVALID","callback")
                }
            }
        })

    })

    //3重置功能
    $('[type="reset"]').click(function () {
        //插件的方法 resetForm 传true重置内容和状态 flase重置状态
        $('#form').data("bootstrapValidator").resetForm()
    })
});