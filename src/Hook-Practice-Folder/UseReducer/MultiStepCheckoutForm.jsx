import {useReducer} from 'react'

const initialState = {
    step: 1,
    personalInfo : {
        name: "",
        email: "",
        phone: "",
    },
    shippingAddress : {
        street: "",
        city: "",
        pincode: "",
    },
    payment : {
        cardNumber: "",
        expiry: "",
    },

    submitted: false
}

function checkoutReducer(state, action){
    switch (action.type){
        case "NEXT_STEP": return {...state, step: state.step + 1}

        case "PREV_STEP": return {...state, step: state.step - 1}

        case "UPDATE_PERSONAL": return {...state,
            personalInfo:{
                ...state.personalInfo,
                [action.field]: action.value}           
            } 

        case "UPDATE_SHIPPING": return {...state,
            shippingAddress: {
                ...state.shippingAddress,
                [action.field]: action.value }
        }

        case "UPDATE_PAYMENT": return {...state,
            payment: {
                ...state.payment,
                [action.field]: action.value }
        }

        case "SUBMIT": return {...state, submitted: true, step: state.step - 3}

        default:
             return state
    }
}

const MultiStepCheckoutForm = () => {
    const [state, dispatch] = useReducer(checkoutReducer, initialState)

    function handleChange(actionType, field, value){
        dispatch({type: actionType, field, value})
    }

  return ( 
    <div>

    {state.step === 1 &&  <section>
                <h2>STEP 1 - Personal Information</h2>
                <input  
                placeholder="Name"
                value={state.personalInfo.name}
                onChange={e => handleChange("UPDATE_PERSONAL", "name", e.target.value)}
                />
                <input  
                placeholder="Email"
                value={state.personalInfo.email}
                onChange={e => handleChange("UPDATE_PERSONAL", "email", e.target.value)}
                />
                
                <input 
                placeholder="Phone"
                value={state.personalInfo.phone}
                onChange={e => handleChange("UPDATE_PERSONAL", "phone", e.target.value)}
                />
    
                <button onClick={() => dispatch({type: "NEXT_STEP"})}>Next</button>
            </section> 
    } 
        

    {state.step === 2 && <section>
                <h2>STEP 2 - Shipping Address</h2>
                <input 
                placeholder="Street"
                value={state.shippingAddress.street}
                onChange={e => handleChange("UPDATE_SHIPPING", "street", e.target.value)}
                />
                <input 
                placeholder="City"
                value={state.shippingAddress.city}
                onChange={e => handleChange("UPDATE_SHIPPING", "city", e.target.value)}
                />
                <input 
                placeholder="Pincode"
                value={state.shippingAddress.pincode}
                onChange={e => handleChange("UPDATE_SHIPPING", "pincode", e.target.value)}
                />
    
                <button onClick={() => dispatch({type: "PREV_STEP"})}>BACK</button>
                <button onClick={() => dispatch({type: "NEXT_STEP"})}>NEXT</button>
            </section>
    }
            

   {state.step === 3 && <section>
            <h2>STEP 3 - Payment</h2>

            <input 
            placeholder="CardNumber"
            value={state.payment.cardNumber}
            onChange={e => handleChange("UPDATE_PAYMENT", "cardNumber", e.target.value)}
            />

            <input 
            placeholder="Expiry"
            value={state.payment.expiry}
            onChange={e => handleChange("UPDATE_PAYMENT", "expiry", e.target.value)}
            />
            <button onClick={() => dispatch({type: "PREV_STEP"})}>BACK</button>
            <button onClick={() => dispatch({type: "SUBMIT"})}>PLACE ORDER</button>

        </section>
    }
        

   {state.submitted && <section>
            <h2>🎉 Order Placed Successfully!</h2>
            <p>Thank you, {state.personalInfo.name}!</p>
            <p>Shipping to: {state.shippingAddress.city}</p>
        </section> }
  </div>
  )
}

export default MultiStepCheckoutForm