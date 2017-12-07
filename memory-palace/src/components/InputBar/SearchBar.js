import React from 'react';
// import SubmitButton from './../Buttons/ControlButtons/SubmitButton';

class SearchBar extends React.Component{

    render(){
        return (
        <div className="search-bar">
            <form onSubmit={this.props.handleSearchTermSubmit}>
                <input
                    name="value"
                    type="text"
                    placeholder="Enter birthday..."
                    value = {this.props.value}
                    onChange={this.props.handleSearchTermChange} />
                <input id="generate" type="submit" value="generate" />
            </form>
        </div>
        )
    }
}

export default SearchBar;