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
        // "test" should be either X or O determined by a function

        // win condition function
        console.log(board[0]);
        console.log(winCheck());
        displayController.updateDisplay();
    }

    function winCheck() {
        if (
        // horizontals
        ((board[0]===board[1]) && (board[1]===board[2]) && (board[2]!=="")) ||
        ((board[3]===board[4]) && (board[4]===board[5]) && (board[5]!=="")) ||
        ((board[6]===board[7]) && (board[7]===board[8]) && (board[8]!=="")) ||
        // verticals
        ((board[0]===board[3]) && (board[3]===board[6]) && (board[6]!=="")) ||
        ((board[1]===board[4]) && (board[4]===board[7]) && (board[7]!=="")) ||
        ((board[2]===board[5]) && (board[5]===board[8]) && (board[8]!=="")) ||
        // diagonals
        ((board[0]===board[4]) && (board[4]===board[8]) && (board[8]!=="")) ||
        ((board[6]===board[4]) && (board[4]===board[2]) && (board[2]!=="")) ) {
        return "win";
        }
        else {
        return "nope";
        }
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

