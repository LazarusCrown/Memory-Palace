class LogoutButton extends React.Component{ 
    constructor(props) {
      this.state = {
        clicked: false
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
    //connect to db and end session

      this.setState(prevState => ({
        clicked:true
      }));
    }

  render() {
    return (
    <button onClick={props.handleClick}>
      {LogoutButton}
    </button>
    );
  }

} 