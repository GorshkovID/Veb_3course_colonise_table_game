let player_main = document.getElementById('main_player');
let player_1 = document.getElementById('player1');
let player_2 = document.getElementById('player2');

let hand = document.getElementsByClassName('hand_btn')[0];

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
        alert("Patron: " + hand_1[0] + "\nFilter: " + hand_1[1] + "\nMushroom: " + hand_1[2] + "\nGas: " + hand_1[3] + "\nMeat: " + hand_1[4]);
    }
    if (move[0] == "green") {
        alert("Patron: " + hand_2[0] + "\nFilter: " + hand_2[1] + "\nMushroom: " + hand_2[2] + "\nGas: " + hand_2[3] + "\nMeat: " + hand_2[4]);
    }
    if (move[0] == "blue") {
        alert("Patron: " + hand_3[0] + "\nFilter: " + hand_3[1] + "\nMushroom: " + hand_3[2] + "\nGas: " + hand_3[3] + "\nMeat: " + hand_3[4]);
    }
}

if (move[0] == "red") {
    building(hand_1, move[0], hand_1[0], hand_1[1], hand_1[2], hand_1[3], hand_1[4], check_village);
}
if (move[0] == "green") {
    building(hand_2, move[0], hand_2[0], hand_2[1], hand_2[2], hand_2[3], hand_2[4], check_village);
}
if (move[0] == "blue") {
    building(hand_3, move[0], hand_3[0], hand_3[1], hand_3[2], hand_3[3], hand_3[4], check_village);
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