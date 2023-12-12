// 2.---------- 세부 reducer를 정의합니다.
// store폴더의 상세리듀서 파일

const DEPOSIT = 'bank/DEPOSIT'
const WITHDRAW = 'bank/WITHDRAW'

// 상태에 어떤 변화가 필요하면 action이 발생
// action은 컴포넌트에서 store에 운발할 데이터를 말함
// action은 하나의 객체로 표현 됨
// action은 reducer가 수행할 작업을 설명

export const deposit = () => ({ type: DEPOSIT })
export const withdraw = () => ({ type: WITHDRAW })

// action은 deposit과 withdraw 함수 호출을 의미합니다.
//  이 함수들은 type 속성을 가진 객체를 반환하는데, 
// type은 DEPOSIT 또는 WITHDRAW 상수 값을 가집니다. 
// 이러한 객체는 Redux 애플리케이션에서 액션 객체로 사용되며, 상태(state)를 변경하는 데 사용됩니다.

const initialState = 0

// 리듀서(reducer) : 액션의 type에 따라 변화를 일으키는 함수
// 첫번째 매개변수는 현재상태값, 두번째 매개변수는 action값을 받음
// 항상 새로운 상태 객체를 반환
// http 요청, 데이터 저장같은건 하면 안됨

const bankReducer = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case DEPOSIT: // 입금
      return state + payload
    case WITHDRAW: // 출금
      return state - payload
    default:
      return state
  }

}

export default bankReducer