// 액션 타입 정의
export const registerAction = "registerAction";

// 액션 생성자 함수
export const registerUser = (userData) => ({
  type: registerAction,
  payload: userData,
});