import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import SearchBar from '../../components/InputBar/SearchBar';
import Dropdown from '../../components/InputBar/Dropdown';
import View from '../../components/View';
import ImageIcon from '../../components/ImageIcon';

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
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleConfirmDropdownWords = this.handleConfirmDropdownWords.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseClick = this.onMouseClick.bind(this);
    // this.handleSearchTermSubmit = this.handleSearchTermSubmit.bind(this);
  }

<<<<<<< HEAD
=======
  // const extract = (str, pattern) => {
  //   (str.match(pattern) || []).pop() || '';
  // }

  // const limitLength = (str, length) => {
  //   str.substring(0, length);
  // }

  // const extractDate = (str) => {
  //   extract(str, "[0-9]+");
  // }

>>>>>>> 2c171ddff410955a924f606e7413c7c59d74ee10
  onMouseMove(e) {
    console.log('hover function')
    console.log('x: ', e.screenX)
    console.log('y: ', e.screenY)
    this.setState({
      locXHover: e.screenX,
      locYHover: e.screenY
    })
    // const position = this.refs.elem.getDOMNode().getBoundingClientRect();
    // console.log(position, e.nativeEvent.offsetX, e.screenX);
    // this.setState({ locX: e.nativeEvent.offsetX, locY: e.nativeEvent.offsetY });
  }

  onMouseClick(e) {
    //create new node at the coordinates
    // let createNewNode = new Node; 
    console.log(e)
    console.log('x: ', e.screenX)
    console.log('y: ', e.screenY) 
    this.setState({
      locX: e.screenX,
      locY: e.screenY
    })
    // let nodePosition = this.refs.elem.getDOMNode().getBoundingClientRect();
  }

  handleWordSelect(e){
    e.preventDefault();
    this.setState({wordVal: e.target.value});
  }

  handleSearchTermChange(e){    
    const target = e.target;
    // console.log('target: ', target)
    const value = target.value;
    const name = target.name;
    // console.log('value: ', value)
    // console.log(parseDate(value));
    // date: limitLength(extractDate(e.target.value), 8);
    this.setState({
      date: value,
    })
  }

  handleSearchTermSubmit(e){
    console.log("entering handleSearchTermSubmit");

    //date chunker
    function parseDate (birthday) {
      let parsed = birthday.split("/");
      let tempArr = [];
      tempArr[0] = parsed[2].slice(0,2);
      tempArr[1] = parsed[2].slice(2,4);
      parsed.splice(2,1,tempArr[0],tempArr[1]);
      return parsed;
    }

    let parsedDate = parseDate(this.state.date);
    // console.log("the date: ", this.state.date);
    // console.log("the month: ", parsedDate[0]);
    // console.log("the day: ", parsedDate[1]);
    // console.log("the baseYear: ", parsedDate[2]);
    // console.log("the endYear: ", parsedDate[3]);
    
    e.preventDefault();

    this.setState({
      month: parsedDate[0],
      day: parsedDate[1],
      baseYear: parsedDate[2],
      endYear: parsedDate[3],
    })
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
          <h1 className="App-title">Welcome to Your Memory Palace</h1>
        </header>

        <View 
          locX={this.state.locX}
          locY={this.state.locY}
          locXHover={this.state.locXHover}
          locYHover={this.state.locYHover}
          onMouseMove={this.onMouseMove}
          onMouseClick={this.onMouseClick}/>
      
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

        <ImageIcon src="https://i.giphy.com/zd2dSk44nKlxK.gif"/>

      </div>
    );
  }
}

export default App;
