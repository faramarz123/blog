$(document).ready(function () {

    //PageLoad function()
    pageLoad();
});

//Page load 
function pageLoad() {

    //Is there a authenticated user or not
    if (readCookie('token')) {
        $('.posts-panel').show();
        loadPosts();
    }
    else {
        $('.login-panel').show();
        //Login function to handle form submit and set cookie, then, call LoadPosts().
        // login();
    }
}

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

        //HttpPostRequest to post login info.
        $.ajax({
            url: 'https://ancient-bayou-43826.herokuapp.com/login',
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(loginData),
            success: function (data) {
                //Set the got toke to cookie
                createCookie('token', data.token, 10);
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
    $.ajax({
        url: 'https://ancient-bayou-43826.herokuapp.com/posts',
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        headers: {
            'token': readCookie('token')
        },
        success: function (allPosts) {
            console.log(allPosts);

            console.log("This is load post success. ");
            var postsList = $(".postsList");
            var myPosts = allPosts.posts;

            myPosts.forEach(function (post) {
                // console.log(post)
                // var li = document.createElement("LI");
                var liText = "پست " + post.id + "با عنوان: " + post.title + " : " + "<br/>" + post.content;
                var postId = post.id;
                // $("<li/>", { "text": liText }).appendTo(postsDOM);
                $("<li><span>" + liText + "</span> <button text='کامنت ها' onclick='loadcomments(" + post.id + ")' >کامنت</button> </li> <div class='postComments'><ul class='commentList'  id='commentList-" + post.id + "' ></ul></div><hr/>").appendTo(postsList);

                console.log("Posts are loaded. ");
            });
            //Get Most Visited posts

            //Sort Posts By Visits Property
            var mostvisiteds = myPosts.sort(function (a, b) {
                return b.visits - a.visits;
            }).slice(0, 5);
            var mostvisitedposts = $('.mostVisited');
            mostvisiteds.forEach(function (post) {
                $("<li> "+ post.title +"<span>"+"( "+ post.visits+" )"+"</span> </li>").appendTo(mostvisitedposts);
                // console.log(post.title+' : '+post.visits);
            });

            //Set most visited elements to the sidebar


            
        }
    });
}
//Load comments
function loadcomments(post_id) {
    var commentList = $('#commentList-' + post_id);
    // console.log('CommentList is : ', commentList);
    commentList.empty();

    console.log("This is loadComments. ");
    $.ajax({
        url: 'https://ancient-bayou-43826.herokuapp.com/comments/' + post_id,
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        headers: {
            'token': readCookie('token')
        },
        success: function (allComments) {
            var commentsArray = allComments.comments;
            console.log("Comments success. And ", commentsArray);
            commentsArray.forEach(function (comment) {
                // console.log('comments are: ',comment)

                var arr = comment.comments;
                if (arr != null) {
                    arr.forEach(function (key, comment2) {
                        $('<li > کامنت ' + comment2 + ' :' + key + '</li>').appendTo(commentList);
                    });
                }
                else
                {
                    $('<li> هیچ کامنتی موجود نمی باشد. </li>').appendTo(commentList);
                }

            })
        }
    });
}