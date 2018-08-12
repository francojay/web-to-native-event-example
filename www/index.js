(function(){
    // oWebViewInterface provides necessary APIs for communication to native app.
    var oWebViewInterface = window.nsWebViewInterface;
    var buttonTest = document.getElementById('buttonTest');

    buttonTest.onclick = function() {
        alert("Fuck you native")
    }

    function init(){

    }

    init();
})()