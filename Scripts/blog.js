$(document).ready(function () {

    //PageLoad function()
    if (readCookie('token')) {
        $('.posts-panel').show();
        console.log('hello from ready');
        loadPosts();
    }
    else {
        //Login function to handle form submit and set cookie, then, call LoadPosts().ّ
        $('.login-panel').show();
    }
});

//Login body
function login() {

    //Login on form submit 
    $('.login-form').submit(function (e) {
        e.preventDefault();
        console.log("hello from login submit");

        //Get username and password
        var username = $('#username').val();
        var password = $('#password').val();
        var loginData = { username: username, password: password };
        //create success callback function
        var success = function (data) {
            //Set the got toke to cookie
            createCookie('token', data.token, 10);
            //Call loadPosts function to load posts
            loadPosts();
        };
    });
    // call postRequest function and pass the required args to post the login request
    httpRequest('https://ancient-bayou-43826.herokuapp.com/login', 'POST', 'json', 'application/json', JSON.stringify(loginData), successProperty);
};


//postRequest


//getRequest() function
function getRequest(url, type, dataType, contentType, success1) {
    $.ajax({
        url: url,
        type: type,
        dataType: dataType,
        // async: false, //....
        contentType: contentType,
        headers: {
            'token': readCookie('token')
        },
        success: success1
    });
}