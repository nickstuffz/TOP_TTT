const game = (function() {
    const board = new Array(9).fill("");

    const gridMap = {
        'a':0, 'b':1, 'c':2,
        'd':3, 'e':4, 'f':5,
        'g':6, 'h':7, 'i':8
    };
    
    let token = "o";
    
    function setToken() {
        if (token === "o") {
            token = "x";
        }
        else {
            token = "o";
        }
        return token;
    }

    function playTurn(space) {
        let place = (gridMap[space.id]);
        board.splice(place, 1, setToken());
        console.log(board);
        // "test" should be either X or O determined by a function

        // win condition function

        displayController.updateDisplay();
    }

    return {
        board,
        playTurn
    }
})();

const displayController = (function() {
    const spaces = document.querySelectorAll(".space");

    function createGame() {
        spaces.forEach((space) => {
            space.addEventListener('click', () => {
            if (space.classList.contains("taken")) {
                return;
            }
            game.playTurn(space);
            space.classList.add("taken");
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
        createGame,
        updateDisplay
    }
})();

displayController.createGame();

