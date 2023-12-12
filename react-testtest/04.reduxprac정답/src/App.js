import './App.css';
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";


import { BankContainer } from './containers/BankContainers'

function App() {
  return (
    <div className="App">
      <BankContainer />
    </div>
  )
}

// function App() {
//   return (
// <div>
//   <Prac /> 
// </div>
//     );
// }

// function Prac() {

//   const [inputMoney, setInputMoney] = useState(0);
//   const money = useSelector((state)=> state.money)
//   const dispatch = useDispatch();
//   return(
//     <>
    
//     <h2>코딩온 은행</h2>
//     <br />
//     <h4>잔액 : {money}원</h4> 
//     <br />
//     <input type="number" value={inputMoney} onChange={(e)=> setInputMoney(e.target.value)}></input>
//     <button onClick={()=>dispatch({type: "DEPOSIT"})}>입금</button>
//     <button onClick={()=>dispatch({type: "WITHDRAW"})}>출금</button>
//     </>
//   )
// }

export default App;
