import {combineReducers} from "redux";
import counterReducer from "./counterReducer"
import isDataReducer from "./isDataReduder";

const rootReducer = combineReducers({
    counter : counterReducer,
    isData : isDataReducer
});

export default rootReducer;