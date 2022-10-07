import React from "react";

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawer from "../SideDrawer/SideDrawer";
import ToggleIcon from "./ToggleIcon/ToggleIcon";

const toolbar = (props) => (

    <header className={classes.Toolbar}>
        <ToggleIcon clicked={props.toggleSideDrawer}/>
        <Logo className={classes.DesktopOnly}/>
        <h3>BurgerBuilder v1.5</h3>
        <nav className={classes.DesktopOnly}>
        <NavigationItems/>
        </nav>
        <SideDrawer/>
    </header>
);

export default toolbar;