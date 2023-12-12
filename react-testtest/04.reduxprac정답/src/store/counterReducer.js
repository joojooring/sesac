const DEPOSIT = "counter/DEPOSIT"
const WITHDRAW = "counter/WITHDRAW"

const initialValue = {money : 0}
const counterReducer = (state=initialValue, action)=>{
    switch(action.type) {
        case "DEPOSIT" :
            return {money : state.money + action.money};
        case "WITHDRAW" :
            return {money : state.money - action.money};
        default : 
            return state;
    }   
};

export default counterReducer;