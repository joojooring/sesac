import './App.css';
import ListMap from './components/ListMap';
import PracOne from './components/practice/PracOne';
import PracThree from './components/practice/PracThree';
import FuncRef from './components/FuncRef';
import ClassRef from './components/ClassRef';
import ScrollBox from './components/ScrollBox';
import RefPracOne from './components/practice/RefPracOne';

import PracAgain from './components/practice/Pracagain1';
import FilterPracAgain from './components/practice/FilterPracAgain'
import PracFourAgain from './components/practice/PracFourAgain'

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
  <br /><br /><br />
  <br /><br /><br />
  <br /><br /><br />

  <RefPracOne />
  <br /><br /><br />
  <br /><br /><br />
  <br /><br /><br />

  <PracAgain />
  <FilterPracAgain />
  <PracFourAgain />
  </div>  
);
}

export default App;
