$(document).ready(function()
{

        //pageLoad();
        //$("submit").
        authentication();


    function pageLoad()
    {
        // authentication();
    }

    function authentication()
    {
        //$("submit")
        console.log("hello");

        //parameters


        $('#submit').click(function(e)
        {
             console.log("hello from click2");
            e.preventDefault();
            //var form = $(this);
        var username = $('#username').val();
        var password = $('#password').val(); 
        var loginData = {username: username,password: password};
            $.ajax({
                url: 'https://ancient-bayou-43826.herokuapp.com/login',
                type: 'post',
                contentType: 'application/json;',
                dataType: 'json',
                async: true,
                data: JSON.stringify(loginData) ,
                success: function()
                {
                    console.log('Hello from success function. ');
                    //var token = result.token;
                },   
                error: function(xhr,textStatus,errorThrown)
                {
                    console.log('Hello from erroe function. ');
                    // console.log('error');
                }
            });
            return false;
        });
    }
})