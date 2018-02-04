import React from 'react';
import PropTypes from 'prop-types';
import 'css/Game.css';
import Board from 'components/Board';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      lightStates: Array(props.boardSize).fill().map(
        () => Array(props.boardSize).fill(false)
      )
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render () {
    return (
      <div className='game'>
        <Board
          lightStates={this.state.lightStates}
          onClick={this.handleClick}
        />
      </div>
    );
  }

  handleClick (row, col) {
    const lightStates = this.state.lightStates.slice();
    if (this.isWinner()) {
      return;
    }

    lightStates[row][col] = !lightStates[row][col];
    col > 0 && (lightStates[row][col - 1] = !lightStates[row][col - 1]);
    row > 0 && (lightStates[row - 1][col] = !lightStates[row - 1][col]);
    row < this.props.boardSize - 1 &&
      (lightStates[row + 1][col] = !lightStates[row + 1][col]);
    col < this.props.boardSize - 1 &&
      (lightStates[row][col + 1] = !lightStates[row][col + 1]);

    this.setState({lightStates});
    if (this.isWinner()) {
      alert('Winneeer!!');
    }
  }

  isWinner () {
    return this.state.lightStates.every(
      row => row.every(cell => cell)
    );
  }
}

Game.propTypes = {
  boardSize: PropTypes.number.isRequired
};
