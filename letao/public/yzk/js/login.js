$(function (){

    $('#loginBtn').on('click',function(){
        
        var username = $.trim($("[name='username']").val());
        var password = $.trim($("[name='password']").val());

        if(!username){
            mui.toast('用户名不能为空');
            return;
        }
        if(!password){
            mui.toast('密码不能为空');
            return;
        }
        $.ajax({
            url: '/user/login',
            type: 'post',
            data:{
                username : username,
                password : password
            },
            beforeSend:function(){
                $('#loginBtn').html('正在登录...');
            },
            success: function(res){
                console.log(res)
                alert('登陆成功')
                $('#loginBtn').html('登录');
                setTimeout(function (){
                    location.href = 'user1.html';
                },2000)
            }
        })
    })
})