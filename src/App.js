import React from 'react';
import Board from './components/Board'
import styled from 'styled-components'

import './App.css';

const BoardWrapper = styled.div`
  margin:2px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content:center;
  align-content:center;
  `
function App() {

  return (
    <div className="App">
      <BoardWrapper>
        <Board />
      </BoardWrapper>
    </div>
  );
}

export default App;
