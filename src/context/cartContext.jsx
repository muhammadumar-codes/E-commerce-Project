import { createContext ,useReducer} from "react";
const cartContext=createContext();

function reducer(state ,action) {
    switch (action.type) {
       case "INCREMENT":
        return {count:state.count +1}
        case "DECREMENT":
            return {count:state.count-1}
        case "RESET":
            return {count:0}

    }
    
}

export default function CartContextProvider ({children}) {
    const [state ,dispatch]=useReducer(reducer({count:0}))
    return (
        <>
        <cartContext.Provider value={{state,dispatch}}>
{children}
            </cartContext.Provider>
        </>
    )

    
}




