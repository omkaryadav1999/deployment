import { ADD_CART, REMOVE_PRODUCT } from "../constant/constant";

const initaiState = []

function UserCart(state = initaiState, action) {
    switch (action.type) {
        case ADD_CART:
            return [...state, action.paylod]

        case REMOVE_PRODUCT:
            const newData = state.filter((item) => {
                return action.id !== item.id
            })
            return [...newData]
        default:
            return state
    }
}

export default UserCart