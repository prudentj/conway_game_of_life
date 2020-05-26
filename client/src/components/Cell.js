import React, { useState, useContext, useEffect } from 'react'
import AppContext from '../contexts/AppContext'
import styled from 'styled-components'

//This is the individual cell that makes up the board


const Cell = props => {
    // This will handel the address of each row and collumn
    // const { appState, dispatch } = useContext(AppContext);

    const [row, getRow] = useState(props.row);
    const [col, getCol] = useState(props.col);
    const [isAlive, setIsAlive] = useState(false);
    const CellButton = styled.button`
    width: 4rem;
    height: 4rem;
    border:1px solid grey;
    background:${ isAlive ? "black" : "white"};
`
    const Toggle = el => {
        setIsAlive(!isAlive)
    }
    return (
        <CellButton onClick={Toggle}></CellButton>
    );
}

export default Cell;