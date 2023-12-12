const initialValue = false;

const isDataReducer = (state= initialValue, action) =>{
    switch(action.type) {
        case "CHANGE" :
            return !state
        default :
            return state;
    }
};

export default isDataReducer;