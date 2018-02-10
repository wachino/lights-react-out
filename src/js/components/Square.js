import React from 'react';
import PropTypes from 'prop-types';
import 'css/Square.css';

/**
 * @constructor
 * @name Square
 * @description Square react component
 */
export default class Square extends React.Component {
  /**
   * @memberof! Square#
   * @description Render a Square
   */
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

  /**
   * @memberof! Square#
   * @description TODO
   * @param {object} nextProps TODO
   * @param {object} [nextState] TODO (Example optional)
   * @todo Example (only for testing)
   */
  shouldComponentUpdate (nextProps, nextState) {
    return this.props.isOn !== nextProps.isOn;
  }
}

/**
 * @type {object}
 * @property {PropTypes.bool} isOn TODO
 * @property {PropTypes.func} onClick TODO
 */
Square.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
