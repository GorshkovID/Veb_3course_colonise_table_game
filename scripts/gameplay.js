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

const move = [1, 2, 3];

player_main.style.backgroundColor = "red";

const circle_num = [];

document.getElementsByClassName().ge

for (let i = 0; i < 12; i++) {
    circle_num[i] = i + 1;
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(circle_num);

shuffle(cube1);
shuffle(cube2);

cube.onmouseclick = function () {
    alert("")
}

hand.onmouseclick = function () {

}