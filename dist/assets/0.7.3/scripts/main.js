function isTouchSupported() {
    var msTouchEnabled = window.navigator.msMaxTouchPoints;
    var generalTouchEnabled = "ontouchstart" in document.createElement("div");

    if (msTouchEnabled || generalTouchEnabled) {
        return true;
    }
    return false;
}

function display() {
    var textElement = document.querySelector("#isTouchSupported p");
    var mainContainer = document.querySelector("#isTouchSupported");

    if (!isTouchSupported()) {
    	var head = document.getElementsByTagName('head')[0],
            link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = "assets/0.7.3/styles/no-touch.css";
        // console.log(link);
        head.appendChild(link);
        //textElement.textContent = "No touching!";
    } 
    else {
        //textElement.textContent = "No touching!";
        var head = document.getElementsByTagName('head')[0],
            link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = "assets/0.7.3/styles/touch.css";
        // console.log(link);
        head.appendChild(link);
    }
}
