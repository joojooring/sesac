import {Component} from "react";

class StateClassPrac extends Component {

    constructor(props){
        super(props);
        this.state = {
            number1:0,
            number2:0

        }
    };

    render () {
        return(
            <>
            <div>
            2씩 증가합니다. : {this.state.number1}
            <button onClick={()=>{
                this.setState((prevState)=>({number1 : prevState.number1 +2 }));

            }}>버튼+2</button>
            </div>

            <div>
            1씩 감소합니다. : {this.state.number2}
            <button onClick={()=>{
                this.setState((prevState)=>({number2 : prevState.number2 -1 }));

            }}>버튼-1</button>
            </div>
            </>
        )

    }
};

export default StateClassPrac;

