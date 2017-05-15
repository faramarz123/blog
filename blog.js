$(document).ready(function () {

    //pageLoad();
    //$("submit").
    authentication();


    function pageLoad() {
        // authentication();
    }

    function authentication() {
        //$("submit")
        console.log("hello");

        //parameters


        $('#loginform').submit(function (e) {
            e.preventDefault();
            console.log("hello from click2");
            // e.preventDefault();

            //var form = $(this);
            var username = $('#username').val();
            var password = $('#password').val();
            var loginData = { username: username, password: password };
            //      $.post("https://ancient-bayou-43826.herokuapp.com/login",
            // {
            //     username: username,
            //     password: password
            // },
            // function(data){
            //     alert("Data: " + data.token  );
            // });
            $.ajax({
                url: 'https://ancient-bayou-43826.herokuapp.com/login',
                type: 'post',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify(loginData),
                success: function () {
                    console.log('Hello from success function. ');
                    $.cookie('username', 'pgtest', { expires: 1 });
                    var currentusr = $.cookie('username');
                    //var token = result.token;
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log('Hello from erroe function. ');
                    // console.log('error');
                }
            });
            return false;
        });
    }
})