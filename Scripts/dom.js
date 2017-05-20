

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
var loadingBeforeSend = function () {
    $('.ajax-loader').css("visibility", "visible");
}
var loadingComplete = function () {
    $('.ajax-loader').css("visibility", "hidden");
}