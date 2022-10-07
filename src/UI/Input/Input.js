import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {

    let dynamicInput = null;

    switch(props.elType){
        case('input'):
            dynamicInput = <input className={classes.DynamicInput} {...props.elConfig} value={props.value} onChange={props.changed}/>;
            break;
            case('textarea'):
            dynamicInput = <textarea className={classes.DynamicInput} {...props.elConfig} value={props.value} onChange={props.changed}/>;
            break;  
            case('select'):
            dynamicInput = <select className={classes.DynamicInput} value={props.value} onChange={props.changed}>
                {props.elConfig.options.map(option => (
                    <option key={option.value} value={option.value} >{option.displayValue}</option>
                ))}
            </select>;
            break;
        default:
            dynamicInput = <input className={classes.DynamicInput} {...props} value={props.value}/>;
    }
    
    return (
        <div className={classes.Input} >
            <label className={classes.Label}>{props.label}</label>
            {dynamicInput}
        </div>
    )
}

export default Input;