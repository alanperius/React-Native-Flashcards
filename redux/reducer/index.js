import {combineReducers} from "redux";
import decks from './decks'
import {loadingBarReducer} from "react-redux-loading";

export default combineReducers({
    decks: decks,
    loadingBar: loadingBarReducer
})
