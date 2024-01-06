import {combineReducers} from "redux";
import authReducer from "./authReducer"
import registerReducer from "./registerReducer";

const rootReducer = combineReducers({
    user : registerReducer,
    auth : authReducer
});

export default rootReducer;