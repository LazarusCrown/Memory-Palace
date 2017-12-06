import React from 'react';

class Dropdown extends React.Component{

    render(){
        return (
            <div>
                <form onSubmit={this.props.handleConfirmDropdownWords}>
                    <select id="dropdown" onChange={this.props.handleWordSelect} value={this.props.monthWord}>
                        <option value="sumo">sumo</option>
                        <option value="sumo2">sumo2</option>
                        <option value="sumo2">sumo2</option>
                    </select>

                    <input id="submit" type="submit" value="Generate GIFs" />
                </form>
            </div>
        )
    }
}

//refactor so that this submit button is separate
//and so that four dropdowns can be generated

export default Dropdown;