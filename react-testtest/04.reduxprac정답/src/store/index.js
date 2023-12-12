//--------- 1. rootReducer를 정의합니다.

import {combineReducers} from "redux";
// import counterReducer from "./counterReducer"
import bankReducer from './bankReducer'

// store는 상태가 관리되는 오직 하나의 공간
// stord 안에는 현재 상태랑 reducer가 들어감
// 한 개의 프로젝트는 단 하나의 스토어만 가질 수 있음
// 스토어에 있는 데이터는 컴포넌트에서 직접 조작하지 않음!!!!! 리듀서함수사용

const rootReducer = combineReducers({
    // counter: counterReducer
    money: bankReducer,
});

export default rootReducer;
