// Should look into useMemo or use Callback
import React, { useState, useCallback, useRef } from 'react'
import styled from 'styled-components'
import { preset1, preset2, preset3 } from './Presets'

//Styled Components
const CellButton = styled.button`
    
    width: 2rem;
    height: 2rem;
    border:1px solid grey;
`
const Col = styled.div`
        display:flex;
        flex-flow:column;
        height:100%;
        `
const Row = styled.div`
        display:flex;
        flex-flow:row;
        width:100%;
    `
const ControlPanel = styled.div`
width: 100px;
margin: 10px;
`
const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid",
    borderRadius: "10px",
    width: "96px",
    height: "36px",
    color: "white",
    background: "black",
    margin: "10px"

}
const Board = () => {
    // Establish State
    const [isRunning, setIsRunning] = useState(false)
    const [numRows, setNumRows] = useState(25);
    const [numCols, setNumCols] = useState(25);
    const [boardCells, setBoardCells] = useState(Array(numRows).fill(Array(numCols).fill(false)))
    const [genNum, setGenNum] = useState(0)
    const [speed, setSpeed] = useState(1000)

    //Establish my Refs for my Function outside time (the callback hook)
    const isRunningRef = useRef(isRunning)
    isRunningRef.current = isRunning
    const boardCellsRef = useRef(boardCells)
    boardCellsRef.current = boardCells
    const genNumRef = useRef(genNum)
    genNumRef.current = genNum
    const speedRef = useRef(speed)
    speedRef.current = speed

    //Clears the board
    const clearBoard = () => {
        setBoardCells(Array(numRows).fill(Array(numCols).fill(false)))
        setGenNum(0)
    }

    //Starts the game
    const toggleStart = () => {
        console.log(`Running: ${isRunning}`)
        setIsRunning(!isRunning)
        if (!isRunning) {
            isRunningRef.current = !isRunning
            gameOfLife()
        }

        console.log(`Stopped Running- Running: ${isRunning}`)
    }
    // This processes the board for a generation
    const generation = () => {
        setGenNum(genNumRef.current + 1)
        const newBoard = JSON.parse(JSON.stringify(boardCellsRef.current))
        console.log(boardCellsRef.current)
        for (var row = 0; row < numRows; row++) {
            for (var col = 0; col < numCols; col++) {
                //Count the number of alive Neighbor cells
                // Alive are stored as true
                // Handel the edges of the board 
                let nearLiveCells = 0
                // Look into turning this logic into a function
                // On left side
                if (row !== 0) {
                    if (boardCellsRef.current[row - 1][col]) {
                        nearLiveCells++
                    }
                }
                // on ride side
                if (row !== numRows - 1) {
                    if (boardCellsRef.current[row + 1][col]) {
                        nearLiveCells++
                    }
                }
                //on top
                if (col !== 0) {
                    if (boardCellsRef.current[row][col - 1]) {
                        nearLiveCells++
                    }
                }
                //on bottom
                if (col !== numRows - 1) {
                    if (boardCellsRef.current[row][col + 1]) {
                        nearLiveCells++
                    }
                }
                //For the corners
                if (col !== 0 && row !== 0) {
                    if (boardCellsRef.current[row - 1][col - 1]) {
                        nearLiveCells++
                    }
                }
                if (col !== numCols - 1 && row !== numRows - 1) {
                    if (boardCellsRef.current[row + 1][col + 1]) {
                        nearLiveCells++
                    }
                }
                if (row !== 0 && col !== numRows - 1) {
                    if (boardCellsRef.current[row - 1][col + 1]) {
                        nearLiveCells++
                    }
                }
                if (row !== numRows - 1 && col !== 0) {
                    if (boardCellsRef.current[row + 1][col - 1]) {
                        nearLiveCells++
                    }
                }

                //if the cell is alive
                if (boardCellsRef.current[row][col]) {
                    if (nearLiveCells > 3 || nearLiveCells < 2) {
                        //it dies
                        newBoard[row][col] = false
                    }
                }
                //if it is dead and has 3 neighbors it is alive
                else {
                    if (nearLiveCells === 3) {
                        newBoard[row][col] = true
                    }
                }
            }
        }
        setBoardCells(newBoard)

    }
    const gameOfLife = useCallback(() => {
        //If it isn't running stop it

        if (!isRunningRef.current) {
            return
        }
        generation()
        setTimeout(gameOfLife, speedRef.current)
    }, [])



    // There may be a problem where the board is on its side but it won't mess with functionality 
    return (
        <>
            {/* Control Panel */}
            <ControlPanel>
                <h2>{`Gen: ${genNum}`}</h2>

                <button onClick={toggleStart
                } style={buttonStyle}>Start / Stop</button>
                <button onClick={() => { setBoardCells(preset1) }} style={buttonStyle}>Preset 1</button>
                <button onClick={() => { setBoardCells(preset2) }} style={buttonStyle}>Preset 2</button>
                <button onClick={() => { setBoardCells(preset3) }} style={buttonStyle}>Preset 3</button>
                <button onClick={clearBoard} style={buttonStyle}>Clear Board</button>
                <button onClick={() => { setSpeed(10) }} style={buttonStyle}>Fast Speed</button>
                <button onClick={() => { setSpeed(100) }} style={buttonStyle}>Normal Speed</button>
                <button onClick={() => { setSpeed(1000) }} style={buttonStyle}>Slow Speed</button>
                <button onClick={generation} style={buttonStyle}>One Generation</button>
            </ControlPanel>

            {boardCells.map((row, rowIndex) =>
                <Col key={`Col ${rowIndex}`}>
                    {row.map((col, colIndex) =>
                        <Row key={`Row ${colIndex}`}>
                            <CellButton
                                style={{
                                    background: boardCells[rowIndex][colIndex] ? "black" : "white"
                                }}
                                onClick={
                                    // toggleCells(rowIndex, colIndex)
                                    () => {
                                        if (!isRunning) {
                                            //Make a new Board so I don't mutate the board
                                            const newBoard = JSON.parse(JSON.stringify(boardCells))
                                            newBoard[rowIndex][colIndex] = newBoard[rowIndex][colIndex] ? false : true
                                            setBoardCells(newBoard)
                                        }
                                    }
                                } />
                        </Row>)
                    }</Col>)}
        </>
    )
}

export default Board