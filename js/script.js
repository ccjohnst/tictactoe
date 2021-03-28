const createPlayers = (name) => {
    return {
        name,
    }
}

/* create a module for our gameBoard
TO DO: 
- Store gameboard as array inside of Gameboard object*/

const gameBoard = (() => {
    const gameBoardArray = new Array(9);
    const gridButtons = document.querySelectorAll('.sqaureButtons');

    const xWinningArray = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
    const oWinningArray = ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']
    /*[0, 1, 2], X*
    [3, 4, 5], X*
    [6, 7, 8], X*
    [0, 3, 6], X*
    [1, 4, 7], X*
    [2, 5, 8], X*
    [0, 4, 8], X*
    [2, 4, 6]       */
    // console.log(xWinningArrays[1])



    const selectChoice = () => {
        document.addEventListener('click', function (event) {
            if (event.target.matches(`#X`)) {
                gridButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        let boxNumber = button.textContent;
                        let parsedBoxNum = parseInt(boxNumber);
                        gameBoardArray.splice(parsedBoxNum, 1, 'X');
                        console.log(gameBoardArray);
                        addToBox();

                    })
                })
            }
            if (event.target.matches(`#O`)) {
                gridButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        let boxNumber = button.textContent;
                        let parsedBoxNum = parseInt(boxNumber);
                        gameBoardArray.splice(parsedBoxNum, 1, 'O');
                        console.log(gameBoardArray);
                        addToBox();
                    })
                })
            }
        }, false);
        
        // const xButton = document.querySelector('#X');
        // console.log(xButton);
        // xButton.addEventListener('click', onceXSelected, {once: true});

        // const oButton = document.querySelector('#O');
        // console.log(oButton);
        // oButton.addEventListener('click', onceOSelected, {once: true});
    }    

    // const onceXSelected = () => {
    //     gridButtons.forEach(button => {
    //         button.addEventListener('click', () => {
    //             let boxNumber = button.textContent;
    //             let parsedBoxNum = parseInt(boxNumber);
    //             gameBoardArray.splice(parsedBoxNum, 1, 'X');
    //             console.log(gameBoardArray);
    //             addToBox();
    //         })
    //     }, {once:true})
    // }

    // const onceOSelected = () => {
    //     gridButtons.forEach(button => {
    //         button.addEventListener('click', () => {
    //             let boxNumber = button.textContent;
    //             let parsedBoxNum = parseInt(boxNumber);
    //             gameBoardArray.splice(parsedBoxNum, 1, 'O');
    //             console.log(gameBoardArray);
    //             addToBox();
    //         })
    //     }, {once:true})
    // }

    const addToBox = () => {
        gameBoardArray.forEach((item, index) => {
            const box = document.querySelector(`#box${index}`);
            const boxNumber =  document.createElement('p');
            box.textContent = item;
            checkWinner();
            // box.append(boxNumber);
        })
    }

    const checkWinner = () => {
        // Potential winners for X
       if (gameBoardArray[0] == xWinningArray[0] && gameBoardArray[1] 
        == xWinningArray[1] && gameBoardArray[2] == xWinningArray[2]) {
           return alert('X wins');
       } else if  (gameBoardArray[3] == xWinningArray[3] && gameBoardArray[4]
        == gameBoardArray[4] && gameBoardArray[5] == xWinningArray[5]) {
            return alert('X wins');
       } else if (gameBoardArray[6] == xWinningArray[6] && gameBoardArray[7] 
        == xWinningArray[7] && gameBoardArray[8] == xWinningArray[8]){
            return alert('X wins');
       } else if (gameBoardArray[0] == xWinningArray[0] && gameBoardArray[3] 
        == xWinningArray[3] && gameBoardArray[6] == xWinningArray[6]) { 
            return alert('X wins');
       } else if (gameBoardArray[1] == xWinningArray[1] && gameBoardArray[4] 
        == xWinningArray[4] && gameBoardArray[7] == xWinningArray[7]) {
            return alert('X wins');
       } else if (gameBoardArray[2] == xWinningArray[2] && gameBoardArray[5]
        == xWinningArray[5] && gameBoardArray[8] == xWinningArray[8]){
            return alert('X wins');
        } else if (gameBoardArray[0] == xWinningArray[0] && gameBoardArray[4] 
        == xWinningArray[4] && gameBoardArray[8] == xWinningArray[8]){
            return alert('X wins');
        } else if (gameBoardArray[2] == xWinningArray[2] && gameBoardArray[4]
        == xWinningArray[4] && gameBoardArray[6] == xWinningArray[6]) {
            return alert('X wins');
        } 
        // Potential winners for O
       if (gameBoardArray[0] == oWinningArray[0] && gameBoardArray[1] 
        == oWinningArray[1] && gameBoardArray[2] == oWinningArray[2]) {
           return alert('O wins');
       } else if  (gameBoardArray[3] == oWinningArray[3] && gameBoardArray[4]
        == gameBoardArray[4] && gameBoardArray[5] == oWinningArray[5]) {
            return alert('O wins');
       } else if (gameBoardArray[6] == oWinningArray[6] && gameBoardArray[7] 
        == oWinningArray[7] && gameBoardArray[8] == oWinningArray[8]){
            return alert('O wins');
       } else if (gameBoardArray[0] == oWinningArray[0] && gameBoardArray[3] 
        == oWinningArray[3] && gameBoardArray[6] == oWinningArray[6]) { 
            return alert('O wins');
       } else if (gameBoardArray[1] == oWinningArray[1] && gameBoardArray[4] 
        == oWinningArray[4] && gameBoardArray[7] == oWinningArray[7]) {
            return alert('O wins');
       } else if (gameBoardArray[2] == oWinningArray[2] && gameBoardArray[5]
        == oWinningArray[5] && gameBoardArray[8] == oWinningArray[8]){
            return alert('O wins');
        } else if (gameBoardArray[0] == oWinningArray[0] && gameBoardArray[4] 
        == oWinningArray[4] && gameBoardArray[8] == oWinningArray[8]){
            return alert('O wins');
        } else if (gameBoardArray[2] == oWinningArray[2] && gameBoardArray[4]
        == oWinningArray[4] && gameBoardArray[6] == oWinningArray[6]) {
            return alert('O wins');
        }  
    }

    return selectChoice(); //addToBox();
})();

