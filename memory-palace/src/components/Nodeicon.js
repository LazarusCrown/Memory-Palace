//was created in one file, needs to be refactored so that 
//state and methods are contained in
//top-level app component
//and related internal/external dependencies imported
//and exported back out

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { x: 0, y: 0 };
    }
    
    onMouseMove(e) {
      const position = this.refs.elem.getDOMNode().getBoundingClientRect();
      // console.log(position, e.nativeEvent.offsetX, e.screenX);
      this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    }
    
    // onMouseClick(e) {
    //   //create new node at the coordinates
    //   let createNewNode = new Node; 
    // }
    
    render() {
      const { x, y } = this.state;
      return <div ref="elem" className="container">
        <div>
          <img onMouseMove={this.onMouseMove.bind(this)} onMouseClick={this.onMouseClick} width="500" height="325" src="https://upload.wikimedia.org/wikipedia/commons/9/93/Horham_Hall_blueprint.png" />
        </div>
        <h1>Coordinates: { x } { y }</h1>
      </div>;
    }
  }
  