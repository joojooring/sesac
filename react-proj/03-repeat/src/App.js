import './App.css';
import ListMap from './components/ListMap';
import PracOne from './components/practice/PracOne';
import PracThree from './components/practice/PracThree';
import PracFour from './components/practice/PracFour';
import FuncRef from './components/FuncRef';
import ClassRef from './components/ClassRef';
import ScrollBox from './components/ScrollBox';
import RefPracOne from './components/practice/RefPracOne';


function App() {
  return (
  <div>
  <ListMap />
  <br /><br /><br />
  <FuncRef /> <br />
  <ClassRef />
  <ScrollBox />
  <br /><br /><br />
  <PracOne />
  <PracThree /> <br /><br /><br />
  <PracFour /><br /><br /><br />
  <br /><br /><br />
  <br /><br /><br />
  <br /><br /><br />

  <RefPracOne />

  </div>  
);
}

export default App;
