import './App.css';
import ClassComponent from './components/ClassComponent';
import FuncComponent from './components/FuncComponent';
import Test1Component from './components/Test1Component';
import TitleComponent from './components/TitleComponent';


function App() {
  return (
    <div>
      {/* <br /> */}
      <FuncComponent />
      {/* <FuncComponent></FuncComponent> */}
      
      <ClassComponent />
      <Test1Component />
      <TitleComponent />
    </div>
  );
}

export default App;
