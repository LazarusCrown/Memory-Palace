import React from 'react';
import SubmitButton from './../Buttons/ControlButtons/SubmitButton';

class SearchBar extends React.Component{


    render(){
        <div className="search-bar">
            <form onSubmit={this.handleSearchTermSubmit}>
                <input
                    type="text"=
                    placeholder="Enter birthday..."/>
                <button>Generate</button>
            </form>
        </div>
    }
}

export default Input;