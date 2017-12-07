import React from 'react';
import ReactDOM from 'react-dom';

import Styles from './Box.css';


class Box extends React.Component {

  shouldComponentUpdate(newProps) {
    return this.props.value !== newProps.value;
  };

  componentDidUpdate(prevProps) {
    setTimeout(() => this.props.checkWin(prevProps.player), 100);
  };

  render() {
    return (
      <div className="box" onClick={() => { this.props.updateBox(this.props.row, this.props.index) }}>
        {this.props.value}
      </div>
    );
  };
};


export default Box;
