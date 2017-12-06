import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import SearchBar from '../../components/InputBar/SearchBar';
import Dropdown from '../../components/InputBar/Dropdown';
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
      month: '',
      day: '',
      baseYear: '',
      endYear: '',
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
    this.handleSearchTermSubmit = this.handleSearchTermSubmit.bind(this);
  }

  // const extract = (str, pattern) => {
  //   (str.match(pattern) || []).pop() || '';
  // }

  // const limitLength = (str, length) => {
  //   str.substring(0, length);
  // }

  // const extractDate = (str) => {
  //   extract(str, "[0-9]+");
  // }

  onMouseMove(e) {
    const position = this.refs.elem.getDOMNode().getBoundingClientRect();
    console.log(position, e.nativeEvent.offsetX, e.screenX);
    this.setState({ locX: e.nativeEvent.offsetX, locY: e.nativeEvent.offsetY });
  }
  onMouseClick(e) {
    //create new node at the coordinates
    // let createNewNode = new Node; 
    let nodePosition = this.refs.elem.getDOMNode().getBoundingClientRect();
  }

  handleWordSelect(e){
    e.preventDefault();
    this.setState({wordVal: e.target.value});
  }

  handleSearchTermChange(e){
    const target = e.target;
    console.log('target: ', target)
    const value = target.value;
    const name = target.name;
    console.log('value: ', value)
    this.setState({
      // date: limitLength(extractDate(e.target.value), 8);
      date: value
    })
  }

  handleSearchTermSubmit(e){
    // console.log("entering handleSearchTermSubmit");
    console.log(this.state.date);
    e.preventDefault();
    // this.setState({
    //   month: this.state.date.slice(0,2)
    //   day: this.state.date.slice(2,4)
    //   baseYear: this.state.date.slice(4,6)
    //   endYear: this.state.date.slice(6,8)
    // })
  }

  // handleSearchTermChunking(e){
    
  // }

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
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <View 
          locX={this.state.locX}
          locY={this.state.locY}
          onMouseMove={this.onMouseMove}
          onMouseClick={this.onMouseClick}
          />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchBar
          searchTerm={this.state.searchTerm}
          handleSearchTermSubmit={this.handleSearchTermSubmit}
          handleSearchTermChange={this.handleSearchTermChange}
          />

        <Dropdown 
          monthWord={this.state.monthWord} 
          handleInputChange={this.handleInputChange} 
          handleSelectChange={this.handleSelectChange}
          handleConfirmDropdownWords={this.handleConfirmDropdownWords}/>
        
        <Dropdown 
          monthWord={this.state.monthWord} 
          handleInputChange={this.handleInputChange} 
          handleSelectChange={this.handleSelectChange}
          handleConfirmDropdownWords={this.handleConfirmDropdownWords}/>

        <Dropdown 
          monthWord={this.state.monthWord} 
          handleInputChange={this.handleInputChange} 
          handleSelectChange={this.handleSelectChange}
          handleConfirmDropdownWords={this.handleConfirmDropdownWords}/>

        <Dropdown 
          monthWord={this.state.monthWord} 
          handleInputChange={this.handleInputChange} 
          handleSelectChange={this.handleSelectChange}
          handleConfirmDropdownWords={this.handleConfirmDropdownWords}/>

          

      </div>
    );
  }
}

export default App;
