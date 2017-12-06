class YesButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //initiate tutorial/demo alerts


    this.setState(prevState => ({
      clicked: true
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {YesButton}
      </button>
    );
  }
}
