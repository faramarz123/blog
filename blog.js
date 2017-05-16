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
    function createCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        }
        else var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name, "", -1);
    }

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
            
            createCookie('ppkcookie', 'testcookie', 7);
                    var x = readCookie('ppkcookie1');
                    if (x) {
                        console.log('cookie is set. ');
                    }
                    var x = readCookie('ppkcookie1');

            //Httprequest
            $.ajax({
                url: 'https://ancient-bayou-43826.herokuapp.com/login',
                type: 'post',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify(loginData),
                success: function (item) {

                    
                    //console.log('token is : ', item.token, " ", "Hello from success function. and token is; ", x);
                    // var cookieToken = item.token;
                    // console.log('token is : ', cookieToken);
                    //  $.cookie("token", cookieToken,{ expires : 10 });
                    // console.log("token from cookie: ", $.cookie("token"));
                    // var token = result.token;
                    //Set username on cookie
                    // $.cookie('token', token, { expires: 1 });
                    // var currentusr = $.cookie('token');



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