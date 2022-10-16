import React, { useState } from 'react';
import Square from './Square';

function Board () {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [counter, setCounter] = useState(0);

  const handleClick = (i) => {

    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = isX ? 'X' : 'O';
    setSquares(squares);
    setIsX(!isX);
    setCounter(counter + 1);
  }

  const winner = calculateWinner(squares);
  let status;

  if(winner){
    status = `Winner: ${winner}`;
  } else {
    if(counter === 9){
      status = 'Tie';
    }
    else{
      status = 'Next player: ' + (isX ? 'X' : 'O');
      
    }
    
  }

  const handleRestart = () => {
    setIsX(true);
    setSquares(Array(9).fill(null));
    setCounter(0);
  }

  return(
      <div className="board">
        <div className="board-row">
          <Square value={squares[0]} onClick={() => handleClick(0)}/>
          <Square value={squares[1]} onClick={() => handleClick(1)}/>
          <Square value={squares[2]} onClick={() => handleClick(2)}/>
        </div>
        <div className="board-row">
          <Square value={squares[3]} onClick={() => handleClick(3)}/>
          <Square value={squares[4]} onClick={() => handleClick(4)}/>
          <Square value={squares[5]} onClick={() => handleClick(5)}/>
        </div>
        <div className="board-row">
          <Square value={squares[6]} onClick={() => handleClick(6)}/>
          <Square value={squares[7]} onClick={() => handleClick(7)}/>
          <Square value={squares[8]} onClick={() => handleClick(8)}/>
        </div>
        <div className="status">{status}</div>
        <button className="reset" onClick={handleRestart}>Reset</button>
    </div>
    )
  
}

function calculateWinner(squares) {
  const winnerPossibility = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for(let i = 0; i < winnerPossibility.length; i++){
    const [a, b, c] = winnerPossibility[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  
  return null;
}


export default Board;