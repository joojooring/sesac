import { registerUser } from "../actions/registerAction";

// 초기 상태 정의
const initialState = {
  user: null,
};

// 리듀서 함수
const registerReducer  = (state = initialState, action) => {
  switch (action.type) {
    case registerUser:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default registerReducer ;