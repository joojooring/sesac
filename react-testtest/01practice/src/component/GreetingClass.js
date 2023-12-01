
import { Component } from "react"

class GreetingClass extends Component {

    state = {msg : "쥬쥬밥"}

    render() {

        return(
        <>
        <div>{this.state.msg}</div>
        <button onClick={()=>{
            this.setState({msg:"쥬쥬링릴ㅇ리이링"})
        }}>클릭!</button>
        </>
        )
    }
};

export default GreetingClass;