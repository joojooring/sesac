import './App.css';
import ClassComponent from './components/ClassComponent';
import FuncComponent from './components/FuncComponent';
import Test1Component from './components/Test1Component';
import TitleComponent from './components/TitleComponent';
import FuncPropsEx from './components/FuncPropsEx';
import Section from './components/Section';
import ClassPropsEx from './components/ClassPropsEx';
import Food from './components/Food';
import Book from './components/Book';
import JustClassComponent from './components/JustClassComponent';
function App() {
  return (
    <div>
      {/* <br /> */}
      {/* <FuncComponent /> */}
      {/* <FuncComponent></FuncComponent> */}
      
      {/* <ClassComponent />
      <Test1Component />
      <TitleComponent /> */}
      <FuncPropsEx title="SeSAC" content="헬로월드~~" number={5} />
      <FuncPropsEx content="헬로월드~~" number={5} />

      <Section title="sesac 영역">
        <div>sesac 영역의 content입니다.</div>
      </Section>

      <Section title="코딩온 영역">
        <h5>코딩온 영역의 content입니다.</h5>
      </Section>

      <ClassPropsEx title="클래스다" content="답답한 공기~~" number={5}></ClassPropsEx>
      <Food content="겨울엔 해산물이 최고지~"></Food>
      <Book title="이번주 베스트셀러" author="저자 : 박막례" price="판매가 : 8,000원" type="구분 : 에세이">
        <img src="/logo192.png"></img>
      </Book>
      <br></br>
      <br></br>
      <br></br>

      <JustClassComponent text="마지막 실습" valid={()=>{
        console.log("콘솔 띄우기 성공")
      }}></JustClassComponent>
    </div>
  );
}

export default App;
