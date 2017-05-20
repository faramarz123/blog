//Load comments
function loadcomments(post_id) {
    showDOMElement('#postComments-'+ post_id);
    console.log('load comments. ', post_id);
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
    // var success = function (allComments) {
        httpRequest('https://ancient-bayou-43826.herokuapp.com/comments/' + post_id, 'GET', 'json', 'application/json', '', loadingBeforeSend, success, loadingComplete);
    // }
}