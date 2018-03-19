import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Square.css';

export default class Square extends React.Component {
  render () {
    return (
      <div className='cell'>
        <div
          className={'square' + (this.props.isOn ? ' isOn' : '')}
          onClick={this.props.onClick}>
          <div className='cellOverlay'>
            <div className='cdot'/>
          </div>
        </div>
      </div>
    );
  }

  shouldComponentUpdate (nextProps, nextState) {
    return this.props.isOn !== nextProps.isOn;
  }
}

Square.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
