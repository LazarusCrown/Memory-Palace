import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import SearchBar from '../../components/InputBar/SearchBar';
import View from '../../components/View';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      //store each node in here as an object with these attributes
      nodes: [],
      id: 0,
      nodeNum: 0,
      dateDescription: '',
      date: '',
      locX: 0,
      locY: 0,
      locXHover: 0,
      locYHover: 0,
      monthWord: '',
      dayWord: '',
      baseYearWord: '',
      endYearWord: '',
      monthImgArray: [],
      dayImgArray: [],
      baseYearImgArray: [],
      endYearImgArray: [],
    }

    this.handleWordSelect = this.handleWordSelect.bind(this);
    // this.handleConfirmInput = this.handleConfirmInput.bind(this);
    this.handleConfirmDropdownWords = this.handleConfirmDropdownWords.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseClick = this.onMouseClick.bind(this);
    // this.loadNodes = this.loadNodes.bind(this);
  }
  
  // componentDidMount() {
  //   this.loadNodes();
  // }

  onMouseMove(e) {
    console.log(e.screenX, e.screenY)
    this.setState({
      locXHover: e.screenX,
      locYHover: e.screenY
    })
  }

  onMouseClick(e) {
    let nodeCopy = this.state.nodes.slice()

    //create new node at the coordinates
    // let createNewNode = new Node; 
    let len = nodeCopy.length;
    let counter = this.state.id + 1;
    this.state.locX = e.screenX;
    this.state.locY = e.screenY;
    const nodeAdd = {
      id: counter,
      locX: e.screenX,
      locY: e.screenY
    }
    nodeCopy.push(nodeAdd);
    console.log('hereeeeeeeeeeeeeeeee')
    // console.log('here state.count', this.state.id)
    //make push to database  - this should probably go on the SUBMIT BUTTON SECTION, so all data loaded
    fetch('http://localhost:8080/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nodeAdd)
    }).then((res) => {
      console.log("this is res", res)
    }).catch((err) => {
      console.log(err)
    });


    //update state
    this.setState({
      nodes: nodeCopy,
      id: counter
    })
  }

  handleWordSelect(e){
    e.preventDefault();
    this.setState({wordVal: e.target.value});
  }

  handleSearchTermSubmit(e){
    e.preventDefault();
    this.props.onSearchTermSubmit();
  }

  handleConfirmDropdownWords(e){
    let indexIncrement = this.state.nodeNum + 1;
    const node = {
      day:0,
      month:0,
      baseYear:0,
      endYear:0,
    }

    //update data
    this.state.nodes.push(node);

    //push nodes to database
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(this.state.node[this.state.nodeNum])
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })

    this.setState({
      nodes: this.state.nodes,
      nodeNum: indexIncrement
    })
  }

  // loadNodes(){
  //   fetch('http://localhost:8080/api').then(function(res){
  //     return res.json();
  //   }).then((myBlob) => {
  //     console.log('blob: ', myBlob)
  //     if(myBlob.loadedNodes.length){
  //       // console.log(myBlob.loadedTodos);
  //       let dbNodos = [];
  //       myBlob.loadedNodes.map( (node) => dbNodos.push(node))
  //       // console.log('dbTodos: ', dbTodos);
  //       this.setState({
  //         nodes: myBlob.loadedNodes,
  //         id: myBlob.loadedNodes.length
  //       })
  //     }else{
  //       // console.log('database empty, set data to null')
  //       this.setState({nodes: null})
  //     }
  //   })
  // }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <View
          nodes = {this.state.nodes}
          locX={this.state.locX}
          locY={this.state.locY}
          locXHover={this.state.locXHover}
          locYHover={this.state.locYHover}
          onMouseMove={this.onMouseMove}
          onMouseClick={this.onMouseClick}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchBar
          searchTerm={this.state.searchTerm}
          onSearchTermSubmit={this.handleSearchTermSubmit}/>
      </div>
    );
  }
}

export default App;
