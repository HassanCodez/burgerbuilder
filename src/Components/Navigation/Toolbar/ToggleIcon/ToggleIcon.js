import React from "react"
import classes from './ToggleIcon.module.css'

const ToggleIcon = (props) => (

    <div className={classes.ToggleIcon} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default ToggleIcon;