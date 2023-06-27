function drawPlayBoard() {
    let boardDiv = document.getElementById('board');
    boardDiv.innerHTML = '';
    board.forEach((value, index) => {
        boardDiv.innerHTML += `<div onclick="makeMove(${index})">${value ? value : ''}</div>`;
    });
}

function makeMove(index) {
    if (!board[index]) {
        board[index] = player;
        if (checkWinner()) {
            alert(`Выиграл игрок ${player}`);
            resetBoard();
        } else {
            if (board.every(cell => cell)) {
                alert('Ничья!');
                resetBoard();
            } else {
                player = player === 'X' ? 'O' : 'X';
            }
        }
        drawPlayBoard();
    }
}

function checkWinner() {
    let winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winningCombinations.some(combination =>
        combination.every(index => board[index] === player)
    );
}

function resetBoard() {
    board = Array(9).fill(null);
    player = 'X';
    drawPlayBoard();
}

document.getElementById('reset').addEventListener('click', resetBoard);
resetBoard();