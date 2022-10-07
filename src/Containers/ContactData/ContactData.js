import { Component } from "react";
import classes from './ContactData.module.css';
import axios from '../../axiosOrders';
import Loading from "../../UI/loading/loading";
import Input from "../../UI/Input/Input";
import {connect} from 'react-redux';

class ContactData extends Component {
    
    state = {
        orderForm: {
            name: {
                elType: 'input',
                elConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
            },
            email: {
                elType: 'input',
                elConfig: {
                    type: 'email',
                    placeholder: 'Your e-mail'
                },
                value: '',
            },
            street: {
                elType: 'input',
                elConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
            },
            postalCode:{
                elType: 'input',
                elConfig: {
                    type: 'text',
                    placeholder: 'Postal Code'
                },
                value: '',
            },
            country:{
                elType: 'input',
                elConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
            },
            deliveryMethod:{
                elType: 'select',
                elConfig: {
                    options: [
                        {value: 'fastest', displayValue:'Fastest'},
                        {value: 'cheapest', displayValue:'Cheapest'}
                    ]
                },
                value: '',
            }   
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault();
 this.setState({loading:true})
        const formData = {};
        for (let formEl in this.state.orderForm) {
            formData[formEl] = this.state.orderForm[formEl].value
        }
        const order = {
            ingredients: this.props.igs,
            price: this.props.price,
            custData: formData
        };
        axios.post('/orders.json', order)
        .then(Response => {
            this.setState({loading: false});
            this.props.history.push('/orders');
                alert('Your order is placed successfully!')
        })
        .catch(Error => {
            this.setState({loading: false})
            
        });
        console.log(this.state.orderForm);
    }

        valueChangeHandler = (event,el) => {
            const updatedOrderForm = {...this.state.orderForm};
            const updatedformEl = {...updatedOrderForm[el]};
            updatedformEl.value = event.target.value;
            updatedOrderForm[el] = updatedformEl;
            this.setState({orderForm: updatedOrderForm})
        }


    render() {
        const formElArray = [];
        for (let key in this.state.orderForm) {
            formElArray.push({
                id:key,
                config: this.state.orderForm[key]
            })
        }

        let form = (      
            <form onSubmit={this.orderHandler}>
                {formElArray.map(formEl => (
                    <Input 
                    key={formEl.id} 
                    elType={formEl.config.elType} 
                    elConfig={formEl.config.elConfig} 
                    value={formEl.value} 
                    changed={(event) => this.valueChangeHandler(event, formEl.id)} />
                    ))}
                <button className="btn btn-outline-success">Order</button>
            </form>)
        if(this.state.loading) {
            form = <Loading/>;
        }

        return(
            <div className={classes.ContactData}>
                <h2>Enter your Contact data</h2>
                {form}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return{
        igs : state.ingredients,
        price: state.totalPrice
    }

};

export default connect(mapStateToProps)(ContactData);