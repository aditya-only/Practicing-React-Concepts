// (Login, Register, Forgot Password screens)
// Every app has auth. 
// This is important because it tests whether you can manage screen switching + form state + API states together.

import { useReducer } from "react";

const initialState = {
    screen: "login",
    name: "",
    email: "",
    password: "",
    loading: false,
    error: "",
    successMessage: "",
}
function authReducer(state, action){
    switch(action.type){

        case "UPDATE_FIELD": return{...state,
            ...state,
            [action.field]: action.value,
            error: null

        }

        case "SWITCH_SCREEN": return{...initialState, screen: action.screen }

        case "AUTH_START": return{...state, loading: true, error: null}
        
        case "AUTH_SUCCESS": return{...state, loading: false, successMessage: action.message}

        case "AUTH_ERROR": return{...state, loading: false, error: action.message}


    }
}
const AuthenticationFlow = () => {
    const [state, dispatch] = useReducer(authReducer, initialState)

function handleField(field, value){
    dispatch({type:"UPDATE_FIELD" ,field, value})
}

function handleSubmit(){
    dispatch({type: "AUTH_START"})
    
    setTimeout(() => {
        if(!state.email.includes("@")){
            dispatch({type: "AUTH_ERROR", message: "Enter a valid email!"})
        } else{
            dispatch({type: "AUTH_SUCCESS", message: "Login successfully!"})
        }
    }, 1500);
}


  return (
    <div>
        {state.screen === "login" && <section>
            <h2>Login</h2>
            <input 
            placeholder="EMAIL"
            value={state.email}
            onChange={e => handleField("email", e.target.value)}
            />    
            <input 
            placeholder="PASSWORD"
            value={state.password}
            onChange={e => handleField("password", e.target.value)}
            />    

            <button onClick={handleSubmit} disabled={state.loading}>
                    {state.loading ? "Logging in....": "Login"}
            </button> 

            <button onClick={() => dispatch({type: "SWITCH_SCREEN", screen: "register"})}>Register</button>

            <button onClick={() => dispatch({type: "SWITCH_SCREEN", screen: "forgot"})}>Forget Crendential?</button>

            {state.error ? state.error: state.successMessage }

            </section>
        }
        
            {state.screen === "register" && <section>
                <h2>Register</h2>
                <input type="text" 
                    placeholder="FullName"
                    value={state.name}
                    onChange={e => handleField("name", e.target.value)}
                />
                <input type="text" 
                    placeholder="Email"
                    value={state.email}
                    onChange={e => handleField("email", e.target.value)}
                />
                <input type="text" 
                    placeholder="Password"
                    value={state.password}
                    onChange={e => handleField("password", e.target.value)}
                />

                <button onClick={handleSubmit} disabled={state.loading}>{state.loading ? "Registering...": "Register"}</button>
                
                {state.error ? state.error : state.successMessage}

                <button onClick={() => dispatch({type: "SWITCH_SCREEN", screen: "login"})}>Already Have an Account?</button>
            </section>
            }
        {state.screen === "forgot" && <section>
            <h2>Recovery</h2>
            <input type="text" 
            placeholder="Enter your Email"
            value={state.email}
            onChange={e => handleField("email", e.target.value)}
            />

            <button onClick={handleSubmit} disabled={state.loading}>{state.loading ? "Sending...": "Send Reset Link"}</button>

            <button onClick={dispatch({type: "SWITCH_SCREEN", screen: "login"})}>Back To Login</button>
        </section> }
        

    </div>
)
}

export default AuthenticationFlow