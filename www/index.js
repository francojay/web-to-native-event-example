(function(){
    // oWebViewInterface provides necessary APIs for communication to native app.
    var oWebViewInterface = window.nsWebViewInterface;
    var buttonTest = document.getElementById('buttonTest');

    buttonTest.onclick = function() {
        sendSelectedValue("THis is a test for printing")
    }

    function sendSelectedValue(config){
        oWebViewInterface.emit('buttonPrint', config);
    }

    function init(){

    }

    init();
})()