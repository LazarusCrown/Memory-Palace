
// import React, { Component } from 'react';
// import GIFIcon from '../../components/GIFIcon';

// let GIFArray = [];

// const Row = (props) => {
//   const boxes = props.values.map((value, i) => {
//     return (
//       <Box
//         value={value}
//         index={i}
//         row={props.index}
//         key={i}
//         updateBox={props.updateBox}
//         checkWin={props.checkWin}
//         player={props.player}
//       />
//     )
//   });

//   return <div className="row">{boxes}</div>
// };


// this.updateBox = (rowIndex, boxIndex) => {
//       // clone section of state that needs to be updated
//       const clonedVals = this.state.boxVals.map(arr => [...arr]);
//       // check to make sure the value hasn't already been updated
//       if (clonedVals[rowIndex][boxIndex] === '-') {
//         // update cloned state accordingly and pass updated cloned object to state
//         if (this.state.currentPlayer === 'X') {
//           clonedVals[rowIndex][boxIndex] = 'X';
//           this.setState({ boxVals: clonedVals, currentPlayer: 'O' });
//         } else {
//           clonedVals[rowIndex][boxIndex] = 'O';
//           this.setState({ boxVals: clonedVals, currentPlayer: 'X' });
//         };
//       };
//     };

//{/* matchingFact={String}
            // orderPlacement={Number} */}





// export default GIFOptions;