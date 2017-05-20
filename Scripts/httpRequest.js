function httpRequest(urlProperty, typeProperty, dataTypeProperty, contentTypeProperty, dataProperty, successProperty) {

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