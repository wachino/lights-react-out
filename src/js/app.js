import React from 'react';
import ReactDOM from 'react-dom';
import Game from 'components/Game';
ReactDOM.render(
  <Game
    boardSize={5}
  />,
  document.getElementById('root')
);
