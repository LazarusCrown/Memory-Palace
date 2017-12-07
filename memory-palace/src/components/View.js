//was created in one file, needs to be refactored so that 
//state and methods are contained in
//top-level app component
//and related internal/external dependencies imported
//and exported back out
import React from 'react';
import Nodeicon from './Nodeicon';

class View extends React.Component {

    render() {
      // let x = this.props.locX;
      // let y = this.props.locY;
      let x = 50;
      let y = 100;
      let xSpot = String(x)+'px';
      let ySpot = String(y)+'px';
      let xHover = this.props.locXHover;
      let yHover = this.props.locYHover;
      // var dotStyle= {
      //   position: 'absolute',      
      //   left: xSpot,
      //   top: ySpot,
      //   zIndex: '3',
      //   width: '10px'
      // }

      let nodes = this.props.nodes;
      console.log('nodes yoo: ', this.props.nodes)
      let count = 0;
      return (
        <div ref="elem" className="container">
          <div>
            <img onClick={this.props.onMouseClick} width="80%" src="../../utilities/bedroom1.jpeg" />
          {/* need to render each dot and do onMouseOver for each */}
            {nodes.map( (node, idx) => {
              count++;
              return (
                <Nodeicon key={idx} id={idx} node={this.props.nodes} count={this.count} onMouseMove={this.props.onMouseMove} />
              )
            })}
            {/* <a className="dots-anchor" href="#">
              <img className="dots" style={dotStyle} onMouseOver={this.props.onMouseMove} src="../../utilities/reddot.png"/>
            </a> */}

          </div>
          <div><h1>Coordinates: { x } { y }</h1></div>
          <div><h2>Hovers: { xHover } { yHover }</h2></div>
        </div>
      )
    }
  }

  export default View;
  