import React from "react";
import classes from './NavigationItems.module.css'
import { NavLink } from "react-router-dom";

const navigationItems = () => (

    <ul className={classes.NavigationItems}>
        <li><NavLink to={"/"} exact activeClassName={classes.active}>BurgerBuilder</NavLink></li>
        <li><NavLink to={"/orders"} activeClassName={classes.active}>My Orders</NavLink></li>
    </ul>
);

export default navigationItems;