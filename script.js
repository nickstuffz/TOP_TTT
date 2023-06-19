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
        currentToken = setToken();
        board.splice(place, 1, currentToken);

        displayController.updateDisplay();
        displayController.resultHandler(resultCheck(), currentToken);
    }

    function resultCheck() {
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
((board[6]===board[4]) && (board[4]===board[2]) && (board[2]!=="")) 

        ) {
            return "win";
        }
        else if (!(board.includes(""))) {
            return "tie";
        }
        else {
            return "none";
        }
    }

    function clearGame() {
        board.fill("");
    }

    return {
        board,
        playTurn,
        clearGame
    }
})();

const displayController = (function() {

    const spaces = document.querySelectorAll(".space");

    const result_container = document.getElementById("result-container");

    function createGame() {
        spaces.forEach((space) => {
            space.addEventListener("click", () => {
            if (space.classList.contains("taken")) {
                return;
            }
            game.playTurn(space);
            space.classList.add("taken");
            });
        });
    }
    
    function updateDisplay() {
        i = 0;
        spaces.forEach((space) => {
            space.innerHTML = game.board[i];
            i++;
        });
    }

    function resultHandler(result, currentToken) {
        if (result === "none") {
            return
        }
        else {
            if (result === "win") {
                result_container.innerHTML = currentToken + " wins!";
            }
            else if (result === "tie") {
                result_container.innerHTML = "we have a tie!"
            }
            spaces.forEach((space) => {
                space.classList.add("taken");
            });
        }
    }

    function clearSpaces() {
        spaces.forEach((space) => {
            space.innerHTML = "";
            space.classList.remove("taken");
        });
        result_container.innerHTML = "";
    }
    
    return {
        createGame,
        updateDisplay,
        resultHandler,
        clearSpaces
    }
})();

displayController.createGame();

function resetBoard() {
    displayController.clearSpaces();
    game.clearGame();
}

