
import { useState, useReducer } from 'react'


function reducer(state, action){
    
    console.log("reducer hit")
    switch(action.type){
        case "increment": return {count: state.count + 1}
        case "decrement": return {count: state.count - 1}
        default: return state
    }
}
const Counter = () => {
    
    const [state, dispatch] = useReducer(reducer, {count: 0})

  return <section>

        <h1>{state.count}</h1>

        <button onClick={() => dispatch({type: "increment"})}>Increment</button>
        <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
  </section>
}

export default Counter