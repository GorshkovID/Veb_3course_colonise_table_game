function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function sdvig(array) {
    array.push(array.shift());
}

function monsterClear() {
    for (let i = 1; i <= 18; i++) {
        let num_field = document.getElementById("num_field" + i);

        num_field.style.opacity = "1";
    }
}

function monsterMove() {
    let flag = true;

    for (let i = 1; i <= 18; i++) {
        let num_field = document.getElementById("num_field" + i);

        num_field.onmouseenter = function () {
            if (num_field.style.opacity != "0" && flag == true) {
                num_field.style.cursor = "pointer";
            }
            else {
                num_field.style.cursor = "default";
            }
        }

        num_field.onclick = function () {
            if (flag == true) {
                num_field.style.opacity = "0";
            }

            flag = false;
        }

        if (flag == false) {
            break;
        }
    }

    if (flag == false) {
        return;
    }
}

function buildingVillage(move, hand = { patron, filter, mushroom, gas, meat }) {
    let check_color = document.getElementById("check")

    for (i = 1; i <= 42; i++) {
        let village = document.getElementById("village" + i);

        village.onmouseenter = function () {
            village.style.scale = "1.5";
        }

        village.onclick = function () {
            if (hand.patron >= 1 && hand.mushroom >= 1 && hand.meat >= 1 && hand.filter >= 1 && village.style.backgroundColor == check_color.style.backgroundColor) {
                village.style.backgroundColor = move[0];
            }
        }

        village.onmouseleave = function () {
            village.style.scale = "1";
        }
    }
}

function point_hexagon(hand = { patron, filter, mushroom, gas, meat }, cube) {
    for (let i = 2; i <= 7; i++) {
        let player_main = document.getElementById('main_player');
        let hexagon = document.getElementById("hexagon" + i);
        let num_field = document.getElementById("num_field" + i + 11);
        let num_hexagon = document.getElementById("num_hexagon" + i);

        for (let j = 7; j <= 42; j++) {
            let village = document.getElementById("village" + j);

            if (num_hexagon.textContent == cube) {
                for (let k = 1; k <= 4; k++) {
                    if (hexagon.style.backgroundImage == "url('Images/img" + k + ".jpg'" && village.style.backgroundColor == player_main.style.backgroundColor) {
                        hand.patron += 1;
                    }
                }

                for (let k = 5; k <= 8; k++) {
                    if (hexagon.style.backgroundImage == "url('Images/img" + k + ".jpg'" && village.style.backgroundColor == player_main.style.backgroundColor) {
                        hand.filter += 1;
                    }
                }

                for (let k = 9; k <= 11; k++) {
                    if (hexagon.style.backgroundImage == "url('Images/img" + k + ".jpg'" && village.style.backgroundColor == player_main.style.backgroundColor) {
                        hand.mushroom += 1;
                    }
                }

                for (let k = 12; k <= 15; k++) {
                    if (hexagon.style.backgroundImage == "url('Images/img" + k + ".jpg'" && village.style.backgroundColor == player_main.style.backgroundColor) {
                        hand.gas += 1;
                    }
                }

                for (let k = 16; k <= 18; k++) {
                    if (hexagon.style.backgroundImage == "url('Images/img" + k + ".jpg'" && village.style.backgroundColor == player_main.style.backgroundColor) {
                        hand.meat += 1;
                    }
                }
            }
        }
    }
}