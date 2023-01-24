import { all } from "redux-saga/effects"
import GetfromAction from "./getfromAction"

function* rootSaga() {
    yield all([GetfromAction()])
}

export default rootSaga