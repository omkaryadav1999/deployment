import PassData from "./passData";
import { combineReducers } from "redux"
import UserCart from "./addcart";
const rootReducers = combineReducers({
    PassData, UserCart
})

export default rootReducers