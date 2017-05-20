//HTTP Request i.e Either GET and POST request
function httpRequest(ajaxParameteres, beforeSend, successProperty, complete) {
    $.ajax({
        url: ajaxParameteres.url,
        type: ajaxParameteres.type,
        dataType: ajaxParameteres.dataType,
        data: ajaxParameteres.data,
        // async: false, //....
        contentType: ajaxParameteres.contentType,
        headers: {
            'token': readCookie('token')
        },
        beforeSend: beforeSend,
        success: successProperty,
        complete: complete  
    });
}