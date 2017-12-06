//was created in one file, needs to be refactored so that 
//state and methods are contained in
//top-level app component
//and related internal/external dependencies imported
//and exported back out
import React from 'react';

class View extends React.Component {

    render() {
      let x = this.props.locX;
      let y = this.props.locY;
      let xHover = this.props.locXHover;
      let yHover = this.props.locYHover;
      return (
        <div ref="elem" className="container" onMouseOver={this.props.onMouseMove}>
          <div>
            <img width="80%" src="../../utilities/bedroom1.jpeg" />
          {/* need to render each dot and do onMouseOver for each */}
          </div>
          <div><h1>Coordinates: { x } { y }</h1></div>
          <div><h2>Hovers: { xHover } { yHover }</h2></div>
        </div>
      )
    }
  }

  export default View;
  