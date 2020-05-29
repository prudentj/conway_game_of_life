import React from 'react';
import Board from './components/Board'
import styled from 'styled-components'
import './App.css';

const BoardWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
  display: flex;
  flex: column nowrap;
  justify-content:center;
  align-content:center;
  `
const RuleContainer = styled.div`
  justify-content:center;
  align-content:center;
  width:450px;
  padding:10px;
`


function App() {

  return (
    <div className="App">
      <BoardWrapper>
        <Board />
        <RuleContainer>
          <h3>Game of Life Rules:</h3>
          <ul>
            <li>Any live cell with fewer than two live neighbors dies, as if by underpopulation.</li>
            <li>Any live cell with two or three live neighbors lives on to the next generation.</li>
            <li>Any live cell with more than three live neighbors dies, as if by overpopulation.</li>
            <li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
          </ul>
          <p>Click the Grid to Add squares to the simulation and have fun!</p>

        </RuleContainer>
      </BoardWrapper>

    </div>
  );
}

export default App;
