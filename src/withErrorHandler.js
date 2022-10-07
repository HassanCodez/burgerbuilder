import React, {Component, Fragment} from "react";
import Modal from "./UI/Modal/Modal";


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        };

    //     constructor(props) {
    //     super(props);
    //     axios.interceptors.request.use(req => {
    //         this.state = {error: null};
    //         return req;
    //     });
    //     axios.interceptors.response.use(res => res, Error => {
    //         this.state = {error: Error};
    //     });
    // }
        componentDidMount() {
            this.reqinterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.resinterceptor = axios.interceptors.response.use(res => res, Error => {
                this.setState({error: Error});
            });
        };

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqinterceptor);
            axios.interceptors.response.eject(this.resinterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }
        render () {

            return (
                <Fragment>
                    <Modal 
                    show = {this.state.error} 
                    exit = {this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}</Modal>
                    <WrappedComponent {...this.props}/>
                </Fragment>
            )
        }
    }

}

export default withErrorHandler;