import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function AppRedux1() {
    return (
        <div>
            <Box1 />
        </div>      
  );
}


function Box1() {
    const number = useSelector((state)=> state.number);
    return (
      <div className="box">
        <h3>number: {number}</h3>
        <Box2 />
      </div>
    );
  }
  function Box2() {
    const number = useSelector((state)=> state.number);

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
    const number = useSelector((state)=> state.number);
    const dispatch = useDispatch();
    return (
      <div className="box">
        <h3>number: {number}</h3>
        <button onClick={()=>dispatch({type: "INCREMENT"})}>plus</button>
        <button onClick={()=>dispatch({type: "DECREMENT"})}>minus</button>

      </div>
    );
  }

  
export default AppRedux1;










