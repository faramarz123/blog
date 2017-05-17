$(document).ready(function () {

    //PageLoad function()
    pageLoad();
    if(eraseCookie('token1')) 
    {
        console.log("token1 is erased. ");  
    }
});

//
function pageLoad() {
    // eraseCookie('token');
    //Is there a authenticated user or not
    if (readCookie('token')) 
    {
        $('.postsPanel').show();
        // showDOMElement("#posts");
        loadPosts();
    }
    else 
    {
        $('#loginPanel').show();
        // showDOMElement("#loginform");
        //Login function to handle form submit and set cookie, then, call LoadPosts().
        // login();
    }
}

//Login body
function login() {

    //Login on form submit 
    $('#loginform').submit(function (e) {
        e.preventDefault();
        console.log("hello from login submit");

        //Get username and password
        var username = $('#username').val();
        var password = $('#password').val();
        var loginData = { username: username, password: password };
        createCookie('token1', 'laskdj', 1);

        //HttpPostRequest to post login info.
        $.ajax({
            url: 'https://ancient-bayou-43826.herokuapp.com/login',
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(loginData),
            success: function (data) {
                // console.log('This is login success. And, token.data is : ',data.token);
                // getPostsToken = data.token;

                //Set the got toke to cookie
                createCookie('token', data.token, 1);
                // readCookie('token');
                // eraseCookie('token');
                // eraseCookie('token1');

                //Hide loginDOM before showing the posts
                hideDOMElement("#loginform");

                //Call loadPosts function to load posts
                // loadPosts();
                // console.log("This is loadPosts(). ");

            },
            error: function (xhr, textStatus, errorThrown) {
                alert('Hello from erroe function. ');

            }
        });
        return false;
    });
}

//Gets a DOMHtml element and show it.
function showDOMElement(domElementName) {
    console.log("This is " + domElementName + "DOM Show(). ");
    $(domElementName).show();
}

//Gets a DOMHtml element and hide it.
function hideDOMElement(domElementName) {
    console.log("This is " + domElementName + "DOM Hide(). ");
    $(domElementName).hide();
}

//Loads the posts of the user
function loadPosts() {

    console.log("This is loadPosts(). and cookie is :", readCookie('token'));
    // showDOMElement('#posts');
    // console.log(readCookie('token'));
    // console.log(getPostsToken);
    $.ajax({
        url: 'https://ancient-bayou-43826.herokuapp.com/posts',
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        headers: {
            'token': readCookie('token')
        },
        success: function (posts) {
            console.log("This is load post success. ");
            // console.log(posts);
            // $.each(data, function (index, post) {
            //     $("#posts").append("<li><span>" + post.text + "</span> <button type='button' value='load comments' onclick='loadcomments(" + post.id + ")' /></li>");
            //     // $("#ul").append('<li>post: ' + post + '</li>');
            // });
        }
    });
}
//Load comments
function loadcomments(post_id) {
    $.ajax({
        url: 'https://ancient-bayou-43826.herokuapp.com/comments/' + post_id,
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (comments) {
            // $.each(data, function (commentIndex, comment) {
            comments.forEach(function (element) {
                $("#").append("<p>comment " + comments.indexOf(element) + " : " + element.text + "</p>");
            }, this);

        }
    });
}