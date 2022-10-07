import React, { Fragment } from "react";
import classes from './loading.module.css'

const loading = () => (
    <Fragment>
        {/* <h1>Ordering...</h1> */}
    <div className={classes.Spinner}>
        <div className={classes.Dot1}></div>
        <div className={classes.Dot2}></div>
    </div>
    </Fragment>
)

export default loading;