import React from 'react';
import PropTypes from 'prop-types';
import 'css/Square.css';

export default class Square extends React.Component {
  render () {
    return (
      <div className='cell'>
        <button
          className={'square' + (this.props.isOn ? ' isOn' : '')}
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}

Square.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
