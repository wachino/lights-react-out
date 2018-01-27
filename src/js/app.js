import React from 'react';
import ReactDOM from 'react-dom';
import Square from 'components/Square'
ReactDOM.render(
  <div>
    <Square
      isOn={true}
      onClick={alert}
    />
    <Square
      isOn={false}
      onClick={alert}
    />
  </div>,
  document.getElementById('root')
);
