import React from 'react';
import SubmitButton from './../Buttons/ControlButtons/SubmitButton';

const Input = props => (
    <div>
        <input 
            id="input-bar"
            type="text"
            name="value"
            placeholder="Enter birthday..."/>
            
            {SubmitButton}
    </div>
);

export default Input;

