import React from 'react';
import PropTypes from 'prop-types';
import 'css/Board.css';
import Square from 'components/Square';

export default class Board extends React.Component {
  render () {
    return (
      <div className='board'>
        {
          this.props.lightStates.map(
            (rowCells, rowIndex) => (
              <div key={rowIndex} className='row'>
                {
                  rowCells.map(
                    (cellState, colIndex) => (
                      <Square
                        key={colIndex}
                        isOn={cellState}
                        onClick={() => this.props.onClick(rowIndex, colIndex)}
                      />
                    )
                  )
                }
              </div>
            )
          )
        }
      </div>
    );
  }
}

Board.propTypes = {
  lightStates: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};
