import React from 'react';
import SubmitButton from './../Buttons/ControlButtons/SubmitButton';

const Input = props => (
    <div>
        <form>
        
            <input
                id="input-bar"
                type="text"
                name="value"
                placeholder="Enter birthday..."/>
                
            <button handleInputSearch={this.props.handleInputSearch}/>

        </form>
    </div>
);

export default Input;

