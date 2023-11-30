import {Component} from "react";

class StateClass extends Component {

    // 예전방식 : 생성자를 먼저 만들어야 됨 (constructor-super라는 생성자 필요)
    // constructor(props) {
    //     super(props); // super는 부모 클래스의 생성자
    //             // super를 실행시켜야 this 객체를 사용할 수 있음
    //     this.state = {
    //         number : 0,
    //         text : "안녕~~"
    //     }
    // }


    // 최근방식 :

    state = {
        number : 0,
        text : "하이루~"
    }




    // 만약 생성자를 구현하지 않으면, 기본 생성자가 자동으로 실행됨

    render() {
        return (
            <>
            <div>props 예시 {this.props.name}</div>
            <h3>클래스형 컴포넌트 state 공부</h3>
            <div>
                number state value {this.state.number} 
                
                <button onClick={()=>{
                    // state변경은 보통 일반 변수변경시키듯이 변수에 값을 재할당하는 것이 아니고,
                    // state를 변경시키는 함수를 사용함
                    // 클래스형 컴포넌트는 setState메소드가 제공됨
                    // this.setState({number :this.state.number +1});

                    // 만약 setState를 연달아 두번 사용해야할 때, 중복해서 사용하면 원하는 결과를 얻을 수 없음,
                    // 왜냐면 setState는 비동기로 실행이 되기 때문
                    this.setState((prevState)=>{ return {number : prevState.number +1 } });
                    // this.setState((prevState)=>{ return {number : prevState.number +1 } });
                    this.setState((prevState)=>({number : prevState.number +1 }));


                    }}> +2</button>
                </div>
            </>
        )
    }
}



// render() {
//     const {number} = this.state;
//     return (
//         <>
//         <div>props 예시 {this.props.name}</div>
//         <h3>클래스형 컴포넌트 state 공부</h3>
//         <div>number state value {this.state.number}</div>
//         </>
//     )
// }



// const getNumber = () => {
//     return 5;
// }
// const getNumber2 = () =>  5;


export default StateClass;