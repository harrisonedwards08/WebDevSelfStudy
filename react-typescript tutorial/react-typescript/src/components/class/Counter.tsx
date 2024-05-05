import { Component } from "react";


type CounterProps = {
    message: string
}

type CounterState = {
    count: number

}

export class Counter1 extends Component<CounterProps, CounterState>{
    state = {
        count: 0,
    }


handleClick = () => {
    this.setState((prevState) => ({count: prevState.count + 1}))

}

render(){
    return (
        <div>
        <button onClick = {this.handleClick}>Increment</button> <br></br> 
        {this.props.message} {this.state.count}
        </div>
    )
}

}