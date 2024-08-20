// factory function + IIFE
const gameBoard = (() => {
    // index: [0-8]
    const tilesArray = Array(9);

    // get tile value
    const getTileValue = (index) => {
        return tilesArray[index];
    }

    // set tile value by index
    const setTileValue = (index, value) => {
        tilesArray[index] = value;
    }

    // reset gameBoard
    const resetGameBoard = () => {
        for(let i = 0; i < tilesArray.length; i++){
            tilesArray[i] = undefined;
        }
    }

    return {
        getTileValue,
        setTileValue,
        resetGameBoard
    }
})();

const Player = (playerName, sign) => {
    let name = playerName;
    const marker = sign;
    let points = 0;

    const getName = () => {
        return name;
    }

    const setName = (customName) => {
        name = customName;
    }

    const getSign = () => {
        return marker;
    }

    const getPoints = () => {
        return points;
    }

    const setPoints = (value) => {
        points = value;
    }

    const incrementPoints = () => {
        points++;
    }

    return {getName, setName, getSign, getPoints, setPoints, incrementPoints}
}

// gameController + IIFE
const gameController = (() => {
    const playerX = Player("Player1", "X");
    const playerO = Player("Player2", "O");
    let currentPlayer = playerX;
    let turnNum = 0;

    // get player X
    const getPlayerX = () => {
        return playerX;
    }

    // get player O
    const getPlayerO = () => {
        return playerO;
    }

    // set current player
    const setCurrentPlayer = (player) => {
        currentPlayer = player;
    }

    // get current player
    const getCurrentPlayer = () => {
        return currentPlayer;
    }

    // get current turnNum
    const getCurrentTurnNum = () => {
        return turnNum;
    }

    // increment turnNUm
    const incrementTurnNUm = () => {
        turnNum++;
    }

    // reset turnNum
    const resetTurnNum = () => {
        turnNum = 0;
    }

    
    // change current player
    const changeCurrentPlayer = () => {
        getCurrentTurnNum() %2 === 0 ? setCurrentPlayer(getPlayerX()) : setCurrentPlayer(getPlayerO());
    }

    // place marker
    const placeMarker = (index, marker) => {
        if(gameBoard.getTileValue(index) === undefined){
            gameBoard.setTileValue(index, marker);
            displayController.changeCellValue(index, currentPlayer.getSign());
        }
    }
    
    // take turn
    const takeTurn = (index) => {
        placeMarker(index, currentPlayer.getSign());
        incrementTurnNUm();
        if(checkForWinner()){
           // VICTORY
            displayController.toggleNotificationWindow();
            displayController.changeNotificationMessage(`The Winner is ${currentPlayer.getName()} (${currentPlayer.getSign()})!`);
            currentPlayer.incrementPoints();



        } else if(getCurrentTurnNum() === 9){
             // TIE
             displayController.toggleNotificationWindow();
             displayController.changeNotificationMessage("Tie!");


        } else {
            // NEXT TURN
            changeCurrentPlayer();
            displayController.changeInfoDisplayText(`${currentPlayer.getName()} (${currentPlayer.getSign()}) 's Turn!`);
        }

        

        
        /*
        //console.log(`${getCurrentPlayer().getName()} (${getCurrentPlayer().getSign()})'s turn!`);
        */
    }

    // check for win
    const checkForWinner = () => {
        if(checkColumns() || checkRows() || checkDiagonals()){
            return true;
        }

        return false;
    }

    // check rows
    const checkRows = () => {
        if(
            gameBoard.getTileValue(0) !== undefined
            &&
            gameBoard.getTileValue(0) === gameBoard.getTileValue(1) && gameBoard.getTileValue(0) === gameBoard.getTileValue(2)
        ){
            return true;
        } else if(
            gameBoard.getTileValue(3) !== undefined
            &&
            gameBoard.getTileValue(3) === gameBoard.getTileValue(4) && gameBoard.getTileValue(3) === gameBoard.getTileValue(5)
        ){
            return true;
        } else if(
            gameBoard.getTileValue(6) !== undefined
            &&
            gameBoard.getTileValue(6) === gameBoard.getTileValue(7) && gameBoard.getTileValue(6) === gameBoard.getTileValue(8)
        ){
            return true;
        }

        return false;
    }


    // check columns
    const checkColumns = () => {
        if(
            gameBoard.getTileValue(0) !== undefined
            &&
            gameBoard.getTileValue(0) === gameBoard.getTileValue(3) && gameBoard.getTileValue(0) === gameBoard.getTileValue(6)
        ){
            return true;
        } else if(
            gameBoard.getTileValue(1) !== undefined
            &&
            gameBoard.getTileValue(1) === gameBoard.getTileValue(4) && gameBoard.getTileValue(1) === gameBoard.getTileValue(7)
        ){
            return true;
        } else if(
            gameBoard.getTileValue(2) !== undefined
            &&
            gameBoard.getTileValue(2) === gameBoard.getTileValue(5) && gameBoard.getTileValue(2) === gameBoard.getTileValue(8)
        ){
            return true;
        }

        return false;
    }

    // check diagonals
    const checkDiagonals = () => {
        if(
            gameBoard.getTileValue(4) !== undefined
            &&
            (
            gameBoard.getTileValue(4) === gameBoard.getTileValue(0) && gameBoard.getTileValue(4) === gameBoard.getTileValue(8)
            ||
            gameBoard.getTileValue(4) === gameBoard.getTileValue(2) && gameBoard.getTileValue(4) === gameBoard.getTileValue(6)
            )
        ){
            return true;
        }

        return false;
    }

    const restartGame = () => {
        getPlayerX().setPoints(0);
        getPlayerO().setPoints(0);
        startNewTurn();
    }

    const startNewTurn = () => {
        gameBoard.resetGameBoard();
        resetTurnNum();
        setCurrentPlayer(getPlayerX());
        displayController.clearGridCells();
        displayController.changeInfoDisplayText(`${currentPlayer.getName()} (${currentPlayer.getSign()}) 's Turn!`);
        displayController.changeScoreDisplayText(`${getPlayerX().getName()}  ${getPlayerX().getPoints()} - ${getPlayerO().getPoints()} ${getPlayerO().getName()}`);
        
    }

    // change player name
    const changePlayerName = (form, sign) => {
        if(sign == "X"){
            getPlayerX().setName(getFormData(form));
        } else if(sign == "O"){
            getPlayerO().setName(getFormData(form));
        }

        displayController.changeInfoDisplayText(`${currentPlayer.getName()} (${currentPlayer.getSign()}) 's Turn!`);
        displayController.changeScoreDisplayText(`${getPlayerX().getName()}  ${getPlayerX().getPoints()} - ${getPlayerO().getPoints()} ${getPlayerO().getName()}`);
    }

    // get form data
    const getFormData = (form) => {
        const formData = new FormData(form);
        for(let pair of formData.entries()){
            /* console.log(pair[0] + ": " + pair[1]); */
            switch(pair[0]){
                case "new-name" :
                    return pair[1];
                default:
                    break;
            }
        }
    }

    return {
        takeTurn,
        restartGame,
        getCurrentPlayer,
        getPlayerX,
        getPlayerO,
        startNewTurn,
        changePlayerName
    };
})();

//
// displayController
//
const displayController = (() => {
    // main HTML elements
    // score display
    const scoreDisplay = document.querySelector(".score-display");
    // info display
    const infoDisplay = document.querySelector(".info-display");
    // restart button
    const restartBtn = document.querySelector(".restart-btn");
    // grid cells
    const gridCells = document.querySelectorAll(".cell");

    // change player1 name button
    const changePlayer1NameBtn = document.querySelector("#edit-player1-name-btn");
    // change player2 name button
    const changePlayer2NameBtn = document.querySelector("#edit-player2-name-btn");

    // notification window
    const notificationWindow = document.querySelector("#notification-overlay");
    // notification message
    const notificationMessage = document.querySelector("#notification-message");
    // notification back button
    const notificationBackBtn = document.querySelector("#notification-back-btn");

    // name change window
    const nameChangeWindow = document.querySelector("#name-change-overlay");
    // name change form
    const nameChangeForm = document.querySelector("#name-change-form");
    // name change field
    const nameChangeField = document.querySelector("#name-change-field");
    // name change back button
    const nameChangeBackBtn = document.querySelector("#name-change-back-btn");
    // name change confirm button
    const nameChangeConfirmBtn = document.querySelector("#name-change-confirm-btn");

    // get grid cells
    const getGridCells = () => {
        return gridCells;
    }

    // change cell value
    const changeCellValue = (index, value) => {
        getGridCells()[index].textContent = value;
    }

    // clear grid cells
    const clearGridCells = () => {
        getGridCells().forEach(cell => {
            cell.textContent = "";
        });
    }

    // toggle notification window
    const toggleNotificationWindow = () => {
        notificationWindow.classList.toggle("active");
    }

    // toggle name change window
    const toggleNameChangeWindow = () => {
        nameChangeWindow.classList.toggle("active");
    }

    // change notification message
    const changeNotificationMessage = (newText) => {
        notificationMessage.textContent = newText;
    }

    
    // change player1 name
    changePlayer1NameBtn.addEventListener("click", () => {
        toggleNameChangeWindow();
        nameChangeField.setAttribute("value", gameController.getPlayerX().getName());
        nameChangeField.classList.toggle(gameController.getPlayerX().getSign());
    });

    // change player2 name
    changePlayer2NameBtn.addEventListener("click", () => {
        toggleNameChangeWindow();
        nameChangeField.setAttribute("value", gameController.getPlayerO().getName());
        nameChangeField.classList.toggle(gameController.getPlayerO().getSign());
    });

    // change name back button
    nameChangeBackBtn.addEventListener("click", () => {
        nameChangeField.classList.remove(...nameChangeField.classList);
        toggleNameChangeWindow();
        nameChangeForm.reset();
    });


    // submit name change
    nameChangeForm.addEventListener("submit", (event) => {
        event.preventDefault();
        gameController.changePlayerName(event.target, nameChangeField.classList);
        toggleNameChangeWindow()
        nameChangeForm.reset();
        nameChangeField.classList.remove(...nameChangeField.classList);
    });


    // change info display text
    const changeInfoDisplayText = (newText) => {
        infoDisplay.textContent = newText;
    }

    // change score display text
    const changeScoreDisplayText = (newText) => {
        scoreDisplay.textContent = newText;
    }

    // 
    gridCells.forEach(element => {
        element.addEventListener("click", (e) => {
            gameController.takeTurn(parseInt(e.target.id));
        });
    });

    //
    restartBtn.addEventListener("click", () => {
        gameController.restartGame();
    });

    //
    notificationBackBtn.addEventListener("click", () => {
        gameController.startNewTurn();
        toggleNotificationWindow();
    });

    //
    infoDisplay.textContent =
        `${gameController.getCurrentPlayer().getName()} (${gameController.getCurrentPlayer().getSign()}) 's Turn!`;

    //
    scoreDisplay.textContent =
        `${gameController.getPlayerX().getName()}  ${gameController.getPlayerX().getPoints()} - ${gameController.getPlayerO().getPoints()} ${gameController.getPlayerO().getName()}`;
 
    return{
        changeCellValue,
        clearGridCells,
        toggleNotificationWindow,
        changeInfoDisplayText,
        changeScoreDisplayText,
        changeNotificationMessage
    }

})();
