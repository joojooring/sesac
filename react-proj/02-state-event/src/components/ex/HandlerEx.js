import {Component} from "react";

class HandlerEx extends Component {
    state = {
        txt : "Hello World!"
    }

    clickFunc = () => {
        this.setState({txt: "Goodbye World!"})

    }

    render(){
        // const {txt} = this.state
        return(
            <>

            <h1>{this.state.txt}</h1>
            <br />
            <button onClick={this.clickFunc} >

            클릭해줘</button>
            </>
        )
    }
}

export default HandlerEx;