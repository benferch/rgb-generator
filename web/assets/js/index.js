window.onload = init();

function init() {
    var min = 0;
    var max = 255;

    var r = Math.round(Math.random() * (max - min)) + min;
    var g = Math.round(Math.random() * (max - min)) + min;
    var b = Math.round(Math.random() * (max - min)) + min;
    var rgb = "rgb(" + r + ", " + g + ", " + b + ")";

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    document.getElementById("rect").style.fill = rgb;
    document.getElementById("rgb").innerHTML = rgb;
    document.getElementById("hex").innerHTML = rgbToHex(r, g, b);
}