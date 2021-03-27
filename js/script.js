/* You’re going to store the gameboard as an array inside of a 
Gameboard object, so start there! 
Rule of thumb: if you only ever need ONE of 
something (gameBoard, displayController),
use a module. If you need multiples of something (players!), 
create them with factories.
*/

const createPlayers = (name) => {
    return {
        name,
    }
}


/* create a module for our gameBoard
TO DO: 
- Store gameboard as array inside of Gameboard object*/

const gameBoard = (() => {
    const gameBoardArray = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];

    const addToBox = () => {
        gameBoardArray.forEach((item, index) => {
            const box = document.querySelector(`#box${index}`);
            box.textContent = item;
        })
    }
    return addToBox();
})();

// const displayController = (() => {

//     // append values of variables to boxes in html
//     const addToBox = () => {
//         gameBoard.gameBoardArray.forEach((item) => {
//             console.log(item);
//         })

//     };
//     return {

//     };
// })();