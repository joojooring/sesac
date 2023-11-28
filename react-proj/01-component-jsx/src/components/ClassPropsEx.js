import {Component} from "react";
import Proptypes from "prop-types";

class ClassPropsEx extends Component {
    render(){
        return(
        <>
            <div>클래스형 컴포넌트 이용하여 (Props) </div>
            <div>제목은 : {this.props.title}, 내용은 : {this.props.content}, 숫자는 : {this.props.number}</div>
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

ClassPropsEx.defaultProps = {
    name : "팡팡이"
}

ClassPropsEx.propTypes = {
    title : Proptypes.string,
    content : Proptypes.string.isRequired,
    number : Proptypes.number

}

export default ClassPropsEx;