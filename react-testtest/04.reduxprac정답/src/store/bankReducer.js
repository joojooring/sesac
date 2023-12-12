const DEPOSIT = 'bank/DEPOSIT'
const WITHDRAW = 'bank/WITHDRAW'

export const deposit = () => ({ type: DEPOSIT })
export const withdraw = () => ({ type: WITHDRAW })

const initialState = 0

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