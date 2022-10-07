import React from "react"

import classes from './Burger.module.css'
import BurgerIngredients from "./BurgerIngredient/BurgerIngredient";
const burger = (props) => {
    
    let transingredients = Object.keys(props.ingredients)
        .map(igKey => { return [...Array(props.ingredients[igKey])]
            .map((_,i) => { return <BurgerIngredients key={igKey + i} type={igKey} />
        });
    })
    .reduce((arr, el) =>{
        return arr.concat(el)
    }, []);
    if (transingredients.length === 0) {
        transingredients = <p>Please start adding ingredients!</p>
    }
    // console.log(transingredients);


    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {transingredients}
            <BurgerIngredients type="bread-bottom" />
            
        </div>
    );
};

export default burger;