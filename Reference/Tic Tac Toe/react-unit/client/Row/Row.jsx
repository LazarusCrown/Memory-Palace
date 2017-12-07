import React from 'react';
import ReactDOM from 'react-dom';

import Box from './../Box/Box.jsx';
import Styles from './Row.css';

const Row = (props) => {
  const boxes = props.values.map((value, i) => {
    return (
      <Box
        value={value}
        index={i}
        row={props.index}
        key={i}
        updateBox={props.updateBox}
        checkWin={props.checkWin}
        player={props.player}
      />
    )
  });

  return <div className="row">{boxes}</div>
};

export default Row;
