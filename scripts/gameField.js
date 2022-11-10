// JavaScript source code
let hexagon = document.getElementById("hexagon1");

hexagon.style.left = "45%";
hexagon.style.top = "45%";

for (let i = 1; i <= 6; i++) {
    // JavaScript source code
    let square = document.getElementById("square" + i);

    if (i == 1) {
        square.style.left = (parseInt(square.offsetHeight / 2) * (0.866 - 0.5) + parseInt(hexagon.offsetLeft) + (parseInt(hexagon.offsetWidth) / 2)) + "px";
        square.style.top = (parseInt(square.offsetHeight / 2) * (-0.5 - 0.866) + parseInt(hexagon.offsetTop)) + "px";
        
        square.style.webkitTransform = "rotate(30deg)";
    }
    if (i == 2) {
        square.style.left = ((parseInt(hexagon.offsetLeft) + parseInt(hexagon.offsetWidth))) + "px";
        square.style.top = (parseInt(hexagon.offsetTop) + (parseInt(hexagon.offsetHeight) / 4)) + "px";
    }
    if (i == 3) {
        square.style.left = (parseInt(square.offsetHeight / 2) * (-0.866 - 0.5) + parseInt(hexagon.offsetLeft) + (parseInt(hexagon.offsetWidth))) + "px";
        square.style.top = (parseInt(square.offsetHeight / 2) * (-0.5 + 0.866) + parseInt(hexagon.offsetTop) + 0.75 * parseInt(hexagon.offsetHeight)) + "px";
        square.style.webkitTransform = "rotate(150deg)";
    }
    if (i == 4) {
        square.style.left = (parseInt(square.offsetHeight / 2) * (0.866 - 3 * 0.5) + parseInt(hexagon.offsetLeft)) + "px";
        square.style.top = (parseInt(square.offsetHeight / 2) * (-0.5 + 0.866) + parseInt(hexagon.offsetTop) + 0.75 * parseInt(hexagon.offsetHeight)) + "px";
        square.style.webkitTransform = "rotate(30deg)";
    }
    if (i == 5) {
        square.style.left = (parseInt(hexagon.offsetLeft) - (parseInt(hexagon.offsetWidth) / (1.732))) + "px";
        square.style.top = (parseInt(hexagon.offsetTop) + parseInt(hexagon.offsetHeight) / 4) + "px";
    }
    if (i == 6) {
        square.style.left = (parseInt(square.offsetHeight / 2) * (-0.866 - 3 * 0.5) + parseInt(hexagon.offsetLeft) + (parseInt(hexagon.offsetWidth) / 2)) + "px";
        square.style.top = (parseInt(square.offsetHeight / 2) * (-0.5 - 0.866) + parseInt(hexagon.offsetTop)) + "px";
        square.style.webkitTransform = "rotate(150deg)";
    }
}

//hexagon1.offsetLeft