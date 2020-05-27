import React, { useReducer } from 'react';
import Board from './components/Board'
import styled from 'styled-components'
import AppContext from './contexts/AppContext';
import { reducer, initialState } from './reducers/index'

import './App.css';
function App() {
  const BoardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content:center;
  align-content:center;
  `
  const startSim = () => {
    console.log("starting sim")
    dispatch({ type: 'TOGGLESTART' })

  }
  const [appState, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      <div className="App">
        <BoardWrapper>
          <Board />
        </BoardWrapper>
        <button onClick={startSim}>Start/Stop Sim</button>
      </div>
    </AppContext.Provider>
  );
}

export default App;
