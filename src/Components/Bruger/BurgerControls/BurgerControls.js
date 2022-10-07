import React from "react"
import BuildControl from "./BuildControl/BuildControl"
import classes from './BurgerControls.module.css'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const burgerControls = (props) => (
        <div className={classes.BurgerControls}>
            <h3>Price is: <strong className={classes.Lightblue}>{props.price.toFixed(2)}$</strong></h3>
            {controls.map(ctrl => (
                <BuildControl 
                key={ctrl.label}
                label={ctrl.label}
                add={() => props.addIngredient(ctrl.type)}
                remove={() => props.removeIngredient(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                />
                ))}
            <div className={classes.Ctrls}>
                <button disabled={!props.purchase} onClick={props.remove} className="btn btn-danger">Clear</button>
                <button disabled={!props.purchase} className="btn btn-success" onClick={props.ordering}>Order Now!</button>
            </div>
        </div>
);

export default burgerControls;