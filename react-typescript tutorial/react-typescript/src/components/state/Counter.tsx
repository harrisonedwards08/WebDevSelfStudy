import { useReducer } from "react";


type CounterProps = {
    payload: number
}



type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type ResetAction = {
    type: 'reset'
}

//define counter state type
type CounterState ={
    count:number
}


//redefine CounterAction type as a union of UpdateAction and ResetAction,
//then passed to useReducer
//Discriminated Unions
type CounterAction = UpdateAction | ResetAction

//initial state object
const initialState = {count:0}


//reducer function responsible for updating the state
function reducer (state: CounterState,action:CounterAction){

    //switch statement
    switch(action.type){
        case 'increment':
            return {count:state.count + action.payload}
        case 'decrement':
            return {count:state.count - action.payload}
        case 'reset':
            return initialState
        default:
            return state}
}

export const Counter = (props:CounterProps) => {

    //Counter function returns state and dispatch 
    const [state,dispatch] = useReducer(reducer, initialState)
    return (
        <>
        <h1>Counter</h1>
        Count: {state.count}<br></br>
        <button onClick = {() => dispatch({type: 'increment', payload: props.payload})}>
            Increment {props.payload}
        </button>

        <button onClick = {() => dispatch({type: 'decrement', payload: props.payload})}>
            Decrement {props.payload}
        </button>

        <button onClick = {() => dispatch({type: 'reset'})}> 
            Reset
        </button>
        </>
    )
}