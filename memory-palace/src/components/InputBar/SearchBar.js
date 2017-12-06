import React from 'react';
// import SubmitButton from './../Buttons/ControlButtons/SubmitButton';

class SearchBar extends React.Component{

    render(){
        return (
        <div className="search-bar">
            <form onSubmit={this.handleSearchTermSubmit}>
                <input
                    type="text"
                    placeholder="Enter birthday..."
                    value = {this.props.value}
                    onChange={this.props.handleSearchTermChange} />
                <input id="generate" type="generate" value="Generate" />
                <button>Generate</button>
            </form>
        </div>
        )
    }
}

export default SearchBar;