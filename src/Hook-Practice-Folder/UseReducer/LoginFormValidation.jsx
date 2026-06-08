import { useReducer } from 'react'

const initialState = {
    email: "",
    password: "",
    loading: false,
    error: null,
}

function formReducer(state, action){
    switch(action.type){
        case "FIELD_CHANGE": return {...state, [action.field]: action.value}

        case "SUBMIT_START": return {...state, loading: true, error: null}

        case "SUBMIT_SUCCESS": return {...state, loading: false, error: null}

        case "SUBMIT_ERROR": return {...state, loading: false, error: action.message}
    }
}




const LoginFormValidation = () => {

    const [state, dispatch] = useReducer(formReducer, initialState)

    const handleSubmit = () => {
        dispatch({type: "SUBMIT_START"})

        setTimeout(() => {
            if(state.email === "wrong@email.com"){
                dispatch({type: "SUBMIT_ERROR", message: "Invalid Credentials!"})
            } else{
                dispatch({type: "SUBMIT_SUCCESS"})
            }
        }, 1500);
    }

  return <section>
        <input 
        type="email" 
        placeholder="Email" 
        value={state.email}
        onChange={(e) => 
        dispatch({type: "FIELD_CHANGE", field: "email", value: e.target.value})} />
       
        <input 
        type="password" 
        placeholder="Password" 
        value={state.password}
        onChange={(e) => 
        dispatch({type: "FIELD_CHANGE", field: "password", value: e.target.value})} />

        {state.error && <P>{state.error}</P>}

        <button onClick={handleSubmit} disabled={state.loading}>{state.loading ? "Logging in..." : "Login"}</button>

  </section>
}

export default LoginFormValidation