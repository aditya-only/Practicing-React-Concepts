import React from 'react'
import { useReducer } from 'react'

const initialState = {
    item: [],
    totalPrice: 0,
}
// There is a glitch in this code because we are using the same id, but we can fix them when working with more then one data
function reducer(state, action) {
    switch (action.type) {

        case "add":
            return {
                ...state,                                    // Bug 1 fixed
                item: [...state.item, action.payload],       // Bug 2 fixed
                totalPrice: state.totalPrice + action.payload.price,
            }

        case "remove":
            const removed = state.item.find(i => i.id === action.payload.id);

            // Guard clause — if item not found, return state unchanged
            if (!removed) return state;
            
            return {                                         // Bug 3 fixed
                ...state,
                item: state.item.filter(i => i.id !== action.payload.id),
                totalPrice: state.totalPrice - removed.price,
            }

        case "clear":
            return initialState;                       // Bug 4 fixed

        default: return state
    }
}

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <section>
            <p>Items: {state.item.length}</p>
            <p>Total Price: ₹{state.totalPrice}</p>

            <button onClick={() =>
                dispatch({ type: "add", payload: { id: 1, name: "Shoe", price: 100 } })
            }>                                              {/* Bug 5 fixed */}
                Add Shoes
            </button>

            <button onClick={() =>
                dispatch({ type: "remove", payload: { id: 1 } })
            }>
                Remove Shoes
            </button>

            <button onClick={() => dispatch({ type: "clear" })}>
                Clear Cart
            </button>
        </section>
    )
}

export default ShoppingCart