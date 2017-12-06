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

  render() {
    return (
      <div>
        {DemoAlert}
      </div>
    );
  }
}