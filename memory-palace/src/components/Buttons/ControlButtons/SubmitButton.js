import React from 'react';

class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        clicked: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //initiate db capture of input field content


    this.setState(prevState => ({
      clicked: this.clicked +1
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {SubmitButton}
      </button>
    );
  }
}

export default class SubmitButton extends React.Component