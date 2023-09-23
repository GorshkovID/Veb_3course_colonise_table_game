let check_village = [];
let check_road = [];

check_village[0] = "sra";

const hand_1 = [4, 4, 4, 4, 4];
const hand_2 = [2, 2, 2, 2, 2];
const hand_3 = [0, 0, 0, 0, 0];

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

function buildingVillage(main_hand, move, patron, filter, mushroom, gas, meat, check_village) {

    let flag = 0;

    for (i = 1; i <= 42; i++) {
        check_village[i] = 0;

        let village = document.getElementById("village" + i);

        village.onmouseenter = function () {
            village.style.scale = "1.5";
        }

        if (check_village[i] == 0) {
            village.onclick = function () {
                if (patron >= 1 && mushroom >= 1 && meat >= 1 && filter >= 1) {
                    patron = patron - 1;
                    mushroom = mushroom - 1;
                    meat = meat - 1;
                    filter = filter - 1;

                    main_hand[0] = patron;
                    main_hand[1] = filter;
                    main_hand[2] = mushroom;
                    main_hand[4] = meat;

                    village.style.backgroundColor = move;

                    check_village[i] = 1;

                    flag = flag + 1;
                }
            }
        }

        village.onmouseleave = function () {
            village.style.scale = "1";

            alert(check_village[i]);
        }

        if (check_village[i] == 1) {
            village.onclick = function () {
                if (meat >= 2 && mushroom >= 2 && gas >= 1) {
                    meat = meat - 2;
                    gas = gas - 1;
                    mushroom = mushroom - 2;

                    main_hand[3] = gas;
                    main_hand[2] = mushroom;
                    main_hand[4] = meat;

                    village.style.scale = "1.5";

                    check_village[i] = 2;

                    flag = flag + 1;
                }
            }
        }

        if (flag == 2) {
            break;
        }
    }
}

function buildingRoad(main_hand, move, patron, filter, mushroom, gas, meat, check_road) {
    let flag_road = 0;

    for (j = 1; j <= 66; j++) {
        let road = document.getElementById("road" + j);

        if (check_road[j] == 0) {
            road.onclick = function () {
                if (patron >= 1 && filter >= 1 && gas >= 1) {
                    patron = patron - 1;
                    filter = filter - 1;
                    gas = gas - 1;

                    main_hand[0] = patron;
                    main_hand[1] = filter;
                    main_hand[3] = gas;

                    road.style.backgroundColor = move[0];

                    check_road[j] = 1;

                    flag_road = 1;
                }
            }
        }

        if (flag_road == 1) {
            break;
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

function checkBuilding(move) {
    if (move == "red") {
        buildingVillage(hand_1, move, hand_1[0], hand_1[1], hand_1[2], hand_1[3], hand_1[4], check_village);

        buildingRoad(hand_1, move, hand_1[0], hand_1[1], hand_1[2], hand_1[3], hand_1[4], check_road);
    }
    if (move == "green") {
        buildingVillage(hand_2, move, hand_2[0], hand_2[1], hand_2[2], hand_2[3], hand_2[4], check_village);

        buildingRoad(hand_2, move, hand_2[0], hand_2[1], hand_2[2], hand_2[3], hand_2[4], check_road);
    }
    if (move == "blue") {
        buildingVillage(hand_3, move, hand_3[0], hand_3[1], hand_3[2], hand_3[3], hand_3[4], check_village);

        buildingRoad(hand_3, move, hand_3[0], hand_3[1], hand_3[2], hand_3[3], hand_3[4], check_road);
    }
}