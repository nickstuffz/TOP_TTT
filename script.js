const spaces = document.querySelectorAll(".space");

spaces.forEach((space) => {
    space.addEventListener('click', () => {

        game.playTurn(space);
    
    });
});

const game = (function() {
    const board = new Array(9);

    const gridMap = {
        'a':0, 'b':1, 'c':2,
        'd':3, 'e':4, 'f':5,
        'g':6, 'h':7, 'i':8
    };
    

    function playTurn(space) {
        // splices X into board
        let place = (gridMap[space.id]);
        board.splice(place, 1, "test");
        console.log(board);
        // "test" should be either X or O determined by a function

        // win condition function

        displayController.updateDisplay();

    }

    return {
        board,
        playTurn

    };
    
})();

const displayController = (function() {
    const spaces = document.querySelectorAll(".space");

    function createGame() {
        spaces.forEach((space) => {
            space.addEventListener('click', () => {
            game.playTurn(space);
            });
        });
    }   

    // function createSpaces
    
    function updateDisplay() {
        i = 0;
        spaces.forEach((space) => {
            space.innerHTML = game.board[i];

            i++;
        });

    }
    
    return {

        updateDisplay
    }
})();




// gameboard object module
// -gameboard array
// -placePiece function
// -playTurn function



// players object


//     function placePiece = 
// is passed place number, updates it on gameboard
// take X or O and places it on game state

function placePiece(space) {
    space.innerHTML = ("x");
}

