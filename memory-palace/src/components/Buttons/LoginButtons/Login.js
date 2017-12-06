
class LoginButton extends React.Component{ 
    constructor(props) {
      this.state = {
        clicked: false
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
    //connect to Authorization method

      this.setState(prevState => ({
        clicked:true
      }));
    }


  render() {
    return (
    <button onClick={props.handleClick}>
      {LoginButton}
    </button>
    );
  }

}  
