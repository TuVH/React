import React, { useReducer, useState } from "react";
import { Winner } from "../../Helper";
import Board from "./Board";

const initialState = {
  board: Array(9).fill(null),
  isNext: true,
};
const gameReducer = (state, action) => {
  switch (action.type.toLowerCase()) {
    case "click": {
      const { board, isNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) {
        console.log(state);
        return state;
      }
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = isNext ? "X" : "0";
      nextState.isNext = !isNext;
      console.log("nextState", nextState);
      return nextState;
    }
    case "reset": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null)
      nextState.isNext = true;
      console.log("nextState", nextState);
      return nextState;
    }
    default:
      console.log("error")
      break;
  }
};

const Game = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const isWinner = Winner(state.board);

  const handleFunction = (index) => {
    //const boardCopy = [...state.board];
    dispatch({
      type: "Click",
      payload: {
        index: index,
        winner: isWinner,
      },
    });
    //boardCopy[index] = isNext ? "X" : "0";
    //setBoard(boardCopy);
    //setIsNext(!isNext);
  };
  const resetGame = () => {
    dispatch({
      type: "Reset",
      payload: {
        winner: isWinner,
      },
    });
    //setBoard(Array(9).fill(null));
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleFunction}></Board>
      <button onClick={resetGame}>Reset Game</button>
      <hr />
      {isWinner ? `winner is ${isWinner}` : ""}
    </div>
  );
};

export default Game;
