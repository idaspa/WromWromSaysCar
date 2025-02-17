

do {
    move();

    if (!peek()) {
        turn();

        while (!peek()) {
            turnLeft()
        }
    }

} while (!atGoal())




function move() {
    console.log("Move one tile foreward");
}

function turnLeft() {
    turn()
    turn()
    turn()

    console.log("turned left")
}

function turn() {

    console.log("Turned 90 degrees");
}

function peek() {

    console.log("Checked if it's open spot in front of me");
    return true;
}

function atGoal() {

    console.log("Checked if I'm at Goal");

    return true;


}