
//Loads the posts of the user
function loadPosts() {
    //create callback function of get request
    var success = function (allPosts) {
        console.log(allPosts);

        console.log("This is load post success. ");
        var postsList = $(".postsList");
        var myPosts = allPosts.posts;

        myPosts.forEach(function (post) {
            console.log('load posts');
            $("<li class='row'>" +
                "<div class='postSpan'><div class='row'><h4 class='col-md-12'>" + post.title + " </h4>   " +
                "<p class='col-md-12'>" 
                     + post.content + "</p>" + 
                        " <button class='btn btn-primary btn-sm pull-center' onclick='loadcomments(" + post.id + ")' >کامنت</button> </div><div class='row'> <div style='display:none' id='postComments-"+post.id + "'> <div class='panel panel-default'> <div class='panel-heading'>نظریات کاربران: </div><div class='panel-body'><ul class='commentList'  id='commentList-" + post.id + "' ></ul></div></div></li> ").appendTo(postsList);

            console.log("Posts are loaded. ");
        });
        //Get Most Visited posts
        //Sort(a Higher-Order Function) Posts  in descending order by visits property then slice first 5 elements

        //Rewrite thru filter
        var mostvisiteds = myPosts.sort(function (a, b) {
            return b.visits - a.visits;
        }).slice(0, 5);

        var mostvisitedposts = $('.mostVisited');
        mostvisiteds.forEach(function (post) {

            $("<li class='col-md-12'> " + post.title + "<span>" + "<br/>تعداد بازدیدها: " + "( " + post.visits + " )" + "</span> </li>").appendTo(mostvisitedposts);

        });
    };

    //call gerRequest() function and pass the args
    httpRequest('https://ancient-bayou-43826.herokuapp.com/posts', 'GET', 'json', 'application/json','',loadingBeforeSend, success, loadingComplete);
}
