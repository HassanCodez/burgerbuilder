import * as actionTypes from './actions';

const initalState = {
    ingredients: { 
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    },
        totalPrice: 3,
}

const INGREDIENTS_PRICES = {
    salad:0.3,
    bacon:0.5,
    cheese:0.4,
    meat:0.7
};

const reducer = (state = initalState, action) => {

    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return{
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.igName]: state.ingredients[action.igName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.igName]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return{
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.igName]: state.ingredients[action.igName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENTS_PRICES[action.igName]
            }
        case actionTypes.CLEAR_INGREDIENTS:
            return{
                ...state,
                ingredients: {
                    salad:0,
                    bacon:0,
                    cheese:0,
                    meat:0
                },
                totalPrice: 3
            }
        default:
            return state;
    }
}

export default reducer;