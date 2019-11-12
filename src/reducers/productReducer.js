
import * as actionTypes from '../actions/types';
const initialState = {
    posts: [],
    postsFilter: [],
    cart: [],



}
let productStatus = false
let tempCartArr = []




const user = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_DATA:
            return {
                ...state,
                posts: action.value,
                postsFilter: action.value

            };
            break;
        case actionTypes.DISPLAY:
            console.log(state.posts)
            let temparr = [];
            for (let i = 0; i < state.posts.length; i++) {
                if (state.posts[i].category.localeCompare(action.category) == 0) {
                    temparr.push(state.posts[i])
                }
                if (action.category.localeCompare('all') == 0) {
                    temparr.push(state.posts[i])
                }
            }
            return {
                ...state,//initital state
                postsFilter: [...temparr]
            };
            break;
        case actionTypes.DELETE_PRODUCT:
            let delarr = []
            delarr = action.value
            return {
                ...state,
                postsFilter: [...delarr]
            }

        case actionTypes.ADD_TO_CART:
            
            let newAdd = state.posts.find(product => product.id == action.id)
           
            let alreadyAdded = state.cart.find(product => product.id == action.id)
           
            if (alreadyAdded) {
                alert("Product already added. Please visit cart to check quantity")

                alreadyAdded.quantity = alreadyAdded.quantity + 1;

                return {
                    ...state
                }
            }
            else {
                alert("Product added successfully")
                
                newAdd.quantity = 1;
                return {
                    ...state,
                    cart: [...state.cart, newAdd]
                }
            }




        case actionTypes.INCREASE_QUANTITY:
           
            let product = state.cart.find(product => product.id == action.id)
            
            
            product.quantity += 1
            return {

                ...state,
                quantity: product.quantity

            }

        case actionTypes.DECREASE_QUANTITY:
            let tempOrder = [...state.cart]
           
            let products = tempOrder.find(product => product.id == action.id)
          
            products.quantity -= 1
            if (products.quantity === 0) {
               
                let index = tempOrder.indexOf(products)
                tempOrder.splice(index, 1)
            }

            return {

                ...state,
                cart: tempOrder

            }



        default:
            return state;
    }

};


export default user;