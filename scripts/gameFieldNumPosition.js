const num = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];

shuffle(num);

for (let i = 1; i < 13; i++) {
    let num_square = document.getElementById("num_square" + i);
    let square = document.getElementById("square" + i);

    if (i == 1) {
        num_square.textContent = num.shift();
    }
    if (i == 2) {
        num_square.textContent = num.shift();
    }
    if (i == 3) {
        num_square.textContent = num.shift();
    }
    if (i == 4) {
        num_square.textContent = num.shift();
    }
    if (i == 5) {
        num_square.textContent = num.shift();
    }
    if (i == 6) {
        num_square.textContent = num.shift();
    }
    if (i == 7) {
        num_square.textContent = num.shift();
    }
    if (i == 8) {
        num_square.textContent = num.shift();
    }
    if (i == 9) {
        num_square.textContent = num.shift();
    }
    if (i == 10) {
        num_square.textContent = num.shift();
    }
    if (i == 11) {
        num_square.textContent = num.shift();
    }
    if (i == 12) {
        num_square.textContent = num.shift();
    }
}

for (let i = 2; i < 8; i++) {
    let num_hexagon = document.getElementById("num_hexagon" + i);
    let hexagon = document.getElementById("hexagon" + i);

    if (i == 2) {
        num_hexagon.textContent = num.shift();
    }
    if (i == 3) {
        num_hexagon.textContent = num.shift();
    }
    if (i == 4) {
        num_hexagon.textContent = num.shift();
    }
    if (i == 5) {
        num_hexagon.textContent = num.shift();
    }
    if (i == 6) {
        num_hexagon.textContent = num.shift();
    }
    if (i == 7) {
        num_hexagon.textContent = num.shift();
    }
}