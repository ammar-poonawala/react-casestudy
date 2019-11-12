import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../actions/actions';
class Cart extends Component {

    decreaseProductCount = (id) => {
        this.props.decreaseProductCount(id)

    }

    render() {
        let totalBill = 0.00;
        
        return (

            <div>
                <h3>Cart</h3>
                {
                    (this.props.cart.length <= 0) ? <div className="alert alert-danger">
                        Nothing added to cart
                   </div> :



                        <section>
                            {
                                <div className="container">
                                    <table className="table table-bordered table-striped">
                                        <thead className="bg-info ">
                                            <tr className="text-white">
                                                <th>ID</th>
                                                <th>Title</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.props.cart.map(cart => {
                                                    totalBill+=(parseFloat(cart.price) * parseFloat(cart.quantity))
                                                    //console.log("bill is ==",totalBill)
                                                    return (
                                                        <tr key={cart.id}>
                                                            <td>{cart.id}</td>
                                                            <td>{cart.title}</td>
                                                            <td>${cart.price * cart.quantity}</td>

                                                            <td><button className="btn btn-success" onClick={() => this.props.increaseProductCount(cart.id)}>+</button>{cart.quantity}<button className="btn btn-danger" onClick={() => this.decreaseProductCount(cart.id)}>-</button></td>
                                                        </tr>
                                                    );
                                                })
                                            }
                                            <tr className="table-secondary">
                                                <td ><b>Total</b></td>
                                                <td></td>
                                                <td></td>
                                                <td>${totalBill}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            }
                        </section>
                }
            </div>





        )
    }
}


const mapStateToProps = (state) => {

    return ({

        postsFilter: state.postsFilter,
        cart: state.cart,
        quantity: state.quantity


    })
}

const mapDispatchToProps = (dispatch) => {


    return {
        increaseProductCount: (id) => dispatch(actionTypes.increaseProductCount(id)),
        decreaseProductCount: (id) => dispatch(actionTypes.decreaseProductCount(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);