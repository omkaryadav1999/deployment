import { GET_RESPONSE, SET_RESPONSE } from "../constant/constant";
import { takeEvery, put } from "redux-saga/effects"
import axios from "axios"

function* CallApi() {   //watcher function for fetch data and for dispatch.
    
    const response = yield axios.get("https://fakestoreapi.com/products")

    yield put({ type: SET_RESPONSE, paylod: response.data })  // dispatch the action in to the store
    console.log(response)
}

function* GetfromAction() {  // actual function for to handle the async oepration 

    yield takeEvery(GET_RESPONSE, CallApi)
}

export default GetfromAction