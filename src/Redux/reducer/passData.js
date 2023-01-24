import { SERACH_PRODUCT, FILTER_PRODUCT, SET_RESPONSE, PAYMENT_PRODUCT } from "../constant/constant";

const initaiState = []

function PassData(state = initaiState, action) {
    switch (action.type) {
        case SET_RESPONSE:
            return [...action.paylod]

        case SERACH_PRODUCT:
            const serach = state.filter((item) => {
                return item.title.toLowerCase().includes(action.name)
            })
            return [...serach]

        case FILTER_PRODUCT:
            const filter = state.filter((item) => {
                return item.category.toLowerCase().includes(action.name)
            })
            console.log(filter)
            return [...filter]
        case PAYMENT_PRODUCT:
            const product = state.filter((product) => {
                return product.id === action.id
            })
            console.log(product)
            return [...product]
        default:
            return state
    }
}

export default PassData