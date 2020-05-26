import React from 'react';
import Board from './components/Board'
import styled from 'styled-components'

import './App.css';
function App() {
  const BoardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content:center;
  align-content:center;
  `
  return (
    <div className="App">
      <BoardWrapper>
        <Board />
      </BoardWrapper>
    </div>
  );
}

export default App;
