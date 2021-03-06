class ResetButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //clear all content 


    this.setState(prevState => ({
      clicked: true
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {ResetButton}
      </button>
    );
  }
}
