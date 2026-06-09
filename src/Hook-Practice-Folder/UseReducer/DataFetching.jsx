import  { useReducer } from 'react'


const initialState = {
    data: null,
    loading: false,
    error: null,
}

function fetchReducer(state, action){
    switch(action.type){
        case "FETCH_START": return {loading: true, data: null, error: null}

        case "FETCH_SUCCESS": return {loading: false, data: action.payload, error: null}

        case "FETCH_ERROR": return {loading: false, data: null, error: action.message}

        default: return state
    }
}

const DataFetching = () => {
    const [state, dispatch] = useReducer(fetchReducer, initialState)

    const fetchUser = async(id) => {
        dispatch({type: "FETCH_START"})

        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            if(!response.ok){
                throw new Error("Failed to Fetch Data")
            }
            const data = await response.json()
            dispatch({type: "FETCH_SUCCESS", payload: data})

        } catch(error){
            dispatch({type: "FETCH_ERROR", message: error.message})
        }

    }

  return <section>
    {state.loading && <p>Loading user....</p>} 

    <button onClick={() => fetchUser(1)}>Fetch User 1</button>
    <button onClick={() => fetchUser(2)}>Fetch User 2</button>
    <button onClick={() => fetchUser(3)}>Fetch User 3</button>

    {state.error && <p>Error: {state.error}</p>}

    {state.data && (
                <div style={{ marginTop: "16px" }}>
                    <p><strong>Name:</strong> {state.data.name}</p>
                    <p><strong>Email:</strong> {state.data.email}</p>
                    <p><strong>City:</strong> {state.data.address.city}</p>
                    <p><strong>Company:</strong> {state.data.company.name}</p>
                </div>
            )}

  </section>
}

export default DataFetching