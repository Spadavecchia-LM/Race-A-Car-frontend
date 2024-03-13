import { createContext, useEffect, useReducer } from "react";


export const GlobalContext = createContext()


const AppContext = ({children}) => {

    const initialValue = {
        userIsLogged: false,
        userEmail: null,
        user: null,
        autos:[],
        autosFiltrados: null
        
    }
    const reducer = (state,action) => {
        switch(action.type){
            case "LOGIN":
                return {...state, userIsLogged: true}
            case "LOGOUT":
                return {...state, userIsLogged:false, userEmail:null, user:null}
            case "SET_USER":
                return {...state, user: action.payload}
            case "SET_USER_EMAIL":
                return {...state, userEmail: action.payload}
            case "GET_AUTOS":
                return {...state, autos: action.payload}
            case "SET_FILTERED_AUTOS":
                return {...state, autosFiltrados:action.payload}
            
        }
    }



 

    const [state,dispatch] = useReducer(reducer, initialValue)

    const getAutos = async () => {

     

        try{
            const response = await fetch("http://localhost:8085/autos/disponibles")

            if(response.ok){
                const data = await response.json()
                dispatch({type:"GET_AUTOS", payload: data})
            }
            
        }catch(err){
            console.log(err)
        }


    }

    const getUser = async (email) => {
        try{
            const response = await fetch(`http://localhost:8085/usuarios/${email}`,
                {
                    headers:{
                        "Authorization": `Bearer: ${localStorage.getItem("Authorization")}`,
                        "Content-Type": "application/json",
                    
                    }
                }
                )

            if(response.ok){
                const data = await response.json()

                dispatch({type:"SET_USER", payload: data})
            }

        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        if(state.userIsLogged && state.userEmail != null){
            getUser(state.userEmail)
        }
       
    },[state.userIsLogged, state.userEmail])


    
    useEffect(() => {
        getAutos()
    },[])

    console.log(state)
     

    return(
        <GlobalContext.Provider value={{state,dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default AppContext