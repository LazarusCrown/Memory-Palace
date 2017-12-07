import React from 'react';

class Nodeicon extends React.Component {
    
    render() {
      let nodeId = this.props.id
      console.log('nodeID: ', nodeId)
      let id = this.props.node[nodeId].id;
      let xSpot = this.props.node[nodeId].locX;
      let ySpot = this.props.node[nodeId].locY;
      
      // this.props.node
      var dotStyle= {
        position: 'absolute',      
        left: xSpot,
        top: ySpot,
        zIndex: '3',
        width: '10px'
      }

      return (
        <a className="dots-anchor" href="#">
          <img className="dots" style={dotStyle} onMouseOver={this.props.onMouseMove} src="../../utilities/reddot.png"/>
        </a>
      )  
    }
  }

  export default Nodeicon;