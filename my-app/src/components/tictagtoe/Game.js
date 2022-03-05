import React, { useState } from "react";
import { Winner } from "../../Helper";
import Board from "./Board";

const Game = () => {
  //const xxx = ["x", "x", "x", null, null, null, null, null, null];
  const [board, setBoard] = useState(Array(9).fill(null)); // array 9 phan tử null
  const [isNext,setIsNext] = useState(true); // true false (bool)
  const isWinner = Winner(board); //param = array
  const handleFunction = (index) => {
    const boardCopy = [...board];
    if (isWinner || boardCopy[index]) {
      return
    }
    boardCopy[index] = isNext ? 'X' : '0';
    setBoard(boardCopy)
    setIsNext(!isNext)
  };
  const resetGame = () => {
    setBoard(Array(9).fill(null))
  }
  return (
    <div>
      <Board cells={board} onClick={handleFunction}></Board>
      <button onClick={resetGame}>Reset Game</button>
      <hr />
      {isWinner ? `winner is ${isWinner}` :""}
    </div>
  );
};

export default Game;
