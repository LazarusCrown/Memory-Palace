//was created in one file, needs to be refactored so that 
//state and methods are contained in
//top-level app component
//and related internal/external dependencies imported
//and exported back out
import React from 'react';

class View extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = { x: 0, y: 0 };
    // }
    
    // onMouseMove(e) {
    //   const position = refs.elem.getDOMNode().getBoundingClientRect();
    //   // console.log(position, e.nativeEvent.offsetX, e.screenX);
    //   this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    // }
    
    // onMouseClick(e) {
    //   //create new node at the coordinates
    //   let createNewNode = new Node; 
    // }
    
    render() {
      let x = this.props.locX;
      let y = this.props.locY;
      return <div ref="elem" className="container">
        <div>
          <img onMouseMove={this.props.onMouseMove} onMouseClick={this.props.onMouseClick} width="500" height="325" src="../../utilities/bedroom1.jpeg" />
        </div>
        <h1>Coordinates: { x } { y }</h1>
      </div>;
    }
  }

  export default View;
  