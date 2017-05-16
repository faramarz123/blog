$(document).ready(function () {


    var getPostsToken;
    //At first hide postsDOMElement
    hideDOMElement('#posts');

    //Call login function
    login();


    //Login function to handle form submit and set cookie then, call cloadPosts().
    function login() {

        // console.log("hello from login. ");

        // if (readCookie("token")) {
        //     hideLoginForm();
        //     loadPosts();
        // }

        //Login on form submit 
        $('#loginform').submit(function (e) {
            e.preventDefault();
            console.log("hello from login submit");


            //Get username and password
            var username = $('#username').val();
            var password = $('#password').val();
            var loginData = { username: username, password: password };
            


            //HttpPostRequest to post login info.
            $.ajax({
                url: 'https://ancient-bayou-43826.herokuapp.com/login',
                type: 'POST',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify(loginData),
                success: function (data) {
                    console.log('This is login success. ');
                    getPostsToken = data.token;

                    //Set the got toke to cookie
                    // createCookie('token', data.token, 7);
                    console.log(getPostsToken);
                    //Hide loginDOM before showing the posts
                    hideDOMElement("#loginform");

                    //Call loadPosts function to load posts
                    loadPosts();
                    // console.log("This is loadPosts(). ");
                    // showDOMElement('#posts');
                    //var usrIsAuthenticated = readCookie('token');
                    //if (usrIsAuthenticated) {


                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log('Hello from erroe function. ');

                }
            });
            return false;
        });
    }

    function showDOMElement(domElementName) {
        console.log("This is " + domElementName + "DOM Show(). ");
        $(domElementName).show();
    }
    function hideDOMElement(domElementName) {
        console.log("This is " + domElementName + "DOM Hide(). ");
        $(domElementName).hide();
    }
    //loadPosts function
    function loadPosts() {
        console.log("This is loadPosts(). and cookie is :",getPostsToken);
        showDOMElement('#posts');
        // console.log(readCookie('token'));
        // var usrIsAuthenticated = readCookie('token');
        // if (usrIsAuthenticated) {
            console.log(getPostsToken)
        $.ajax({
            url: 'https://ancient-bayou-43826.herokuapp.com/posts',
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            headers: {
                'token': getPostsToken
            },
            success: function (posts) {
                console.log("This is load post success. ");
                console.log(posts);
                posts.forEach(function (post) {
                    $("#ul").append('<li>post: ' + post + '</li>');
                }, this);
            }
        });


    }


})