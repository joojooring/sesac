import {Component} from "react";

class EventClass extends Component {

    constructor(props) {
        super(props)
        this.state = {
            msg : "hello~~~ppippi"

        };

        //함수선언문사용하여 메소를 만들 때,
        // 메소드 내부에서 클래스의 this를 사용하고 싶을 경우,
        // 생성자 내에서 함수에 bind에 this를 써줘야됨
        // 핫ㅁ수 선언문ㅇ르 이용하여 선언된 메소드는 this 객체를 직접 바인딩 해줘야지
        // handleOnClick 낸부에서 클래스를 가리키고 있는 this를 사용할 수 있다.
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    
    
    //함수선언문사용을 사용해 메소드를 정의
    // 함수 내부에서 자체적인 this를 만들수 있고 this를 가질 수 있게 됨, this가ㅑ 클래스의 this가 아니게 됨
    // 해결법 1 : 생성자 내부에서 this를 원하는 것으로 바인딩
    // 해결법 2 : 함수 표현식을 사용
    // 함수 선언문은 동적 바인딩을 하기 때문에 함수가 사용될 때 this가 결정 된다.
    handleOnClick(event){
        console.log(event);

        this.setState({msg : "bye-bye"})
    }
    
    //표현식 handleOnClick = () => {}
    // handleOnClick2=()=>{
    //     this.setState({msg : "bye-bye"})
    // }
    // 함수 표현식은 함수가 선언될 때 this를 결정 지음. 함수를 선언하는 코드를 읽을 때 this가 결정됨.
    handleOnClickHello = (event) =>{
        console.log(event);
        this.setState({msg: "다시 만나서 반가워"})
    }





    render() {
        return (
            <>
            <h3> EVENT Handling 공부 :  클래스형 컴포넌트</h3>

            {this.state.msg}

            <button onClick={this.handleOnClick}>잘 가 또 보 자 ~</button>
            <button onClick={this.handleOnClickHello}>안 녕</button>


            <button onClick={(event)=>{
                // event e 는 리액트 합성 이벤트 객체. 합성 이벤트에 대한 모든 정보를 담고 있음
                // 그 중엥 target이라는거에 접근하면 , 이벤트가 걸린 태그를 확인할 수 있음
                console.log(event.target); console.log(event.type)}}>test</button>

            </>
        )
    }
}


export default EventClass;