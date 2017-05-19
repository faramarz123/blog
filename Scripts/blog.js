$(document).ready(function () {

    //PageLoad function()
    if (readCookie('token')) {
        $('.posts-panel').show();
        loadPosts();
    }
    else {
        //Login function to handle form submit and set cookie, then, call LoadPosts().ّ
        $('.login-panel').show();

        // login();
    }
    // pageLoad();
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
    postRequest('https://ancient-bayou-43826.herokuapp.com/login', 'POST', 'json', 'application/json', JSON.stringify(loginData), successProperty);
};

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
//postRequest
function postRequest(urlProperty, typeProperty, dataTypeProperty, contentTypeProperty, dataProperty, successProperty) {
    $.ajax({
        url: urlProperty,
        type: typeProperty,
        dataType: dataTypeProperty,
        data: dataProperty,
        // async: false, //....
        contentType: contentTypeProperty,
        headers: {
            'token': readCookie('token')
        },
        success: successProperty
    });
}

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
//Loads the posts of the user
function loadPosts() {
    //create callback function of get request
    var success = function (allPosts) {
        console.log(allPosts);

        console.log("This is load post success. ");
        var postsList = $(".postsList");
        var myPosts = allPosts.posts;

        myPosts.forEach(function (post) {

            $("<li class='row'>" +
                "<div class='postSpan'><h4 class='col-md-12'>" + post.title + " </h4>   " +
                "<p class='col-md-12'>" + post.content + "</p>" + " <button class='btn btn-primary btn-sm pull-left' text='کامنت ها' onclick='loadcomments(" + post.id + ")' >کامنت</button> </div> <div class='postComments'><ul class='commentList'  id='commentList-" + post.id + "' ></ul></li> ").appendTo(postsList);

            console.log("Posts are loaded. ");
        });
        //Get Most Visited posts
        //Sort(a Higher-Order Function) Posts  in descending order by visits property then slice first 5 elements
        var mostvisiteds = myPosts.sort(function (a, b) {
            return b.visits - a.visits;
        }).slice(0, 5);
        var mostvisitedposts = $('.mostVisited');
        mostvisiteds.forEach(function (post) {
            $("<li class='col-md-12'> " + post.title + "<span>" + "<br/>تعداد بازدیدها: " + "( " + post.visits + " )" + "</span> </li>").appendTo(mostvisitedposts);
            // console.log(post.title+' : '+post.visits);
        });
    };
    //call gerRequest() function and pass the args
    getRequest('https://ancient-bayou-43826.herokuapp.com/posts', 'GET', 'json', 'application/json', success);
}
//Load comments
function loadcomments(post_id) {
    var commentList = $('#commentList-' + post_id);
    //When the comments btn is pusshed again, not to append the comments again
    commentList.empty();
    //Create success callback function
    var success = function (allComments) {
        var commentsArray = allComments.comments;
        console.log("Comments success. And ", commentsArray);
        commentsArray.forEach(function (comment) {
            var arr = comment.comments;
            if (arr != null) {
                arr.forEach(function (key, comment2) {
                    $('<li > کامنت ' + comment2 + ' :' + key + '</li>').appendTo(commentList);
                });
            }
            else {
                $('<li> هیچ کامنتی موجود نمی باشد. </li>').appendTo(commentList);
            }
        })
    }
    var success = function (allComments) {
        getRequest('https://ancient-bayou-43826.herokuapp.com/comments/' + post_id, 'GET', 'json', 'application/json', success);
    }
}