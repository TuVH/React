import React from 'react';
import Cell from './Cell';
import './GameStyle.css';
const Board = (props) => {
    return (
        <div className='game-board'>
        {props.cells.map((value,index) => 
            <Cell key={index} value={value} onClick={() => props.onClick(index)}></Cell>
        )}
        </div>
    );
};

export default Board;