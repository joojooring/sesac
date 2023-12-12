// ------------4. 컴포넌트에서 redux 사용하기 (container폴더의 컴포넌트 파일)

// /src/containers/BankContainers.js 파일
import { useSelector, useDispatch } from 'react-redux';
import Bank from '../components/Bank';
import { deposit, withdraw } from '../store/bankReducer';


// 스토어에 있는 데이터는 컴포넌트에서 직접 조작하지 않음!!!!! 리듀서함수사용
// Dispatch : 액션을 발생시키는 것
// dispatch({action})과 같은 형태로 액션 객체를 파라미터로 넣어서 호출
// 디스패치가 호출되면 스토어의 리듀서가 실행되어 새로운 상태를 반환
export const BankContainer = () => {

  // store에 접근하여 state를 가져오려면 useSelector사용하면 됨
  const money = useSelector((state) => state.money);
  const dispatch = useDispatch();

  return (
    <>
      <Bank
        money={money}
        onDeposit={(payload) => dispatch({ ...deposit(), payload: payload })}
        onWithdraw={(payload) => dispatch({ ...withdraw(), payload: payload })}
        // dispatch로 store에 있는 state바꾸는 함수 실행
      />
    </>
  );
};
