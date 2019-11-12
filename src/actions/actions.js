import Axios from "axios";
import * as actionTypes from './types'



export const getProducts = (getproducts) => {
    return {
        type: actionTypes.FETCH_ALL_DATA,
        value: getproducts
    };

}

export const setDeleteProduct = (getproducts) => {
    return {
        type: actionTypes.DELETE_PRODUCT,
        value: getproducts
    };
}

export const Display = (category) => {
    return {
        type: actionTypes.DISPLAY,
        category: category
    };

}

export const addToCart = (id) => {
    return {
        type: actionTypes.ADD_TO_CART,
        id: id
    }
}

export const increaseProductCount = (id) => {
    return {
        type: actionTypes.INCREASE_QUANTITY,
        id: id
    }
}

export const decreaseProductCount = (id) => {
    return {
        type: actionTypes.DECREASE_QUANTITY,
        id: id
    }
}

export const fetchProducts = () => {
    return dispatch => {
        let getproducts = null
        Axios.get('http://localhost:3000/api/products')
            .then(response => {
                getproducts = response.data
                dispatch(getProducts(getproducts))

            });
    };
}


export const deleteProduct = (id) => {
   
    return dispatch => {
        let getproducts = null
        Axios.delete('http://localhost:3000/api/products/' + id)
            .then(response => {
                Axios.get('http://localhost:3000/api/products')
                    .then(response => {
                        getproducts = response.data
                        dispatch(setDeleteProduct(getproducts))

                    });
            });
    };
}


