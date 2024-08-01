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
        for(const tile of tilesArray){
            tile = undefined;
        }
    }

    return {getTileValue, setTileValue, resetGameBoard}
})();

const Player = (sign) => {
    const name = "Player1";
    const marker = sign;

    const getName = () => {
        return name;
    }

    const setName = (customName) => {
        name = customName;
    }

    const getSign = () => {
        return sign;
    }

    return {getName, setName, getSign}
}

// gameController + IIFE
const gameController = (() => {
    const playerX = Player("X");
    const playerO = Player("O");
    const currentPlayer = playerX;
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
    const changeCurrentPlayer = (player) => {
        getCurrentTurnNum() %2 === 0 ? setCurrentPlayer(getPlayerX()) : setCurrentPlayer(getPlayerO());
    }

    // place marker
    const placeMarker = (index, marker) => {
        if(gameBoard.getTileValue(index) === undefined){
            gameBoard.setTileValue(index, marker);
        }        
    }
    
    // take turn
    const takeTurn = (index) => {
        //console.log(`${getCurrentPlayer().getName()} (${getCurrentPlayer().getSign()})'s turn!`);
        placeMarker(index, currentPlayer.getSign());
        incrementTurnNUm();
        if(getCurrentTurnNum() === 9){
            // TIE
            console.log("TIE");


        } else if(checkForWinner()) {
            // VICTORY
            console.log(`The Winner is ${currentPlayer.getName()} (${currentPlayer.getSign()})!`);

        } else {
            // NEXT ROUND
            changeCurrentPlayer();

        }

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
            gameBoard.getTileValue(4) === gameBoard.getTileValue(0) && gameBoard.getTileValue(4) === gameBoard.getTileValue(8)
            ||
            gameBoard.getTileValue(4) === gameBoard.getTileValue(2) && gameBoard.getTileValue(4) === gameBoard.getTileValue(6)
        ){
            return true;
        }

        return false;
    }

    return {placeMarker, takeTurn};
})();

// displayController


/*
gameBoard.setTileValue(5, 32);
console.log(gameBoard.getTileValue(5));
*/

