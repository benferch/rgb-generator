window.onload = generateColor();

let saves = [];

function generateColor() {
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

function copy(code) {
  document.getElementById("hidden").type = "text";
  document.getElementById("hidden").value = document.getElementById(
    code
  ).innerText;
  document.getElementById("hidden").focus();
  document.getElementById("hidden").select();
  document.execCommand("copy");
  window.getSelection().empty();
  document.getElementById("hidden").type = "hidden";
}

function save() {
  let color = {
    rgb: document.getElementById("rgb").innerText,
    hex: document.getElementById("hex").innerText,
  };
  saves.push(color);
}

document.getElementById("color").addEventListener("mouseover", function () {});
