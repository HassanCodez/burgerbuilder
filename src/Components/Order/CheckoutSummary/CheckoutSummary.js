import Burger from "../../Bruger/Burger";
import classes from './CheckoutSummary.module.css';
const CheckoutSummary = (props) => {
    return(
      <div className={classes.CheckoutSummary}>
        <h1>Enjoy your burger ❤️</h1>
        <div style={{width:'100%', margin:'auto'}}>
            <Burger ingredients = {props.ingredients}/>
        </div>
        <button className="btn btn-danger" onClick = {props.checkoutCanclledHandler} style={{marginRight: '50px'}}>Cancel</button>
        <button className="btn btn-success" onClick = {props.checkoutConfirmedHandler}>Confirm</button>
      </div>  
    );
};

export default CheckoutSummary;