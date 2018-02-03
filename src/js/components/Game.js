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
      <Board
        lightStates={this.state.lightStates}
        onClick={this.handleClick}
      />
    );
  }

  handleClick (row, col) {
    const lightStates = this.state.lightStates.slice();
    lightStates[row][col] = !lightStates[row][col];
    this.setState({lightStates});
  }
}

Game.propTypes = {
  boardSize: PropTypes.number.isRequired
};
