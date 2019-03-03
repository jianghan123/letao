$(function () {
    //配置的字段和input框中指定的name关联
    $("#form").bootstrapValidator({
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
                    }
                }
            }
        }
    });
});