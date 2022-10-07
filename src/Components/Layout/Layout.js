import React, {Component, Fragment} from "react";
import BurgerIngredients from "../Bruger/BurgerIngredient/BurgerIngredient";
import classes from'./layout.module.css'
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {

    state = {
        sideDrawerToggle: false
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerToggle: !prevState.sideDrawerToggle};
        });
    }

    render () {
        return (
            <Fragment>
                <Toolbar toggleSideDrawer = {this.sideDrawerToggleHandler}/>
                <SideDrawer 
                open={this.state.sideDrawerToggle}
                toggle={this.sideDrawerToggleHandler}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <BurgerIngredients/>
        </Fragment>
        )
    };
}

export default Layout;