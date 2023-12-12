import { useSelector, useDispatch } from "react-redux";
import {Boxes1Presentational, Boxes2Presentational, Boxes4Presentational} from "../components/BoxesPresentational";
import { increase, decrease } from "../store/counterReducer";

export  function Box1Container() {
    const number = useSelector((state)=> state.counter.number);
    return(
        <>
        <Boxes1Presentational number={number}/>
        </>
    )
};

export  function Box2Container() {
    const number = useSelector((state)=> state.counter.number);
    return(
        <>
        <Boxes2Presentational number={number} />
        </>
    )
}

export  function Box4Container() {
    const number = useSelector((state)=> state.counter.number);
    const isData =useSelector((state)=>state.isData);
    const dispatch = useDispatch();
    const counterIncrease = () => dispatch(increase())
    const counterDecrease = () => dispatch(decrease())
    const isDataChange = () => dispatch({type: "CHANGE"})

    return(
        <Boxes4Presentational  number={number}
         isData={isData}
          counterIncrease={counterIncrease}
          counterDecrease={counterDecrease}
          isDataChange={isDataChange}
          />

    )
}