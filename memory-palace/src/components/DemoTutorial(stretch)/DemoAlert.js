class DemoAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        clicked: false,
        text: "",
        autoNode: ""
        //auto populate nodes and dispaly demo example,
        
    };
    // this.handleClick = this.handleClick.bind(this);
  }

//   handleClick() {
//     //close the window/alertbox


//     this.setState(prevState => ({
//       clicked:true
//     }));
//   }

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

  render() {
    return (
      <div>
        {DemoAlert}
      </div>
    );
  }
}