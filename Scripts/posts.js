
//Loads the posts of the user
function loadPosts() {

    //create callback function of get request
    var success = function (allPosts) {
        var postsList = $(".postsList");
        var myPosts = allPosts.posts;
        myPosts.forEach(function (post) {
            console.log('load posts');
            $("<li class='row'>" +
                "<div class='postSpan'><div class='row'><h4 class='col-md-12'>" + post.title + " </h4>   " +
                "<p class='col-md-12'>"
                + post.content + "</p>" +
                " <button class='btn btn-primary btn-sm pull-center' onclick='loadcomments(" + post.id + ")' >کامنت</button> </div><div class='row'> <div style='display:none' id='postComments-" + post.id + "'> <div class='panel panel-default'> <div class='panel-heading'>نظریات کاربران: </div><div class='panel-body'><ul class='commentList'  id='commentList-" + post.id + "' ></ul></div></div></li> ").appendTo(postsList);

            console.log("Posts are loaded. ");
        });

        //Get Most Visited posts and rewrite thru filter and slice the first 5 elements
        var mostvisiteds = myPosts.sort(function (a, b) {
            return b.visits - a.visits;
        }).slice(0, 5);

        var mostvisitedposts = $('.mostVisited');
        mostvisiteds.forEach(function (post) {
            $("<li class='col-md-12'> " + post.title + "<span>" + "<br/>تعداد بازدیدها: " + "( " + post.visits + " )" + "</span> </li>").appendTo(mostvisitedposts);
        });
    };

    //call gerRequest() function and pass the args
    var ajaxParameteres = { url: 'https://ancient-bayou-43826.herokuapp.com/posts',type: 'GET', dataType: 'json', contentType: 'application/json',headesr: {'token': readCookie('token')},data: '' };
    httpRequest(ajaxParameteres, loadingBeforeSend, success, loadingComplete);
}
