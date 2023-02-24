let player_main = document.getElementById('main_player');
let player_1 = document.getElementById('player1');
let player_2 = document.getElementById('player2');

let hand = document.getElementsByClassName('hand_btn')[0];

const hand_1 = { patron1: 2, filter1: 2, mushroom1: 2, gas1: 2, meat1: 2 };
const hand_2 = { patron2: 0, filter2: 0, mushroom2: 0, gas2: 0, meat2: 0 };
const hand_3 = { patron3: 0, filter3: 0, mushroom3: 0, gas3: 0, meat3: 0 };

let cube = document.getElementsByClassName('cube_btn')[0];

let flag_cube = true;

const cube1 = [1, 2, 3, 4, 5, 6];
const cube2 = [1, 2, 3, 4, 5, 6];

const move = ["red", "green", "blue"];

let next_btn = document.getElementsByClassName('next_move')[0];

shuffle(cube1);
shuffle(cube2);

cube.onclick = function () {
    alert(cube1[1] + cube2[1]);

    if (flag_cube = true && cube1[1] + cube2[1] != 7) {
        point();
    }

    if (cube1[1] + cube2[1] == 7) {
        monsterClear();
        monsterMove();
        return;
    }

    flag_cube = false;
}

hand.onclick = function () {
    if (move[0] == "red") {
        alert("Patron: " + hand_1.patron1 + "\nFilter: " + hand_1.filter1 + "\nMushroom: " + hand_1.mushroom1 + "\nGas: " + hand_1.gas1 + "\nMeat: " + hand_1.meat1);
    }
    if (move[0] == "green") {
        alert("Patron: " + hand_2.patron2 + "\nFilter: " + hand_2.filter2 + "\nMushroom: " + hand_2.mushroom2 + "\nGas: " + hand_2.gas2 + "\nMeat: " + hand_2.meat2);
    }
    if (move[0] == "blue") {
        alert("Patron: " + hand_3.patron3 + "\nFilter: " + hand_3.filter3 + "\nMushroom: " + hand_3.mushroom3 + "\nGas: " + hand_3.gas3 + "\nMeat: " + hand_3.meat3);
    }
}

if (move[0] == "red") {
    buildingVillage(move, hand_1);
}
if (move[0] == "green") {
    buildingVillage(move, hand_2);
}
if (move[0] == "blue") {
    buildingVillage(move, hand_3);
}

next_btn.onclick = function () {
    sdvig(move);

    shuffle(cube1);
    shuffle(cube2);

    player_main.style.backgroundColor = move[0];
    player_1.style.backgroundColor = move[1];
    player_2.style.backgroundColor = move[2];

    flag_cube = true;
}