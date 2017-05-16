$(document).ready(function () {

    //pageLoad();
    //$("submit").
    //call authentication function
    authentication();


    //Pageload
    function pageLoad() {
        // authentication();
    }

    //createcookie function


    function authentication() {
        //$("submit")
        console.log("hello from authentication. ");

        //parameters

        //Login on form submit 
        $('#loginform').submit(function (e) {
            e.preventDefault();
            console.log("hello from submit");
            // e.preventDefault();

            //var form = $(this);

            //get username and password
            var username = $('#username').val();
            var password = $('#password').val();
            var loginData = { username: username, password: password };



            //Httprequest
            $.ajax({
                url: 'https://ancient-bayou-43826.herokuapp.com/login',
                type: 'POST',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify(loginData),
                success: function (data) {
                    console.log('hello from success. ');
                    createCookie('token', data.token, 7);
                    
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