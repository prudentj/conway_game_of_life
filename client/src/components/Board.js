//This Board is made up of individual cells that are either alive or dead.

//Each 

import React, { useState, useContext, useEffect } from 'react'
import AppContext from '../contexts/AppContext'
import styled from 'styled-components'
import Cell from './Cell'

//This is the individual cell that makes up the board


const Board = props => {
    // This will handel the address of each row and collumn
    // const { appState, dispatch } = useContext(AppContext);
    // const { row, getRow } = useState('');
    // const { col, getCol } = useState('');
    const [numRows, setNumRows] = useState(25);
    const [numCols, setNumCols] = useState(25);
    const [boardCells, setBoardCells] = useState([]);
    const { appState, dispatch } = useContext(AppContext);

    useEffect(() => {
        setBoardCells(() => {
            const board = new Array(numRows)
            for (let i = 0; i < board.length; i++) {
                board[i] = new Array(numCols)
                console.log(board)
            }
            for (var r = 0; r < numRows; r++) {
                for (var c = 0; c < numCols; c++) {
                    board[r][c] = <Cell row={r} col={c} />
                }
            }
            return board
        })
    }, [])
    const Board = styled.div`
            display:flex;
            border:black;
        `
    const Col = styled.div`
        display:flex;
        flex-flow:row nowrap;
        width:100%;
        `
    const Row = styled.div`
        display:flex;
        flex-flow:column nowrap;
        height:100%;
    `
    // There may be a problem where the board is on its side but it won't mess with functionality 
    return (
        <Board>
            {boardCells.map(col => <Row>{col.map(cell => <Col>{cell}</Col>)}</Row>)}
        </Board>
    );
}

export default Board;