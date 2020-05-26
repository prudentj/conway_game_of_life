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
    const [rowNum, setRowNum] = useState(25);
    const [colNum, setColNum] = useState(25);
    const [boardCells, setBoardCells] = useState([]);

    useEffect(() => {
        setBoardCells(() => {
            const board = []
            //Not very efficient I may need to come back and speed it up
            for (var r = 0; r < rowNum; r++) {
                board.push(() => {
                    const rowCells = []
                    for (var c = 0; c < rowNum; c++) {
                        rowCells.push(<Cell row={r} col={c} />)

                    }
                    return rowCells
                }
                )
            }
            return board
        })
    }, [])
    const Board = styled.div`
    display:flex;
    border:black;
`
    const Row = styled.div`
    display:flex;
`

    return (
        <Board>
            {/* {boardCells.map(()=>)} */}
            <Cell />
        </Board>
    );
}

export default Board;