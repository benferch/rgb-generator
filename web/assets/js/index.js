var min = 0;
var max = 255;

var r = Math.round(Math.random() * (max - min)) + min;
var g = Math.round(Math.random() * (max - min)) + min;
var b = Math.round(Math.random() * (max - min)) + min;
var rgb = "rgb(" + r + ", " + g + ", " + b + ")";

function refreshPage() {
    window.location.reload();
    return
}

document.body.style.backgroundColor = rgb;
document.getElementById("rgb").innerHTML = rgb;