import React from 'react';

import Row from './Row/Row.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      boxVals: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
      ],
      currentPlayer: 'X'
    };

    this.updateBox = (rowIndex, boxIndex) => {
      // clone section of state that needs to be updated
      const clonedVals = this.state.boxVals.map(arr => [...arr]);
      // check to make sure the value hasn't already been updated
      if (clonedVals[rowIndex][boxIndex] === '-') {
        // update cloned state accordingly and pass updated cloned object to state
        if (this.state.currentPlayer === 'X') {
          clonedVals[rowIndex][boxIndex] = 'X';
          this.setState({ boxVals: clonedVals, currentPlayer: 'O' });
        } else {
          clonedVals[rowIndex][boxIndex] = 'O';
          this.setState({ boxVals: clonedVals, currentPlayer: 'X' });
        };
      };
    };

    this.checkWin = (player) => {
      // restructure input values to make them easy to work with
      const boardConfig = this.state.boxVals[0].concat(this.state.boxVals[1], this.state.boxVals[2]);
      // all possible winning combos
      const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      // strip indexes from boardConfig that don't belong to the player
      const winnerConfig = boardConfig.reduce((acc, element, index) => {
        if (element === player) acc = acc.concat(index);
        return acc;
      }, []);
      // compare current players config with winning combos
      if (winnerConfig.length >= 3) {
        // loop through wins array and check each config against player config
        for (let i = 0; i < wins.length; i += 1) {
          // return new array based on if players values are contained in winning combo values, and grab it's length
          let compareLength = winnerConfig.filter(element => {
            return wins[i].indexOf(element) > -1;
          }).length;
          // if the length is 3, they have a winning combo
          if (compareLength === 3) {
            // someone won => reset board
            alert(`Player ${player} wins!`);
            this.setState({
              boxVals: [
                ['-', '-', '-'],
                ['-', '-', '-'],
                ['-', '-', '-']
              ],
              currentPlayer: 'X'
            });
          };
        };
      };
    };
  };

  render() {
    const rows = this.state.boxVals.map((values, i) => {
      return (
        <Row
          values={values}
          index={i}
          key={i}
          updateBox={this.updateBox}
          checkWin={this.checkWin}
          player={this.state.currentPlayer}
        />
      );
    });

    return <div>{rows}</div>
  };

};

export default App;
