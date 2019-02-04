import React, { Component } from 'react';
import styled from '@emotion/styled';
import Toolbar from './components/Toolbar';
import Board from './components/Board';

const AppContainer = styled('div')`
  background: rgba(0, 0, 0, 0.05);
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const BoardContainer = styled('div')`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Toolbar />
        <BoardContainer>
          <Board />
        </BoardContainer>
      </AppContainer>
    );
  }
}

export default App;
