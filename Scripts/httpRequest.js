function httpRequest(urlProperty, typeProperty, dataTypeProperty, contentTypeProperty, dataProperty, beforeSend, successProperty, complete) {

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
        beforeSend: beforeSend,
        success: successProperty,
        complete: complete  
    });
}