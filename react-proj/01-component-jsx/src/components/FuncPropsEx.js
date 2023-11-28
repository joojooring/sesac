// 1. props 매개변수
// function FuncPropsEx (props){
//     // props = {
//     //     title : "SeSAC",
//     //     content : "헬로월드~~"
//     // };

// const {title, content} = props
//     return (
//         <>
//             <div>함수형 컴포넌트를 이용하여 (Props) </div>
//             <div>제목은 : {props.title}, 내용은 : {props.content}</div>
//         </>
//     );
// }

// 2. 매개변수로 props를 받아올 때부터 구조분해
// 매개변수로 구조분해해서 받아올 수 있음
// function FuncPropsEx ({title, content}){

//     return (
//         <>
//             <div>함수형 컴포넌트를 이용하여 (Props) </div>
//             <div>제목은 : {title}, 내용은 : {content}</div>
//         </>
//     );
// }


// 3. proptypes를 이용해서 어떤 props가 넘어올지 명시하는 방법
//  코드가 복잡할수록 오류를 찾기가 어렵기 때문에 명시가 필요
// 유연한 js의 특징으로 인해 예기치 못한 오류가 발생시 명시가 필요
import Proptypes from "prop-types"

function FuncPropsEx ({title, content, number}){

    return (
        <>
            <div>함수형 컴포넌트를 이용하여 (Props) </div>
            <div>제목은 : {title}, 내용은 : {content}, 숫자는 : {number}</div>
        </>
    );
}

// 값이 안넘어왔을때 넣어줄 값
FuncPropsEx.defaultProps = {
    title : "코딩온",
};

// 값이 필수로 넘어와야 되는데 안넘어올 때 .isRequired를 써줌으로써 console에서 발견할 수 있게 함
//     content : Proptypes.string.isRequired,

FuncPropsEx.propTypes = {
    title : Proptypes.string,
    content : Proptypes.string.isRequired,
    number : Proptypes.number
}

export default FuncPropsEx;