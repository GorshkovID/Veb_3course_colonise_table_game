let player_main = document.getElementById(main_player);
let player_1 = document.getElementById(player1);
let player_2 = document.getElementById(player2);

let hand = document.getElementsByClassName(hand_btn);

const hand_1 = [patron1, filter1, mushroom1, gas1, meet1];
const hand_2 = [patron2, filter2, mushroom2, gas2, meet2];
const hand_3 = [patron3, filter3, mushroom3, gas3, meet3];

let cube = document.getElementsByClassName(cube_btn);

const cube1 = [1, 2, 3, 4, 5, 6];
const cube2 = [1, 2, 3, 4, 5, 6];

const move = [red, green, blue];

let next_btn = document.getElementsByClassName(next_btn);

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(cube1);
shuffle(cube2);

function sdvig(array) {
    array.push(array.shift());
}

cube.onmouseclick = function () {
    alert(cube1[1] + cube2[1]);
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

next_btn.onmouseclick = function () {
    sdvig(move);

    shuffle(cube1);
    shuffle(cube2);

    player_main.style.backgroundColor = move[0];
    player_1.style.backgroundColor = move[1];
    player_2.style.backgroundColor = move[2];
}