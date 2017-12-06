class CloseButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //close the window/alertbox


    this.setState(prevState => ({
      clicked:true
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {CloseButton}
      </button>
    );
  }
}