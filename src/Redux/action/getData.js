import { GET_RESPONSE, ADD_CART, REMOVE_PRODUCT, SERACH_PRODUCT, FILTER_PRODUCT, PAYMENT_PRODUCT } from "../constant/constant";


export const DispatchAction = () => {
    return {
        type: GET_RESPONSE
    }
}

export const AddTocart = (input) => {
    return {
        type: ADD_CART,
        paylod: input
    }
}

export const RemovefromCat = (id) => {
    return {
        type: REMOVE_PRODUCT,
        id: id
    }
}

export const Search = (name) => {

    return {
        type: SERACH_PRODUCT,
        name: name
    }
}


export const Filter = (name) => {
    console.log(name)
    return {
        type: FILTER_PRODUCT,
        name: name
    }
}

export const AddToPayment = (id) => {
    console.log(id)
    return {
        type: PAYMENT_PRODUCT,
        id
    }
}