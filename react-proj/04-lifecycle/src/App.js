import { useState } from "react";
import "./App.css";
import LifeCycle from "./components/LifeCycleFunc";
import LifeCycleClass from "./components/LifeCycleClass";
import PostList from "./components/practice/PostList";

function App() {
  const [number, setNumber] = useState(0);
  const [isShow, setIsShow] = useState(true);

  const [text, setText] = useState("")

  return (
    <div>
      {/* <button onClick={() => setNumber(number + 1)}>plus</button>
      <button onClick={() => setIsShow(!isShow)}> */}
        {/*삼항연산자 :  조건식 ? 참인 경우의 값 : 거짓인 경우의 값 */}
        {/* {isShow ? "OFF" : "ON"}
      </button>
      {isShow && <LifeCycle number={number} />}
      {isShow && <LifeCycleClass number={number} />}
 */}
      <PostList text={text} />
    </div>
  );
}

export default App;