const cells = document.querySelectorAll('.cell')

// let currentPlayer;
// if( confirm('Do you want to choose X???')){ currentPlayer = 'X'} else {
//     currentPlayer = 'O'
// }
let currentPlayer = 'O'

cells.forEach(cell => {
    cell.innerText = ''
    cell.addEventListener('click', () => {
        // Only allow marking empty cells
        if (cell.innerText !== '') return;

        cell.innerText = currentPlayer
        currentPlayer = currentPlayer === 'X' ?  'O' :  'X';
        console.log(cell.innerText);

    })
})

const winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

winner.some(()=>{})

const restartBtn = document.querySelector('.restartBtn')
const gameRestart = document.querySelector('.gameRestart')
// gameRestart.classList.remove('restartDisplayt')
restartBtn.addEventListener('click', ()=>{
    gameRestart.classList.add('restartDisplay')
    location.reload()
})
// const restart = document.createElement('div')
// restart.classList.add('gameRestart')

