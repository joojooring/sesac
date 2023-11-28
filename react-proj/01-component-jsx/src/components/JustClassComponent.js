import {Component} from "react";
import Proptypes from "prop-types";

class JustClassComponent extends Component {
    render(){
        return(
        <>
            <div>텍스트 : {this.props.text}, 내용은 : {this.props.valid}</div>
            <button onClick={(valid)=>{
        console.log("콘솔 띄우기 성공!",valid)
    }}>버튼
    </button>


        </>
        );
    }
// 클래스 내의 전역변수느낌 static
    // static defaultProps = {
    //     name : "팡팡이"
    // };

    // static propTypes = {
    //     title : Proptypes.string,
    //     content : Proptypes.string.isRequired,
    //     number : Proptypes.number
    
    // }
}

JustClassComponent.defaultProps = {
    text : "이건 기본 text props 입니다."
}

JustClassComponent.propTypes = {
    text : Proptypes.string.isRequired,
    // valid : Proptypes.string,

}

export default JustClassComponent;