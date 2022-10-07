import { Component } from "react";
import Order from "../../Components/Order/Order";
import axios from '../../axiosOrders';
import withErrorHandler from "../../withErrorHandler";
class Orders extends Component {

    state = {
        loading: true,
        orders: []
    }

    componentDidMount() {
        axios.get('/orders.json')
        .then(res => {
            const fetchedOrders = [];
            for (let key in res.data){
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            this.setState({loading: false, orders: fetchedOrders})

        })
        .catch(err => {
            this.setState({loading: false})
        });
    }
    render() {
        return(
            <>
                {this.state.orders.map(order => (
                    <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    price={+order.price}
                    />
                ))}
            </>
        )
    }
}

export default withErrorHandler(Orders, axios);