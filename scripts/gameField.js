// JavaScript source code
let hexagon = document.getElementById("hexagon1");

hexagon.style.left = "45%";
hexagon.style.top = "45%";

for (let i = 1; i <= 6; i++) {
    // JavaScript source code
    let square = document.getElementById("square" + i);

    if (i == 1) {
        square.style.left = (parseInt(hexagon.offsetLeft) + (parseInt(hexagon.offsetWidth) / 2) + 10) + "px";
        square.style.top = (parseInt(hexagon.offsetTop) - 35) + "px";
        square.style.webkitTransform = "rotate(30deg)";
    }
    if (i == 2) {
        square.style.left = ((parseInt(hexagon.offsetLeft) + parseInt(hexagon.offsetWidth) + 0.5)) + "px";
        square.style.top = (parseInt(hexagon.offsetHeight) + 150) + "px";
    }
    if (i == 3) {
        square.style.left = (parseInt(hexagon.offsetLeft) + (parseInt(hexagon.offsetWidth) / 2) + 10) + "px";
        square.style.top = (parseInt(hexagon.offsetTop) + parseInt(hexagon.offsetHeight) - 15) + "px";
        square.style.webkitTransform = "rotate(150deg)";
    }
    if (i == 4) {
        square.style.left = (parseInt(hexagon.offsetLeft) + (parseInt(hexagon.offsetWidth) / 2) - 60) + "px";
        square.style.top = (parseInt(hexagon.offsetTop) + parseInt(hexagon.offsetHeight) - 15) + "px";
        square.style.webkitTransform = "rotate(30deg)";
    }
    if (i == 5) {
        square.style.left = (parseInt(hexagon.offsetLeft) + (parseInt(hexagon.offsetWidth) / 2) - 95) + "px";
        square.style.top = (parseInt(hexagon.offsetTop) + parseInt(hexagon.offsetHeight) - 75) + "px";
    }
    if (i == 6) {
        square.style.left = (parseInt(hexagon.offsetLeft) + (parseInt(hexagon.offsetWidth) / 2) - 60) + "px";
        square.style.top = (parseInt(hexagon.offsetTop) + parseInt(hexagon.offsetHeight) - 135) + "px";
        square.style.webkitTransform = "rotate(150deg)";
    }
}

//hexagon1.offsetLeft