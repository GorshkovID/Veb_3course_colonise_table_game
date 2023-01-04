// JavaScript source code
for (let j = 1; j <= 2; j++) {
    let hexagon = document.getElementById("hexagon" + j);

    if (j == 1) {
        hexagon.style.left = "45%";
        hexagon.style.top = "45%";
    }
    if (j == 2) {
        hexagon.style.left = (parseInt(hexagon1.offsetLeft) - parseInt(hexagon1.offsetWidth) / 2 - 25 * 0.866) + "px";
        hexagon.style.top = (parseInt(hexagon1.offsetTop) - parseInt(hexagon1.offsetHeight) - 25 * 0.866) + "px"
    }
}

for (let i = 1; i <= 6; i++) {
    // JavaScript source code
    let square = document.getElementById("square" + i);

    if (i == 1) {
        square.style.left = (parseInt(square.offsetHeight / 2) * (0.866 - 0.5) + parseInt(hexagon1.offsetLeft) + (parseInt(hexagon1.offsetWidth) / 2)) + "px";
        square.style.top = (parseInt(square.offsetHeight / 2) * (-0.5 - 0.866) + parseInt(hexagon1.offsetTop)) + "px";
        
        square.style.webkitTransform = "rotate(30deg)";
    }
    if (i == 2) {
        square.style.left = ((parseInt(hexagon1.offsetLeft) + parseInt(hexagon1.offsetWidth))) + "px";
        square.style.top = (parseInt(hexagon1.offsetTop) + (parseInt(hexagon1.offsetHeight) / 4)) + "px";
    }
    if (i == 3) {
        square.style.left = (parseInt(square.offsetHeight / 2) * (-0.866 - 0.5) + parseInt(hexagon1.offsetLeft) + (parseInt(hexagon1.offsetWidth))) + "px";
        square.style.top = (parseInt(square.offsetHeight / 2) * (-0.5 + 0.866) + parseInt(hexagon1.offsetTop) + 0.75 * parseInt(hexagon1.offsetHeight)) + "px";
        square.style.webkitTransform = "rotate(150deg)";
    }
    if (i == 4) {
        square.style.left = (parseInt(square.offsetHeight / 2) * (0.866 - 3 * 0.5) + parseInt(hexagon1.offsetLeft)) + "px";
        square.style.top = (parseInt(square.offsetHeight / 2) * (-0.5 + 0.866) + parseInt(hexagon1.offsetTop) + 0.75 * parseInt(hexagon1.offsetHeight)) + "px";
        square.style.webkitTransform = "rotate(30deg)";
    }
    if (i == 5) {
        square.style.left = (parseInt(hexagon1.offsetLeft) - (parseInt(hexagon1.offsetWidth) / (1.732))) + "px";
        square.style.top = (parseInt(hexagon1.offsetTop) + parseInt(hexagon1.offsetHeight) / 4) + "px";
    }
    if (i == 6) {
        square.style.left = (parseInt(square.offsetHeight / 2) * (-0.866 - 3 * 0.5) + parseInt(hexagon1.offsetLeft) + (parseInt(hexagon1.offsetWidth) / 2)) + "px";
        square.style.top = (parseInt(square.offsetHeight / 2) * (-0.5 - 0.866) + parseInt(hexagon1.offsetTop)) + "px";
        square.style.webkitTransform = "rotate(150deg)";
    }
}

//hexagon1.offsetLeft