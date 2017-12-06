import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      xCoordinate: 0,
      yCoordinate: 0,
      numVal: 0,
      wordVal: 0,
      imgUrl: '',
    }
  }

  this.handleWordSelect = this.handleSelect.bind(this);

  handleWordSelect(e){
    e.preventDefault();
    this.setState({wordVal: e.target.value});
  }

  handleInputSearch(e){
    this.props.onKeywordChange(this.searchKeyword.value)
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// ReactDOM.render(
//   <Greeting isLoggedIn={false} />,
//   document.getElementById('root')
// );

export default App;
