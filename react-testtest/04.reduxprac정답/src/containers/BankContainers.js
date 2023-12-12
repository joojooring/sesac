// /src/containers/BankContainers.js 파일
import { useSelector, useDispatch } from 'react-redux';
import Bank from '../components/Bank';
import { deposit, withdraw } from '../store/bankReducer';

export const BankContainer = () => {
  const money = useSelector((state) => state.money);
  const dispatch = useDispatch();

  return (
    <>
      <Bank
        money={money}
        onDeposit={(payload) => dispatch({ ...deposit(), payload: payload })}
        onWithdraw={(payload) => dispatch({ ...withdraw(), payload: payload })}
      />
    </>
  );
};
