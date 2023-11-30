import './App.css';
import StateClass from './components/StateClass';
import StateFunc from './components/StateFunc';
import StateClassPrac from './components/StateClassPrac';
// import Increase from './components/StateFuncPrac';
// import Decrease from './components/StateFuncPrac';
import { Increase, Decrease } from './components/StateFuncPrac';
import EventClass from './components/EventClass';
import EventFunc from './components/EventFunc';

import HandlerEx from './components/ex/HandlerEx';
import PracTwo from './components/ex/PracTwo';
import PracThree from './components/ex/PracThree';
import PracFour from './components/ex/PracFour';



function App() {
  return (
    <div>
      <StateClass name="쥬쥬밥"></StateClass>
      <StateFunc />

      <StateClassPrac />
      <Increase />
      <Decrease />

      <EventClass />
      <EventFunc />

      <HandlerEx />
      <PracTwo />
      <PracThree />
      <PracFour />

    </div>
  );
}

export default App;
