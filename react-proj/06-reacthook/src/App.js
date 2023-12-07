import React, { useState } from 'react';
import './App.css';
import UseMemo from './components/UseMemo';
import UseCallback from "./components/UseCallback";
import UseCallbackEx from "./components/UseCallbackEx";
import UseReducer from "./components/UseReducer"
import CustomHook from "./components/CustomHooks"
import OneMoreReducer from './components/OneMoreReducer';
import OnceAgainReducer from "./components/OnceAgainReducer"
import PracCustomHook from "./components/PracCustomHook"


function App() {
  const [postId, setPostId] = useState(1);
  return (
    <div>
      <UseMemo />
      <UseCallback />
      <UseCallbackEx postId={postId} />
      <button onClick={()=>setPostId(postId+1)}>+1</button>
      <UseReducer />
      <CustomHook />

      <OneMoreReducer />
      <OnceAgainReducer />

      <PracCustomHook />


    </div>

    );
}

export default App;
