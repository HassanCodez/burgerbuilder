import { Component } from "react";
import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary";
// import {Navigate} from 'react-router-dom;'
// import WithRouter from '../../withRouter';
import ContactData from '../ContactData/ContactData';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

class Checkout extends Component {
    
   
    confirmed = () => {
        // this.props.navigate('/checkout/order-details');
        this.props.history.replace('/checkout/contact-data');
    }

    cancelled = () => {
        // this.props.navigate(-2);
        this.props.history.goBack();
    }

    render(){

        return(
            <>
            <CheckoutSummary 
            ingredients={this.props.igs}
            checkoutConfirmedHandler = {this.confirmed}
            checkoutCanclledHandler = {this.cancelled}
        
            />
            <Route path={this.props.match.url + '/contact-data'}
            component={ContactData} />
            </>
        
        )
    };
}

const mapStateToProps = state => {
    return{
        igs : state.ingredients,
    }

};

export default connect(mapStateToProps)(Checkout);