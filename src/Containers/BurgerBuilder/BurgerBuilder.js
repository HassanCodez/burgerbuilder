import React, { Component, Fragment } from "react";
import Burger from '../../Components/Bruger/Burger'
import BurgerControls from "../../Components/Bruger/BurgerControls/BurgerControls";
import Modal from "../../UI/Modal/Modal"
import OrderSummary from "../../Components/Bruger/OrderSummary/OrderSummary";
import Loading from '../../UI/loading/loading' 
import axios from '../../axiosOrders'
import withErrorHandler from "../../withErrorHandler";
// import {Navigate} from 'react-router-dom'
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions'


class BurgerBuilder extends Component {

    state = {
        // ingredients: null,
        // totalPrice: 3,
        // purchase: true,
        ordered: false,
        loading: false,
        error: false,
        // nav: false
    }

        // componentDidMount(){
        //     // console.log(this.props);
        //     axios.get('https://bugerbuilder-d4722-default-rtdb.firebaseio.com/ingredients.json')
        //     .then(Response => {
        //         this.setState({ingredients: Response.data});
        //     })
        //     .catch(error => {
        //         this.setState({error: true})
        //     })
        // }
    orderedHandler = () => {
        this.setState({ordered:true})
    };

    exitOrderHandler = () => {
        this.setState({ordered:false})
    }

    proceedorderHandler = () => {
        
       
        // this.setState({nav:true})
        // const queryParams = [];
        // for (let i in this.state.ingredients) {
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        // }

        // queryParams.push('price=' + this.state.totalPrice);
        // const queryString = queryParams.join('&');

        this.props.history.push('/checkout');
    }



    updatePurchase (ingredients){
        const summary = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey];
        })
        .reduce((summary, el) => {
            return summary + el;
        },0);
        return summary > 0;

    };

    // removePurchaseHandler = (ingredients) => {
    //     if (this.state.purchase !== true) {
    //         this.setState({ingredients: {
    //             salad:0,
    //             bacon:0,
    //             cheese:0,
    //             meat:0}})
    //         this.setState({totalPrice: 3})
    //         this.setState({purchase: true})
    //     }

    // };
 

    // addIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const newCount = oldCount +1;
    //     const newIngredients = {
    //         ...this.state.ingredients
    //     };
    //     newIngredients[type] = newCount;
    //     const addPrice = INGREDIENTS_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + addPrice;
    //     this.setState({totalPrice:newPrice, ingredients:newIngredients});
    //     this.updatePurchase(newIngredients);

    // };
    
    // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];

    //     if (oldCount !== 0 ) {

    //         const newCount = oldCount -1;
    //         const newIngredients = {
    //             ...this.state.ingredients
    //         };
    //         newIngredients[type] = newCount;
    //         const priceDeduction = INGREDIENTS_PRICES[type];
    //         const oldPrice = this.state.totalPrice;
    //         const newPrice = oldPrice - priceDeduction;
    //         this.setState({totalPrice:newPrice, ingredients:newIngredients});
    //         this.updatePurchase(newIngredients);

    //     }


    // };

 
    render () {
        // if (this.state.nav) {return <Navigate to='/checkout'/>}


        const disabledbtn = {
            ...this.props.igs
        };
        for (let key in disabledbtn) {
            disabledbtn[key] = disabledbtn[key] <= 0  
        }

        let orderSummary = null;
        let burger = this.state.error ? <p>Burger can't be loading right now ..</p> : <Loading/>;

        if (this.props.igs) {
            burger = (
            <Fragment>
            <Burger ingredients={this.props.igs}/>
            <BurgerControls 
            addIngredient={this.props.addIngredient} 
            removeIngredient={this.props.removeIngredient}
            disabled={disabledbtn}
            price={this.props.price}
            purchase={this.updatePurchase(this.props.igs)}
            order={this.state.ordered}
            ordering={this.orderedHandler}
            remove={this.props.clearIngreidents}
            />
            </Fragment>
            );
            orderSummary = <OrderSummary 
            ingredients={this.props.igs}
            exitOrder={this.exitOrderHandler}
            price={this.props.price}
            proceed = {this.proceedorderHandler}
            />
        }

        if (this.state.loading) {
            orderSummary = <Loading/>
        }

        return (
            <Fragment>
                <Modal show ={this.state.ordered} exit={this.exitOrderHandler}>
                {orderSummary}
                </Modal>
                {burger}
                    
            </Fragment>
        );
        
    }
}


const mapStateToProps = state => {
    return{
        igs : state.ingredients,
        price: state.totalPrice
    }

};

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (igName) => dispatch({type: actionTypes.ADD_INGREDIENT, igName}),
        removeIngredient: (igName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, igName}),
        clearIngreidents: () => dispatch({type: actionTypes.CLEAR_INGREDIENTS})

    }

};
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));