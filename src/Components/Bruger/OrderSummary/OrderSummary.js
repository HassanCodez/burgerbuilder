import React, { Fragment } from "react";
import './OrderSummary.module.css'

const orderSummary = (props) => {
    const igSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
    })
    return (
    <Fragment>
        <h3>You ordered</h3>
        <p>A burger with:</p>
        <ul>
            {igSummary}
        </ul>
        <h5>With total amount: {props.price.toFixed(2)}$</h5>
        <p>Continue to checkout?</p>
        <button className="btn btn-danger" onClick={props.exitOrder}>Close</button>
        <button className="btn btn-primary" style={{marginLeft:'50px'}} onClick={props.proceed}>Proceed</button>

    </Fragment>
)};

export default orderSummary;