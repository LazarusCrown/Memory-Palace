import React from 'react';
import ReactDOM from 'react-dom';
import Styles from './ImageIcon.css'

class ImageIcon extends React.Component {

    render(){
        return (
          <div>
            <img src="https://i.giphy.com/zd2dSk44nKlxK.gif"/>
            {this.props.matchingword} 
          </div>
        )
    }
}

export default ImageIcon;


//onClick={() => { this.props.largerView(this.props.row, this.props.index) }}/>

