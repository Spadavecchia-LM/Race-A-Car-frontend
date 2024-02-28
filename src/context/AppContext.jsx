import { createContext, useReducer } from "react";


export const GlobalContext = createContext()


const AppContext = ({children}) => {

    const initialValue = {
        userIsLogged: false
    }
    const reducer = (state,action) => {
        switch(action.type){
            case "LOGIN":
                return {...state, userIsLogged: true}
            case "LOGOUT":
                return {...state, userIsLogged:false}
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