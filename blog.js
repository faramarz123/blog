$(document).ready(function () {

    //PageLoad function()
    pageLoad();
    if (eraseCookie('token1')) {
        console.log("token1 is erased. ");
    }
});

//
function pageLoad() {
    // eraseCookie('token');
    //Is there a authenticated user or not
    if (readCookie('token')) {
        $('.posts-panel').show();
        // showDOMElement("#posts");

        // var postsDOM = 
        // $('<button/>', {
        //     text: 'کامنت ',
        //     onClick: function () {
        //         console.log("hello");
        //         //loadcomments(post_id);
        //     }
        // }).appendTo(postsDOM);
        // console.log("hello");
        loadPosts();
    }
    else {
        $('#login-panel').show();
        // showDOMElement("#loginform");
        //Login function to handle form submit and set cookie, then, call LoadPosts().
        // login();
    }
}

//Login body
function login() {

    //Login on form submit 
    $('#login-form').submit(function (e) {
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
                // console.log('This is login success. And, token.data is : ',data.token);
                // getPostsToken = data.token;

                //Set the got toke to cookie
                createCookie('token', data.token, 10);
                // readCookie('token');
                // eraseCookie('token');

                //Call loadPosts function to load posts
                loadPosts();
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


            var postsDOM = $(".posts");

            var myPosts = posts.posts;



            myPosts.forEach(function (post) {
                // console.log(post)
                var li = document.createElement("LI");
                var liText = myPosts.indexOf(post) + ". " + post.title + " : " + post.content;
                var postId = post.id;
                // $("<li/>", { "text": liText }).appendTo(postsDOM);
                $("<li><span>" + liText + "</span> <button text='کامنت' onclick='loadcomments(" + post.id + ")' >کامنت</button> </li><hr/>").appendTo(postsDOM);

                
                // $("<button text='کامنت' onclick='loadcomments(" + post.id + ")' /></button> <hr/>").appendTo(postsDOM);
                // var commentBtn = $("button");
                // commentBtn.on('click',function()
                // {
                //     console.log("commentBtn. ");
                // });
                // postsDOM.append($('button').text('asuidhkas'));
                // commentBtn.appendTo(postsDOM);

                // postsDOM.append("<li><span>" + post.content + "</span> <button type='button' value='load comments' onclick='loadcomments(" + post.id + ")' /></li>");
                console.log("Posts are loaded. ");
            });
            // var mostVisitedPosts = myposts.filter()
            // console.log("posts are appended to DOM. ");

        }
    });
}
//Load comments
function loadcomments(post_id) {
    console.log("This is loadComments. ");
    $.ajax({
        url: 'https://ancient-bayou-43826.herokuapp.com/comments/' + post_id,
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        headers: {
            'token': readCookie('token')
        },
        success: function (commentsObject) {
            var commentsArray = commentsObject.comments;
            // console.log(commentsArray);
            // var arr2 = commentsArray.comments;
            // console.log(arr2)

            commentsArray.forEach(function (comment) {

                var arr = comment.comments;
                // console.log(arr);

                arr.forEach(function (comment2) {
                    console.log(comment2);
                })

            })
            // comments.forEach(function (comment) {
            // console.log("comment")
            // });
            // $.each(data, function (commentIndex, comment) {
            // comments.forEach(function (element) {
            //     $("#").append("<p>comment " + comments.indexOf(element) + " : " + element.text + "</p>");
            // }, this);

        }
    });
}