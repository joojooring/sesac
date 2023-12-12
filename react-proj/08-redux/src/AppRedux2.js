import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import { increase, decrease } from "./store/counterReducer";

function AppRedux2() {
    return (
        <div>
            <Box1 />
        </div>      
  );
}


function Box1() {
    const number = useSelector((state)=> state.counter.number);
    return (
      <div className="box">
        <h3>number: {number}</h3>
        <Box2 />
      </div>
    );
  }
  function Box2() {
    const number = useSelector((state)=> state.counter.number);

    return (
      <div className="box">
        <h3>number: {number}</h3>
        <Box3 />
      </div>
    );
  }
  function Box3() {
    return (
      <div className="box">
        <Box4 />
      </div>
    );
  }
  function Box4() {
    const number = useSelector((state)=> state.counter.number);
    const isData =useSelector((state)=>state.isData);
    const dispatch = useDispatch();
    return (
      <div className="box">
        <h3>number: {number}</h3>
        {/* <button onClick={()=>dispatch({type: "INCREMENT"})}>plus</button>
        <button onClick={()=>dispatch({type: "DECREMENT"})}>minus</button> */}

        <button onClick={()=>dispatch(increase())}>plus</button>
        <button onClick={()=>dispatch(decrease())}>minus</button>

        <div>isData : {`${isData}`}</div>
        <button onClick={()=>dispatch({type: "CHANGE"})}>변경</button>
      </div>
    );
  }

  
export default AppRedux2;










