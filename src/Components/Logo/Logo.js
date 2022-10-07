import React from "react";
import burgerLogo from '../../assests/logo.png'

import classes from './Logo.module.css'

const Logo = (props) => (

    <div className={classes.Logo}>
        <img src={burgerLogo} alt='BurgerBuilder' onClick={props.clicked}/>
    </div>
);

export default Logo;