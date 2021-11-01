
//true is X, false is O
let activePlayer = true;
// which squares we have selected
let selectedSquares = [];
//allows me to reference the image using the activePlayer variable
let teamDict = {
    true: 'url("images/x.png")',
    false: 'url("images/o.png")'
}

function placeXOrO(squareNumber) {
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //create a reference to the selected square
        let select = document.getElementById(squareNumber);
        // using a dict avoids if statements since we have full controler over activePlayer
        // since it can only be X or O
        select.style.backgroundImage = teamDict[activePlayer];

        // add our square to the array of selected squares
        selectedSquares.push(squareNumber + activePlayer);


        // checking the win condition
        // add this as a boolean because I had a bug where it would check twice
        // once it verifies the win condition, it prevents the rest of this from running
        if (checkWinConditions()) {
            return;
        }

        // instead of using if statements, we can just reverse these
        activePlayer = !activePlayer;

        // let placeSound = new Audio('./media/place.mp3');
        // placeSound.play();
        audio('./media/place.mp3');

        // if the active player is not the human, disable click and have the computer play.
        if (!activePlayer) {
            disableClick();

            setTimeout(function () { computersTurn(); }, 100);
        }
        return true;
    }

    // computer should select a random number until it finds a square that hasn't been selected
    // then play that square
    function computersTurn() {
        let success = false;
        let pickASquare;
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            console.log(pickASquare);

            if (placeXOrO(pickASquare)) {

                placeXOrO(pickASquare);
                success = true;
            }
        }

    }
}

// clear all squares and allow the game to restart
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}


// use 3 squares on a board and check to see if those 3 are active in the array
function arrayIncludes(squareA, squareB, squareC) {
    const a = selectedSquares.includes(squareA)
    const b = selectedSquares.includes(squareB)
    const c = selectedSquares.includes(squareC)
    if (a === true && b === true && c === true) { return true; }
}

// actually input the information to the previous function, the number coresponds to the square
// true or false references the team that played the square
function checkWinConditions() {
    if (arrayIncludes('0true', '1true', '2true')) { drawWinLine(50, 100, 558, 100); return true; }
    else if (arrayIncludes('3true', '4true', '5true')) { drawWinLine(50, 304, 558, 304); return true; }
    else if (arrayIncludes('6true', '7true', '8true')) { drawWinLine(50, 508, 558, 508); return true; }
    else if (arrayIncludes('0true', '3true', '6true')) { drawWinLine(100, 50, 100, 558); return true; }
    else if (arrayIncludes('1true', '4true', '7true')) { drawWinLine(304, 50, 304, 558); return true; }
    else if (arrayIncludes('2true', '5true', '8true')) { drawWinLine(508, 50, 508, 558); return true; }
    else if (arrayIncludes('6true', '4true', '2true')) { drawWinLine(100, 508, 510, 90); return true; }
    else if (arrayIncludes('0true', '4true', '8true')) { drawWinLine(100, 100, 520, 520); return true; }
    else if (arrayIncludes('0false', '1false', '2false')) { drawWinLine(50, 100, 558, 100); return true; }
    else if (arrayIncludes('3false', '4false', '5false')) { drawWinLine(50, 304, 558, 304); return true; }
    else if (arrayIncludes('6false', '7false', '8false')) { drawWinLine(50, 508, 558, 508); return true; }
    else if (arrayIncludes('0false', '3false', '6false')) { drawWinLine(100, 50, 100, 558); return true; }
    else if (arrayIncludes('1false', '4false', '7false')) { drawWinLine(304, 50, 304, 558); return true; }
    else if (arrayIncludes('2false', '5false', '8false')) { drawWinLine(508, 50, 508, 558); return true; }
    else if (arrayIncludes('6false', '4false', '2false')) { drawWinLine(100, 508, 510, 90); return true; }
    else if (arrayIncludes('0false', '4false', '8false')) { drawWinLine(100, 100, 520, 520); return true; }

    else if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3')
        // tieAudio.play();
        //resetGame();
        setTimeout(function () { resetGame(); }, 100);
        return true;
    }
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //reference the canvas we would like to draw to
    const canvas = document.getElementById('win-lines')

    const c = canvas.getContext('2d');
    //I really don't think this was super necessary, since we had a reference from the parameters
    let x1 = coordX1, // 558
        y1 = coordY1, // 50
        x2 = coordX2, // 558
        y2 = coordY2, // 558
        x = x1,
        y = y1;

    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);

        //clear the canvas we are drawing to
        c.clearRect(0, 0, 608, 608)

        //debugging
        //console.log("trying to draw");

        // starting point and create brush essentially
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();

        //draw until we meet our parameters
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    function clear() {
        const animationLoop = requestAnimationFrame(clear);

        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    // disable mouse, play win sound, 
    disableClick();
    audio('./media/winGame.mp3');
    // calls the animation loop
    animateLineDrawing();
    // clear and reset
    setTimeout(function () { clear(); resetGame(); }, 1000);
}


// prevent user from interacting
function disableClick() {
    body.style.pointerEvents = 'none';

    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

// quick audio playing
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}