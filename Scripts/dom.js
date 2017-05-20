
//Gets a DOM element and shows it.
function showDOMElement(domElementName) {
    console.log("This is " + domElementName + "DOM Show(). ");
    $(domElementName).show();
}

//Gets a DOM element and hide it.
function hideDOMElement(domElementName) {
    console.log("This is " + domElementName + "DOM Hide(). ");
    $(domElementName).hide();
}

//beforeSend to show the loader icon
var loadingBeforeSend = function () {
    $('.ajax-loader').css("visibility", "visible");
}
//Complete to hide the loader icon
var loadingComplete = function () {
    $('.ajax-loader').css("visibility", "hidden");
}