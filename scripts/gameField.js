// JavaScript source code
let side = "75px";

const img_num = [];

for (let i = 0; i < 19; i++) {
    img_num[i] = i + 1;
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(img_num);

for (let j = 1; j <= 7; j++) {
    let hexagon = document.getElementById("hexagon" + j);

    if (j == 1) {
        hexagon.style.left = "44%";
        hexagon.style.top = "44%";

        hexagon.style.backgroundImage = "url('Images/img" + img_num[0] + ".jpg'";
        img_num.shift();
    }
    if (j == 2) {
        hexagon.style.left = (parseInt(hexagon1.offsetLeft) - parseInt(hexagon1.offsetWidth) + parseInt(hexagon1.offsetHeight)*0.366/2) + "px";
        hexagon.style.top = (parseInt(hexagon1.offsetTop) - parseInt(hexagon1.offsetHeight) - parseInt(hexagon1.offsetHeight) * 0.366 / 2) + "px";

        hexagon.style.backgroundImage = "url('Images/img" + img_num[0] + ".jpg'";
        img_num.shift();
    }
    if (j == 3) {
        hexagon.style.left = (parseInt(hexagon1.offsetLeft) + parseInt(hexagon1.offsetWidth) - parseInt(hexagon1.offsetHeight)*0.366/2) + "px";
        hexagon.style.top = (parseInt(hexagon1.offsetTop) - parseInt(hexagon1.offsetHeight) - parseInt(hexagon1.offsetHeight) * 0.366 / 2) + "px";

        hexagon.style.backgroundImage = "url('Images/img" + img_num[0] + ".jpg'";
        img_num.shift();
    }
    if (j == 4) {
        hexagon.style.left = (parseInt(hexagon1.offsetLeft) - parseInt(hexagon1.offsetWidth) - parseInt(hexagon1.offsetHeight)/2) + "px";
        hexagon.style.top = parseInt(hexagon1.offsetTop) + "px";

        hexagon.style.backgroundImage = "url('Images/img" + img_num[0] + ".jpg'";
        img_num.shift();
    }
    if (j == 5) {
        hexagon.style.left = (parseInt(hexagon1.offsetLeft) + parseInt(hexagon1.offsetWidth) + parseInt(hexagon1.offsetHeight)/2) + "px";
        hexagon.style.top = parseInt(hexagon1.offsetTop) + "px";

        hexagon.style.backgroundImage = "url('Images/img" + img_num[0] + ".jpg'";
        img_num.shift();
    }
    if (j == 6) {
        hexagon.style.left = (parseInt(hexagon1.offsetLeft) - parseInt(hexagon1.offsetWidth) + parseInt(hexagon1.offsetHeight)*0.366/2) + "px";
        hexagon.style.top = (parseInt(hexagon1.offsetTop) + parseInt(hexagon1.offsetHeight) + parseInt(hexagon1.offsetHeight) * 0.366 / 2) + "px";

        hexagon.style.backgroundImage = "url('Images/img" + img_num[0] + ".jpg'";
        img_num.shift();
    }
    if (j == 7) {
        hexagon.style.left = (parseInt(hexagon1.offsetLeft) + parseInt(hexagon1.offsetWidth) - parseInt(hexagon1.offsetHeight)*0.366/2) + "px";
        hexagon.style.top = (parseInt(hexagon1.offsetTop) + parseInt(hexagon1.offsetHeight) + parseInt(hexagon1.offsetHeight) * 0.366 / 2) + "px";

        hexagon.style.backgroundImage = "url('Images/img" + img_num[0] + ".jpg'";
        img_num.shift();
    }
}

for (let i = 1; i <= 12; i++) {
    // JavaScript source code
    let square = document.getElementById("square" + i);

    if (i == 1) {
        square.style.left = (parseInt(square.offsetHeight / 2) * (0.866 - 0.5) + parseInt(hexagon1.offsetLeft) + (parseInt(hexagon1.offsetWidth) / 2)) + "px";
        square.style.top = (parseInt(square.offsetHeight / 2) * (-0.5 - 0.866) + parseInt(hexagon1.offsetTop)) + "px";
        square.style.webkitTransform = "rotate(30deg)";

        square.style.backgroundImage = "url('Images/img" + img_num[0] + ".jpg'";
        img_num.shift();
    }
    if (i == 2) {
        square.style.left = ((parseInt(hexagon1.offsetLeft) + parseInt(hexagon1.offsetWidth))) + "px";
        square.style.top = (parseInt(hexagon1.offsetTop) + (parseInt(hexagon1.offsetHeight) / 4)) + "px";

        square.style.backgroundImage = "url('Images/img" + img_num[0] + ".jpg'";
        img_num.shift();
    }
    if (i == 3) {
        square.style.left = (parseInt(square.offsetHeight / 2) * (-0.866 - 0.5) + parseInt(hexagon1.offsetLeft) + (parseInt(hexagon1.offsetWidth))) + "px";
        square.style.top = (parseInt(square.offsetHeight / 2) * (-0.5 + 0.866) + parseInt(hexagon1.offsetTop) + 0.75 * parseInt(hexagon1.offsetHeight)) + "px";
        square.style.webkitTransform = "rotate(150deg)";

        square.style.backgroundImage = "url('Images/img" + img_num[0] + ".jpg'";
        img_num.shift();
    }
    if (i == 4) {
        square.style.left = (parseInt(square.offsetHeight / 2) * (0.866 - 3 * 0.5) + parseInt(hexagon1.offsetLeft)) + "px";
        square.style.top = (parseInt(square.offsetHeight / 2) * (-0.5 + 0.866) + parseInt(hexagon1.offsetTop) + 0.75 * parseInt(hexagon1.offsetHeight)) + "px";
        square.style.webkitTransform = "rotate(30deg)";

        square.style.backgroundImage = "url('Images/img" + img_num[0] + ".jpg'";
        img_num.shift();
    }
    if (i == 5) {
        square.style.left = (parseInt(hexagon1.offsetLeft) - (parseInt(hexagon1.offsetWidth) / (1.732))) + "px";
        square.style.top = (parseInt(hexagon1.offsetTop) + parseInt(hexagon1.offsetHeight) / 4) + "px";

        square.style.backgroundImage = "url('Images/img" + img_num[0] + ".jpg'";
        img_num.shift();
    }
    if (i == 6) {
        square.style.left = (parseInt(square.offsetHeight / 2) * (-0.866 - 3 * 0.5) + parseInt(hexagon1.offsetLeft) + (parseInt(hexagon1.offsetWidth) / 2)) + "px";
        square.style.top = (parseInt(square.offsetHeight / 2) * (-0.5 - 0.866) + parseInt(hexagon1.offsetTop)) + "px";
        square.style.webkitTransform = "rotate(150deg)";

        square.style.backgroundImage = "url('Images/img" + img_num[0] + ".jpg'";
        img_num.shift();
    }
    if (i == 7) {
        square.style.left = ((parseInt(hexagon2.offsetLeft) + parseInt(hexagon2.offsetWidth))) + "px";
        square.style.top = (parseInt(hexagon2.offsetTop) + (parseInt(hexagon2.offsetHeight) / 4)) + "px";

        square.style.backgroundImage = "url('Images/img" + img_num[0] + ".jpg'";
        img_num.shift();
    }
    if (i == 8) {
        square.style.left = (parseInt(square.offsetHeight / 2) * (-0.866 - 0.5) + parseInt(hexagon3.offsetLeft) + (parseInt(hexagon3.offsetWidth))) + "px";
        square.style.top = (parseInt(square.offsetHeight / 2) * (-0.5 + 0.866) + parseInt(hexagon3.offsetTop) + 0.75 * parseInt(hexagon3.offsetHeight)) + "px";
        square.style.webkitTransform = "rotate(150deg)";

        square.style.backgroundImage = "url('Images/img" + img_num[0] + ".jpg'";
        img_num.shift();
    }
    if (i == 9) {
        square.style.left = (parseInt(square.offsetHeight / 2) * (0.866 - 3 * 0.5) + parseInt(hexagon5.offsetLeft)) + "px";
        square.style.top = (parseInt(square.offsetHeight / 2) * (-0.5 + 0.866) + parseInt(hexagon5.offsetTop) + 0.75 * parseInt(hexagon5.offsetHeight)) + "px";
        square.style.webkitTransform = "rotate(30deg)";

        square.style.backgroundImage = "url('Images/img" + img_num[0] + ".jpg'";
        img_num.shift();
    }
    if (i == 10) {
        square.style.left = ((parseInt(hexagon6.offsetLeft) + parseInt(hexagon6.offsetWidth))) + "px";
        square.style.top = (parseInt(hexagon6.offsetTop) + (parseInt(hexagon6.offsetHeight) / 4)) + "px";

        square.style.backgroundImage = "url('Images/img" + img_num[0] + ".jpg'";
        img_num.shift();
    }
    if (i == 11) {
        square.style.left = (parseInt(square.offsetHeight / 2) * (-0.866 - 0.5) + parseInt(hexagon4.offsetLeft) + (parseInt(hexagon4.offsetWidth))) + "px";
        square.style.top = (parseInt(square.offsetHeight / 2) * (-0.5 + 0.866) + parseInt(hexagon4.offsetTop) + 0.75 * parseInt(hexagon4.offsetHeight)) + "px";
        square.style.webkitTransform = "rotate(150deg)";

        square.style.backgroundImage = "url('Images/img" + img_num[0] + ".jpg'";
        img_num.shift();
    }
    if (i == 12) {
        square.style.left = (parseInt(square.offsetHeight / 2) * (0.866 - 3 * 0.5) + parseInt(hexagon2.offsetLeft)) + "px";
        square.style.top = (parseInt(square.offsetHeight / 2) * (-0.5 + 0.866) + parseInt(hexagon2.offsetTop) + 0.75 * parseInt(hexagon2.offsetHeight)) + "px";
        square.style.webkitTransform = "rotate(30deg)";

        square.style.backgroundImage = "url('Images/img" + img_num[0] + ".jpg'";
        img_num.shift();
    }
}

for (let k = 1; k <= 66; k++) {
    let road = document.getElementById("road" + k);

    if (k == 1) {
        road.style.left = (parseInt(hexagon2.offsetLeft) + (parseInt(hexagon2.offsetWidth))) + "px";
        road.style.top = (parseInt(hexagon2.offsetTop) + parseInt(hexagon2.offsetHeight) * 0.25) + "px";
    }
    if (k == 2) {
        road.style.left = (parseInt(hexagon2.offsetLeft) + parseInt(hexagon2.offsetWidth)) + "px";
        road.style.top = (parseInt(hexagon2.offsetTop) + parseInt(hexagon2.offsetHeight) * 0.75) + "px";
    }

    if (k == 3) {
        road.style.left = (parseInt(hexagon6.offsetLeft) + (parseInt(hexagon6.offsetWidth))) + "px";
        road.style.top = (parseInt(hexagon6.offsetTop) + parseInt(hexagon6.offsetHeight) * 0.75) + "px";
    }
    if (k == 4) {
        road.style.left = (parseInt(hexagon6.offsetLeft) + (parseInt(hexagon6.offsetWidth))) + "px";
        road.style.top = (parseInt(hexagon6.offsetTop) + parseInt(hexagon6.offsetHeight) * 0.25) + "px";
    }

    if (k == 5) {
        road.style.left = (parseInt(hexagon2.offsetLeft) + parseInt(hexagon2.offsetWidth)) + "px";
        road.style.top = (parseInt(hexagon2.offsetTop) + parseInt(hexagon2.offsetHeight) * 0.75) + "px";
        road.style.webkitTransform = "rotate(60deg)";
    }
    if (k == 6) {
        road.style.left = (parseInt(hexagon2.offsetLeft) + parseInt(hexagon2.offsetWidth) / 2) + "px";
        road.style.top = (parseInt(hexagon2.offsetTop) + parseInt(hexagon2.offsetHeight)) + "px";
        road.style.webkitTransform = "rotate(60deg)";
    }

    if (k == 7) {
        road.style.left = (parseInt(hexagon3.offsetLeft) + parseInt(hexagon3.offsetWidth) / 2) + "px";
        road.style.top = (parseInt(hexagon3.offsetTop) + parseInt(hexagon3.offsetHeight)) + "px";
        road.style.webkitTransform = "rotate(120deg)";
    }
    if (k == 8) {
        road.style.left = (parseInt(hexagon3.offsetLeft)) + "px";
        road.style.top = (parseInt(hexagon3.offsetTop) + parseInt(hexagon3.offsetHeight) * 0.75) + "px";
        road.style.webkitTransform = "rotate(120deg)";
    }

    if (k == 9) {
        road.style.left = (parseInt(hexagon6.offsetLeft) + parseInt(hexagon6.offsetWidth)) + "px";
        road.style.top = (parseInt(hexagon6.offsetTop) + parseInt(hexagon6.offsetHeight) * 0.25) + "px";
        road.style.webkitTransform = "rotate(-60deg)";
    }
    if (k == 10) {
        road.style.left = (parseInt(hexagon6.offsetLeft) + parseInt(hexagon6.offsetWidth) / 2) + "px";
        road.style.top = (parseInt(hexagon6.offsetTop)) + "px";
        road.style.webkitTransform = "rotate(-60deg)";
    }

    if (k == 11) {
        road.style.left = (parseInt(hexagon7.offsetLeft) + parseInt(hexagon7.offsetWidth) / 2) + "px";
        road.style.top = (parseInt(hexagon7.offsetTop)) + "px";
        road.style.webkitTransform = "rotate(-120deg)";
    }
    if (k == 12) {
        road.style.left = (parseInt(hexagon7.offsetLeft)) + "px";
        road.style.top = (parseInt(hexagon7.offsetTop) + parseInt(hexagon7.offsetHeight) * 0.25) + "px";
        road.style.webkitTransform = "rotate(-120deg)";
    }

    if (k == 13) {
        road.style.left = (parseInt(hexagon4.offsetLeft) + (parseInt(hexagon4.offsetWidth))) + "px";
        road.style.top = (parseInt(hexagon4.offsetTop) + parseInt(hexagon4.offsetHeight) * 0.25) + "px";
    }
    if (k == 14) {
        road.style.left = (parseInt(hexagon4.offsetLeft) + parseInt(hexagon4.offsetWidth)) + "px";
        road.style.top = (parseInt(hexagon4.offsetTop) + parseInt(hexagon4.offsetHeight) * 0.75) + "px";
    }

    if (k == 15) {
        road.style.left = (parseInt(hexagon1.offsetLeft) + (parseInt(hexagon1.offsetWidth))) + "px";
        road.style.top = (parseInt(hexagon1.offsetTop) + parseInt(hexagon1.offsetHeight) * 0.25) + "px";
    }
    if (k == 16) {
        road.style.left = (parseInt(hexagon1.offsetLeft) + parseInt(hexagon1.offsetWidth)) + "px";
        road.style.top = (parseInt(hexagon1.offsetTop) + parseInt(hexagon1.offsetHeight) * 0.75) + "px";
    }

    if (k == 17) {
        road.style.left = (parseInt(hexagon4.offsetLeft) + parseInt(hexagon4.offsetWidth)) + "px";
        road.style.top = (parseInt(hexagon4.offsetTop) + parseInt(hexagon4.offsetHeight) * 0.75) + "px";
        road.style.webkitTransform = "rotate(60deg)";
    }
    if (k == 18) {
        road.style.left = (parseInt(hexagon4.offsetLeft) + parseInt(hexagon4.offsetWidth) / 2) + "px";
        road.style.top = (parseInt(hexagon4.offsetTop) + parseInt(hexagon4.offsetHeight)) + "px";
        road.style.webkitTransform = "rotate(60deg)";
    }

    if (k == 19) {
        road.style.left = (parseInt(hexagon2.offsetLeft) + parseInt(hexagon2.offsetWidth) / 2) + "px";
        road.style.top = (parseInt(hexagon2.offsetTop) + parseInt(hexagon2.offsetHeight)) + "px";
        road.style.webkitTransform = "rotate(120deg)";
    }
    if (k == 20) {
        road.style.left = (parseInt(hexagon2.offsetLeft)) + "px";
        road.style.top = (parseInt(hexagon2.offsetTop) + parseInt(hexagon2.offsetHeight) * 0.75) + "px";
        road.style.webkitTransform = "rotate(120deg)";
    }

    if (k == 21) {
        road.style.left = (parseInt(hexagon3.offsetLeft) + parseInt(hexagon3.offsetWidth)) + "px";
        road.style.top = (parseInt(hexagon3.offsetTop) + parseInt(hexagon3.offsetHeight) * 0.75) + "px";
        road.style.webkitTransform = "rotate(58deg)";
    }
    if (k == 22) {
        road.style.left = (parseInt(hexagon3.offsetLeft) + parseInt(hexagon3.offsetWidth) / 2) + "px";
        road.style.top = (parseInt(hexagon3.offsetTop) + parseInt(hexagon3.offsetHeight)) + "px";
        road.style.webkitTransform = "rotate(58deg)";
    }

    if (k == 23) {
        road.style.left = (parseInt(hexagon7.offsetLeft) + parseInt(hexagon7.offsetWidth)) + "px";
        road.style.top = (parseInt(hexagon7.offsetTop) + parseInt(hexagon7.offsetHeight) * 0.25) + "px";
        road.style.webkitTransform = "rotate(-60deg)";
    }
    if (k == 24) {
        road.style.left = (parseInt(hexagon7.offsetLeft) + parseInt(hexagon7.offsetWidth) / 2) + "px";
        road.style.top = (parseInt(hexagon7.offsetTop)) + "px";
        road.style.webkitTransform = "rotate(-60deg)";
    }

    if (k == 25) {
        road.style.left = (parseInt(hexagon1.offsetLeft) + parseInt(hexagon1.offsetWidth) / 2) + "px";
        road.style.top = (parseInt(hexagon1.offsetTop)) + "px";
        road.style.webkitTransform = "rotate(30deg)";
    }
    if (k == 26) {
        road.style.left = (parseInt(hexagon1.offsetLeft) + parseInt(hexagon1.offsetWidth)) + "px";
        road.style.top = (parseInt(hexagon1.offsetTop) + parseInt(hexagon1.offsetHeight) * 0.25) + "px";
        road.style.webkitTransform = "rotate(90deg)";
    }
    if (k == 27) {
        road.style.left = (parseInt(hexagon1.offsetLeft) + parseInt(hexagon1.offsetWidth)) + "px";
        road.style.top = (parseInt(hexagon1.offsetTop) + parseInt(hexagon1.offsetHeight) * 0.75) + "px";
        road.style.webkitTransform = "rotate(150deg)";
    }
    if (k == 28) {
        road.style.left = (parseInt(hexagon1.offsetLeft) + parseInt(hexagon1.offsetWidth) / 2) + "px";
        road.style.top = (parseInt(hexagon1.offsetTop) + parseInt(hexagon1.offsetHeight)) + "px";
        road.style.webkitTransform = "rotate(210deg)";
    }
    if (k == 29) {
        road.style.left = (parseInt(hexagon1.offsetLeft)) + "px";
        road.style.top = (parseInt(hexagon1.offsetTop) + parseInt(hexagon1.offsetHeight) * 0.75) + "px";
        road.style.webkitTransform = "rotate(270deg)";
    }
    if (k == 30) {
        road.style.left = (parseInt(hexagon1.offsetLeft)) + "px";
        road.style.top = (parseInt(hexagon1.offsetTop) + parseInt(hexagon1.offsetHeight) * 0.25) + "px";
        road.style.webkitTransform = "rotate(330deg)";
    }

    if (k == 31) {
        road.style.left = (parseInt(hexagon2.offsetLeft) + parseInt(hexagon2.offsetWidth) / 2) + "px";
        road.style.top = (parseInt(hexagon2.offsetTop)) + "px";
        road.style.webkitTransform = "rotate(30deg)";
    }
    if (k == 32) {
        road.style.left = (parseInt(hexagon2.offsetLeft) + parseInt(hexagon2.offsetWidth)) + "px";
        road.style.top = (parseInt(hexagon2.offsetTop) + parseInt(hexagon2.offsetHeight) * 0.25) + "px";
        road.style.webkitTransform = "rotate(90deg)";
    }
    if (k == 33) {
        road.style.left = (parseInt(hexagon2.offsetLeft) + parseInt(hexagon2.offsetWidth)) + "px";
        road.style.top = (parseInt(hexagon2.offsetTop) + parseInt(hexagon2.offsetHeight) * 0.75) + "px";
        road.style.webkitTransform = "rotate(150deg)";
    }
    if (k == 34) {
        road.style.left = (parseInt(hexagon2.offsetLeft) + parseInt(hexagon2.offsetWidth) / 2) + "px";
        road.style.top = (parseInt(hexagon2.offsetTop) + parseInt(hexagon2.offsetHeight)) + "px";
        road.style.webkitTransform = "rotate(210deg)";
    }
    if (k == 35) {
        road.style.left = (parseInt(hexagon2.offsetLeft)) + "px";
        road.style.top = (parseInt(hexagon2.offsetTop) + parseInt(hexagon2.offsetHeight) * 0.75) + "px";
        road.style.webkitTransform = "rotate(270deg)";
    }
    if (k == 36) {
        road.style.left = (parseInt(hexagon2.offsetLeft)) + "px";
        road.style.top = (parseInt(hexagon2.offsetTop) + parseInt(hexagon2.offsetHeight) * 0.25) + "px";
        road.style.webkitTransform = "rotate(330deg)";
    }

    if (k == 37) {
        road.style.left = (parseInt(hexagon3.offsetLeft) + parseInt(hexagon3.offsetWidth) / 2) + "px";
        road.style.top = (parseInt(hexagon3.offsetTop)) + "px";
        road.style.webkitTransform = "rotate(30deg)";
    }
    if (k == 38) {
        road.style.left = (parseInt(hexagon3.offsetLeft) + parseInt(hexagon3.offsetWidth)) + "px";
        road.style.top = (parseInt(hexagon3.offsetTop) + parseInt(hexagon3.offsetHeight) * 0.25) + "px";
        road.style.webkitTransform = "rotate(90deg)";
    }
    if (k == 39) {
        road.style.left = (parseInt(hexagon3.offsetLeft) + parseInt(hexagon3.offsetWidth)) + "px";
        road.style.top = (parseInt(hexagon3.offsetTop) + parseInt(hexagon3.offsetHeight) * 0.75) + "px";
        road.style.webkitTransform = "rotate(150deg)";
    }
    if (k == 40) {
        road.style.left = (parseInt(hexagon3.offsetLeft) + parseInt(hexagon3.offsetWidth) / 2) + "px";
        road.style.top = (parseInt(hexagon3.offsetTop) + parseInt(hexagon3.offsetHeight)) + "px";
        road.style.webkitTransform = "rotate(210deg)";
    }
    if (k == 41) {
        road.style.left = (parseInt(hexagon3.offsetLeft)) + "px";
        road.style.top = (parseInt(hexagon3.offsetTop) + parseInt(hexagon3.offsetHeight) * 0.75) + "px";
        road.style.webkitTransform = "rotate(270deg)";
    }
    if (k == 42) {
        road.style.left = (parseInt(hexagon3.offsetLeft)) + "px";
        road.style.top = (parseInt(hexagon3.offsetTop) + parseInt(hexagon3.offsetHeight) * 0.25) + "px";
        road.style.webkitTransform = "rotate(330deg)";
    }

    if (k == 43) {
        road.style.left = (parseInt(hexagon4.offsetLeft) + parseInt(hexagon4.offsetWidth) / 2) + "px";
        road.style.top = (parseInt(hexagon4.offsetTop)) + "px";
        road.style.webkitTransform = "rotate(30deg)";
    }
    if (k == 44) {
        road.style.left = (parseInt(hexagon4.offsetLeft) + parseInt(hexagon4.offsetWidth)) + "px";
        road.style.top = (parseInt(hexagon4.offsetTop) + parseInt(hexagon4.offsetHeight) * 0.25) + "px";
        road.style.webkitTransform = "rotate(90deg)";
    }
    if (k == 45) {
        road.style.left = (parseInt(hexagon4.offsetLeft) + parseInt(hexagon4.offsetWidth)) + "px";
        road.style.top = (parseInt(hexagon4.offsetTop) + parseInt(hexagon4.offsetHeight) * 0.75) + "px";
        road.style.webkitTransform = "rotate(150deg)";
    }
    if (k == 46) {
        road.style.left = (parseInt(hexagon4.offsetLeft) + parseInt(hexagon4.offsetWidth) / 2) + "px";
        road.style.top = (parseInt(hexagon4.offsetTop) + parseInt(hexagon4.offsetHeight)) + "px";
        road.style.webkitTransform = "rotate(210deg)";
    }
    if (k == 47) {
        road.style.left = (parseInt(hexagon4.offsetLeft)) + "px";
        road.style.top = (parseInt(hexagon4.offsetTop) + parseInt(hexagon4.offsetHeight) * 0.75) + "px";
        road.style.webkitTransform = "rotate(270deg)";
    }
    if (k == 48) {
        road.style.left = (parseInt(hexagon4.offsetLeft)) + "px";
        road.style.top = (parseInt(hexagon4.offsetTop) + parseInt(hexagon4.offsetHeight) * 0.25) + "px";
        road.style.webkitTransform = "rotate(330deg)";
    }

    if (k == 49) {
        road.style.left = (parseInt(hexagon5.offsetLeft) + parseInt(hexagon5.offsetWidth) / 2) + "px";
        road.style.top = (parseInt(hexagon5.offsetTop)) + "px";
        road.style.webkitTransform = "rotate(30deg)";
    }
    if (k == 50) {
        road.style.left = (parseInt(hexagon5.offsetLeft) + parseInt(hexagon5.offsetWidth)) + "px";
        road.style.top = (parseInt(hexagon5.offsetTop) + parseInt(hexagon5.offsetHeight) * 0.25) + "px";
        road.style.webkitTransform = "rotate(90deg)";
    }
    if (k == 51) {
        road.style.left = (parseInt(hexagon5.offsetLeft) + parseInt(hexagon5.offsetWidth)) + "px";
        road.style.top = (parseInt(hexagon5.offsetTop) + parseInt(hexagon5.offsetHeight) * 0.75) + "px";
        road.style.webkitTransform = "rotate(150deg)";
    }
    if (k == 52) {
        road.style.left = (parseInt(hexagon5.offsetLeft) + parseInt(hexagon5.offsetWidth) / 2) + "px";
        road.style.top = (parseInt(hexagon5.offsetTop) + parseInt(hexagon5.offsetHeight)) + "px";
        road.style.webkitTransform = "rotate(210deg)";
    }
    if (k == 53) {
        road.style.left = (parseInt(hexagon5.offsetLeft)) + "px";
        road.style.top = (parseInt(hexagon5.offsetTop) + parseInt(hexagon5.offsetHeight) * 0.75) + "px";
        road.style.webkitTransform = "rotate(270deg)";
    }
    if (k == 54) {
        road.style.left = (parseInt(hexagon5.offsetLeft)) + "px";
        road.style.top = (parseInt(hexagon5.offsetTop) + parseInt(hexagon5.offsetHeight) * 0.25) + "px";
        road.style.webkitTransform = "rotate(330deg)";
    }

    if (k == 55) {
        road.style.left = (parseInt(hexagon6.offsetLeft) + parseInt(hexagon6.offsetWidth) / 2) + "px";
        road.style.top = (parseInt(hexagon6.offsetTop)) + "px";
        road.style.webkitTransform = "rotate(30deg)";
    }
    if (k == 56) {
        road.style.left = (parseInt(hexagon6.offsetLeft) + parseInt(hexagon6.offsetWidth)) + "px";
        road.style.top = (parseInt(hexagon6.offsetTop) + parseInt(hexagon6.offsetHeight) * 0.25) + "px";
        road.style.webkitTransform = "rotate(90deg)";
    }
    if (k == 57) {
        road.style.left = (parseInt(hexagon6.offsetLeft) + parseInt(hexagon6.offsetWidth)) + "px";
        road.style.top = (parseInt(hexagon6.offsetTop) + parseInt(hexagon6.offsetHeight) * 0.75) + "px";
        road.style.webkitTransform = "rotate(150deg)";
    }
    if (k == 58) {
        road.style.left = (parseInt(hexagon6.offsetLeft) + parseInt(hexagon6.offsetWidth) / 2) + "px";
        road.style.top = (parseInt(hexagon6.offsetTop) + parseInt(hexagon6.offsetHeight)) + "px";
        road.style.webkitTransform = "rotate(210deg)";
    }
    if (k == 59) {
        road.style.left = (parseInt(hexagon6.offsetLeft)) + "px";
        road.style.top = (parseInt(hexagon6.offsetTop) + parseInt(hexagon6.offsetHeight) * 0.75) + "px";
        road.style.webkitTransform = "rotate(270deg)";
    }
    if (k == 60) {
        road.style.left = (parseInt(hexagon6.offsetLeft)) + "px";
        road.style.top = (parseInt(hexagon6.offsetTop) + parseInt(hexagon6.offsetHeight) * 0.25) + "px";
        road.style.webkitTransform = "rotate(330deg)";
    }

    if (k == 61) {
        road.style.left = (parseInt(hexagon7.offsetLeft) + parseInt(hexagon7.offsetWidth) / 2) + "px";
        road.style.top = (parseInt(hexagon7.offsetTop)) + "px";
        road.style.webkitTransform = "rotate(30deg)";
    }
    if (k == 62) {
        road.style.left = (parseInt(hexagon7.offsetLeft) + parseInt(hexagon7.offsetWidth)) + "px";
        road.style.top = (parseInt(hexagon7.offsetTop) + parseInt(hexagon7.offsetHeight) * 0.25) + "px";
        road.style.webkitTransform = "rotate(90deg)";
    }
    if (k == 63) {
        road.style.left = (parseInt(hexagon7.offsetLeft) + parseInt(hexagon7.offsetWidth)) + "px";
        road.style.top = (parseInt(hexagon7.offsetTop) + parseInt(hexagon7.offsetHeight) * 0.75) + "px";
        road.style.webkitTransform = "rotate(150deg)";
    }
    if (k == 64) {
        road.style.left = (parseInt(hexagon7.offsetLeft) + parseInt(hexagon7.offsetWidth) / 2) + "px";
        road.style.top = (parseInt(hexagon7.offsetTop) + parseInt(hexagon7.offsetHeight)) + "px";
        road.style.webkitTransform = "rotate(210deg)";
    }
    if (k == 65) {
        road.style.left = (parseInt(hexagon7.offsetLeft)) + "px";
        road.style.top = (parseInt(hexagon7.offsetTop) + parseInt(hexagon7.offsetHeight) * 0.75) + "px";
        road.style.webkitTransform = "rotate(270deg)";
    }
    if (k == 66) {
        road.style.left = (parseInt(hexagon7.offsetLeft)) + "px";
        road.style.top = (parseInt(hexagon7.offsetTop) + parseInt(hexagon7.offsetHeight) * 0.25) + "px";
        road.style.webkitTransform = "rotate(330deg)";
    }
}

for (let i = 1; i <= 6; i++) {
    let village = document.getElementById("village" + i);
    

    if (i == 1) {
        village.style.left = (parseInt(hexagon1.offsetLeft) + parseInt(hexagon1.offsetWidth) / 2) + "px";
        village.style.top = (parseInt(hexagon1.offsetTop)) + "px";
    }
    if (i == 2) {
        village.style.left = (parseInt(hexagon1.offsetLeft) + parseInt(hexagon1.offsetWidth)) + "px";
        village.style.top = (parseInt(hexagon1.offsetTop) + parseInt(hexagon1.offsetHeight) * 0.25) + "px";
    }
    if (i == 3) {
        village.style.left = (parseInt(hexagon1.offsetLeft)) + "px";
        village.style.top = (parseInt(hexagon1.offsetTop) + parseInt(hexagon1.offsetHeight) * 0.25) + "px";
    }
    if (i == 4) {
        village.style.left = (parseInt(hexagon1.offsetLeft) + parseInt(hexagon1.offsetWidth)) + "px";
        village.style.top = (parseInt(hexagon1.offsetTop) + parseInt(hexagon1.offsetHeight) * 0.75) + "px";
    }
    if (i == 5) {
        village.style.left = (parseInt(hexagon1.offsetLeft)) + "px";
        village.style.top = (parseInt(hexagon1.offsetTop) + parseInt(hexagon1.offsetHeight) * 0.75) + "px";
    }
    if (i == 6) {
        village.style.left = (parseInt(hexagon1.offsetLeft) + parseInt(hexagon1.offsetWidth) / 2) + "px";
        village.style.top = (parseInt(hexagon1.offsetTop) + parseInt(hexagon1.offsetHeight)) + "px";
    }
}

for (let i = 7; i <= 12; i++) {
    let village = document.getElementById("village" + i);
    

    if (i == 7) {
        village.style.left = (parseInt(hexagon2.offsetLeft) + parseInt(hexagon2.offsetWidth) / 2) + "px";
        village.style.top = (parseInt(hexagon2.offsetTop)) + "px";
    }
    if (i == 8) {
        village.style.left = (parseInt(hexagon2.offsetLeft) + parseInt(hexagon2.offsetWidth)) + "px";
        village.style.top = (parseInt(hexagon2.offsetTop) + parseInt(hexagon2.offsetHeight) * 0.25) + "px";
    }
    if (i == 9) {
        village.style.left = (parseInt(hexagon2.offsetLeft)) + "px";
        village.style.top = (parseInt(hexagon2.offsetTop) + parseInt(hexagon2.offsetHeight) * 0.25) + "px";
    }
    if (i == 10) {
        village.style.left = (parseInt(hexagon2.offsetLeft) + parseInt(hexagon2.offsetWidth)) + "px";
        village.style.top = (parseInt(hexagon2.offsetTop) + parseInt(hexagon2.offsetHeight) * 0.75) + "px";
    }
    if (i == 11) {
        village.style.left = (parseInt(hexagon2.offsetLeft)) + "px";
        village.style.top = (parseInt(hexagon2.offsetTop) + parseInt(hexagon2.offsetHeight) * 0.75) + "px";
    }
    if (i == 12) {
        village.style.left = (parseInt(hexagon2.offsetLeft) + parseInt(hexagon2.offsetWidth) / 2) + "px";
        village.style.top = (parseInt(hexagon2.offsetTop) + parseInt(hexagon2.offsetHeight)) + "px";
    }
}

for (let i = 13; i <= 18; i++) {
    let village = document.getElementById("village" + i);
    

    if (i == 13) {
        village.style.left = (parseInt(hexagon3.offsetLeft) + parseInt(hexagon3.offsetWidth) / 2) + "px";
        village.style.top = (parseInt(hexagon3.offsetTop)) + "px";
    }
    if (i == 14) {
        village.style.left = (parseInt(hexagon3.offsetLeft) + parseInt(hexagon3.offsetWidth)) + "px";
        village.style.top = (parseInt(hexagon3.offsetTop) + parseInt(hexagon3.offsetHeight) * 0.25) + "px";
    }
    if (i == 15) {
        village.style.left = (parseInt(hexagon3.offsetLeft)) + "px";
        village.style.top = (parseInt(hexagon3.offsetTop) + parseInt(hexagon3.offsetHeight) * 0.25) + "px";
    }
    if (i == 16) {
        village.style.left = (parseInt(hexagon3.offsetLeft) + parseInt(hexagon3.offsetWidth)) + "px";
        village.style.top = (parseInt(hexagon3.offsetTop) + parseInt(hexagon3.offsetHeight) * 0.75) + "px";
    }
    if (i == 17) {
        village.style.left = (parseInt(hexagon3.offsetLeft)) + "px";
        village.style.top = (parseInt(hexagon3.offsetTop) + parseInt(hexagon3.offsetHeight) * 0.75) + "px";
    }
    if (i == 18) {
        village.style.left = (parseInt(hexagon3.offsetLeft) + parseInt(hexagon3.offsetWidth) / 2) + "px";
        village.style.top = (parseInt(hexagon3.offsetTop) + parseInt(hexagon3.offsetHeight)) + "px";
    }
}

for (let i = 19; i <= 24; i++) {
    let village = document.getElementById("village" + i);
    

    if (i == 19) {
        village.style.left = (parseInt(hexagon4.offsetLeft) + parseInt(hexagon4.offsetWidth) / 2) + "px";
        village.style.top = (parseInt(hexagon4.offsetTop)) + "px";
    }
    if (i == 20) {
        village.style.left = (parseInt(hexagon4.offsetLeft) + parseInt(hexagon4.offsetWidth)) + "px";
        village.style.top = (parseInt(hexagon4.offsetTop) + parseInt(hexagon4.offsetHeight) * 0.25) + "px";
    }
    if (i == 21) {
        village.style.left = (parseInt(hexagon4.offsetLeft)) + "px";
        village.style.top = (parseInt(hexagon4.offsetTop) + parseInt(hexagon4.offsetHeight) * 0.25) + "px";
    }
    if (i == 22) {
        village.style.left = (parseInt(hexagon4.offsetLeft) + parseInt(hexagon4.offsetWidth)) + "px";
        village.style.top = (parseInt(hexagon4.offsetTop) + parseInt(hexagon4.offsetHeight) * 0.75) + "px";
    }
    if (i == 23) {
        village.style.left = (parseInt(hexagon4.offsetLeft)) + "px";
        village.style.top = (parseInt(hexagon4.offsetTop) + parseInt(hexagon4.offsetHeight) * 0.75) + "px";
    }
    if (i == 24) {
        village.style.left = (parseInt(hexagon4.offsetLeft) + parseInt(hexagon4.offsetWidth) / 2) + "px";
        village.style.top = (parseInt(hexagon4.offsetTop) + parseInt(hexagon4.offsetHeight)) + "px";
    }
}

for (let i = 25; i <= 30; i++) {
    let village = document.getElementById("village" + i);
    

    if (i == 25) {
        village.style.left = (parseInt(hexagon5.offsetLeft) + parseInt(hexagon5.offsetWidth) / 2) + "px";
        village.style.top = (parseInt(hexagon5.offsetTop)) + "px";
    }
    if (i == 26) {
        village.style.left = (parseInt(hexagon5.offsetLeft) + parseInt(hexagon5.offsetWidth)) + "px";
        village.style.top = (parseInt(hexagon5.offsetTop) + parseInt(hexagon5.offsetHeight) * 0.25) + "px";
    }
    if (i == 27) {
        village.style.left = (parseInt(hexagon5.offsetLeft)) + "px";
        village.style.top = (parseInt(hexagon5.offsetTop) + parseInt(hexagon5.offsetHeight) * 0.25) + "px";
    }
    if (i == 28) {
        village.style.left = (parseInt(hexagon5.offsetLeft) + parseInt(hexagon5.offsetWidth)) + "px";
        village.style.top = (parseInt(hexagon5.offsetTop) + parseInt(hexagon5.offsetHeight) * 0.75) + "px";
    }
    if (i == 29) {
        village.style.left = (parseInt(hexagon5.offsetLeft)) + "px";
        village.style.top = (parseInt(hexagon5.offsetTop) + parseInt(hexagon5.offsetHeight) * 0.75) + "px";
    }
    if (i == 30) {
        village.style.left = (parseInt(hexagon5.offsetLeft) + parseInt(hexagon5.offsetWidth) / 2) + "px";
        village.style.top = (parseInt(hexagon5.offsetTop) + parseInt(hexagon5.offsetHeight)) + "px";
    }
}

for (let i = 31; i <= 36; i++) {
    let village = document.getElementById("village" + i);
    

    if (i == 31) {
        village.style.left = (parseInt(hexagon6.offsetLeft) + parseInt(hexagon6.offsetWidth) / 2) + "px";
        village.style.top = (parseInt(hexagon6.offsetTop)) + "px";
    }
    if (i == 32) {
        village.style.left = (parseInt(hexagon6.offsetLeft) + parseInt(hexagon6.offsetWidth)) + "px";
        village.style.top = (parseInt(hexagon6.offsetTop) + parseInt(hexagon6.offsetHeight) * 0.25) + "px";
    }
    if (i == 33) {
        village.style.left = (parseInt(hexagon6.offsetLeft)) + "px";
        village.style.top = (parseInt(hexagon6.offsetTop) + parseInt(hexagon6.offsetHeight) * 0.25) + "px";
    }
    if (i == 34) {
        village.style.left = (parseInt(hexagon6.offsetLeft) + parseInt(hexagon6.offsetWidth)) + "px";
        village.style.top = (parseInt(hexagon6.offsetTop) + parseInt(hexagon6.offsetHeight) * 0.75) + "px";
    }
    if (i == 35) {
        village.style.left = (parseInt(hexagon6.offsetLeft)) + "px";
        village.style.top = (parseInt(hexagon6.offsetTop) + parseInt(hexagon6.offsetHeight) * 0.75) + "px";
    }
    if (i == 36) {
        village.style.left = (parseInt(hexagon6.offsetLeft) + parseInt(hexagon6.offsetWidth) / 2) + "px";
        village.style.top = (parseInt(hexagon6.offsetTop) + parseInt(hexagon6.offsetHeight)) + "px";
    }
}

for (let i = 37; i <= 42; i++) {
    let village = document.getElementById("village" + i);
    

    if (i == 37) {
        village.style.left = (parseInt(hexagon7.offsetLeft) + parseInt(hexagon7.offsetWidth) / 2) + "px";
        village.style.top = (parseInt(hexagon7.offsetTop)) + "px";
    }
    if (i == 38) {
        village.style.left = (parseInt(hexagon7.offsetLeft) + parseInt(hexagon7.offsetWidth)) + "px";
        village.style.top = (parseInt(hexagon7.offsetTop) + parseInt(hexagon7.offsetHeight) * 0.25) + "px";
    }
    if (i == 39) {
        village.style.left = (parseInt(hexagon7.offsetLeft)) + "px";
        village.style.top = (parseInt(hexagon7.offsetTop) + parseInt(hexagon7.offsetHeight) * 0.25) + "px";
    }
    if (i == 40) {
        village.style.left = (parseInt(hexagon7.offsetLeft) + parseInt(hexagon7.offsetWidth)) + "px";
        village.style.top = (parseInt(hexagon7.offsetTop) + parseInt(hexagon7.offsetHeight) * 0.75) + "px";
    }
    if (i == 41) {
        village.style.left = (parseInt(hexagon7.offsetLeft)) + "px";
        village.style.top = (parseInt(hexagon7.offsetTop) + parseInt(hexagon7.offsetHeight) * 0.75) + "px";
    }
    if (i == 42) {
        village.style.left = (parseInt(hexagon7.offsetLeft) + parseInt(hexagon7.offsetWidth) / 2) + "px";
        village.style.top = (parseInt(hexagon7.offsetTop) + parseInt(hexagon7.offsetHeight)) + "px";
    }
}