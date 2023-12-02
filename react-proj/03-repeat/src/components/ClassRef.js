import { Component, createRef } from "react";


class ClassRef extends Component {
    
    
    
    ///콜백함수를 이용하여 ref를 지정했을 때, ref 변수를 사용하는 방법
    foucusInput = () => {
        this.input.focus();
    }
    
    input222 = createRef()
    
    focusInput222 = () => {
        this.input222.current.focus();
    }


    render(){
        return(
            <>

            {/* 클래스형 ref방법1 : 콜백함수를 이용! */}
            <input 
            type="text" 
            ref={(ref)=>{
                // ref에 콜백함수를 넘길 때 첫번째 매개변수는
                // ref가 걸려 있는 요소를 담고 있음
                // 클래스 내부이기때문에 this를 넣어줌
                this.input = ref
            }}></input>
            <button onClick={this.foucusInput}>눌러!</button>

            <br />

            <input 
            type="text" 
            ref={this.input222}></input>
            <button onClick={this.focusInput222}>22222!</button>

            </>
        )
    }
}

export default ClassRef;