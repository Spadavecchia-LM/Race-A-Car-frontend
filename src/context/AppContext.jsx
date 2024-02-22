import { createContext, useReducer } from "react";


export const GlobalContext = createContext()


const AppContext = ({children}) => {

    const initialValue = {
        detailRef:null
    }
    const reducer = (state,action) => {
        switch(action.type){
            case "SET_REF":
                return {...state, detailRef: action.payload}
        }
    }
    const [state,dispatch] = useReducer(reducer, initialValue)
     

    return(
        <GlobalContext.Provider value={{state,dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default AppContext