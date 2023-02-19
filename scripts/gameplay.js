let player_main = document.getElementById(main_player);
let player_1 = document.getElementById(player1);
let player_2 = document.getElementById(player2);

let hand = document.getElementsByClassName(hand_btn);

let cube = document.getElementsByClassName(cube_btn);

const hand_1 = [patron1, filter1, mushroom1, gas1, meet1];
const hand_2 = [patron2, filter2, mushroom2, gas2, meet2];
const hand_3 = [patron3, filter3, mushroom3, gas3, meet3];

const cube1 = [1, 2, 3, 4, 5, 6];
const cube2 = [1, 2, 3, 4, 5, 6];
const cube_btn_flag = true;

const move = [red, green, blue];

const circle_num = [];

for (let i = 0; i < 12; i++) {
    circle_num[i] = i + 1;
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function sdvig(array) {
    array.push(array.shift());
}

shuffle(circle_num);

cube.onmouseclick = function (cube_btn_flag, cube1, cube2) {
    if (cube_btn_flag == true) {
        shuffle(cube1);
        shuffle(cube2);
    }
    alert(cube1[1] + cube2[1]);
    cube_btn_flag = false;
}

hand.onmouseclick = function () {
    if (player_main.style.backgroundColor == "red") {
        alert("Patron: " + hand_1[0] + "\nFilter: " + hand_1[1] + "\nMushroom: " + hand_1[2] + "\nGas: " + hand_1[3] + "\nMeat: " + hand_1[4]);
    }
    if (player_main.style.backgroundColor == "green") {
        alert("Patron: " + hand_2[0] + "\nFilter: " + hand_2[1] + "\nMushroom: " + hand_2[2] + "\nGas: " + hand_2[3] + "\nMeat: " + hand_2[4]);
    }
    if (player_main.style.backgroundColor == "blue") {
        alert("Patron: " + hand_3[0] + "\nFilter: " + hand_3[1] + "\nMushroom: " + hand_3[2] + "\nGas: " + hand_3[3] + "\nMeat: " + hand_3[4]);
    }
}