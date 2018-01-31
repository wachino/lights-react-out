
import React from 'react';
import 'css/Square.css';

export default class Square extends React.Component {
  render () {
    return (
      <button className={'square' + (this.props.isOn ? ' isOn' : '')} onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}
