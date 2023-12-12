// containers 폴더를 왜 만들었냐? redux store에 직접적으로 접근하는 컴포넌트를 모아두기 위해서

// components폴더에 
// 보통 presentational 컴포넌트만 저장.
// redux store에 직접적으로 접근하지 않고 개별적으로 접근
import { Box2Container, Box4Container } from "../containers/BoxesContainer";

export  function Boxes1Presentational({number}) {
    return(
        <div className="box">
        <h3>number: {number}</h3>
        <Box2Container />
      </div>
    )
};

export  function Boxes2Presentational({number}) {
    return(
        <div className="box">
        <h3>number: {number}</h3>
        <Boxes3Presentational />
        {/* <Box2 /> */}
      </div>
    )
};

 function Boxes3Presentational () {
    return(
        <div className="box">
            <Box4Container />
      </div>

    )
}

export function Boxes4Presentational(props) {
    const {number, isData, counterIncrease, counterDecrease, isDataChange} = props
    return(
      <div className="box">
        <h3>number: {number}</h3>

        <button onClick={counterIncrease}>plus</button>
        <button onClick={counterDecrease}>minus</button>

        <div>isData : {`${isData}`}</div>
        <button onClick={isDataChange}>변경</button>
      </div>
    );
  }
