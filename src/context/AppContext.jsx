import { createContext, useEffect, useReducer } from "react";
import { createBrowserHistory } from 'history';

export const GlobalContext = createContext()


const AppContext = ({ children }) => {

    const initialValue = {
        userIsLogged: false,
        userEmail: null,
        user: null,
        autos: [],
        autosFiltrados: null,
        autosEntreFechas: [],
        favoritos: [],
        fechas: null,
        reservaSeleccionada: null,
        fechaInicioReserva: "",
        fechaFinReserva:"",
        reservasUsuario: []

    }
    const reducer = (state, action) => {
        switch (action.type) {
            case "LOGIN":
                return { ...state, userIsLogged: true }
            case "LOGOUT":
                localStorage.removeItem("favoritos")
                localStorage.removeItem("Authorization")
                return { ...state, userIsLogged: false, userEmail: null, user: null, favoritos: [] }
            case "SET_USER":
                return { ...state, user: action.payload }
            case "SET_USER_EMAIL":
                return { ...state, userEmail: action.payload }
            case "GET_AUTOS":
                return { ...state, autos: action.payload }
            case "SET_FILTERED_AUTOS":
                return { ...state, autosFiltrados: action.payload }
            case "SET_AUTOSENTREFECHAS":
                return { ...state, autosEntreFechas: action.payload }
            case "ADD_FAV":
                return { ...state, favoritos: [...state.favoritos, action.payload] };
            case "GET_FAVS":
                return { ...state, favoritos: action.payload };
            case "ELIMINAR_FAV":
                return {
                    ...state,
                    favoritos: state.favoritos.filter((fav) => fav.id !== action.payload),
                };

            case "SET_FECHAS":
                return { ...state, fechas: action.payload }

            case "SET_RESERVA":
                return {...state, reservaSeleccionada: action.payload}
            case "SET_INICIO_RESERVA":
                return {...state, fechaInicioReserva: action.payload}
            case "SET_FIN_RESERVA":
                return {...state, fechaFinReserva: action.payload}
            case "GET_RESERVAS_USUARIO":
                return {...state, reservasUsuario: action.payload}
        }



    }

    

    useEffect(() => {
        window.onbeforeunload = () => {
            history.push('/');
          };
    }, [history]);

    const [state, dispatch] = useReducer(reducer, initialValue)

    const getAutos = async () => {



        try {
            const response = await fetch(import.meta.env.VITE_BACKENDURL + "/autos/disponibles")
            console.log(response)
            if (response.ok) {
                const data = await response.json()
                dispatch({ type: "GET_AUTOS", payload: data })
            }

        } catch (err) {
            console.log(err)
        }


    }

    const getUser = async (email) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKENDURL}/usuarios/${email}`,
                {
                    headers: {
                        "Authorization": `Bearer: ${localStorage.getItem("Authorization")}`,
                        "Content-Type": "application/json",

                    }
                }
            )

            if (response.ok) {
                const data = await response.json()

                dispatch({ type: "SET_USER", payload: data })
            }

        } catch (err) {
            console.log(err)
        }
    }
    const getReservas = async (id) => {
        try{
            const response = await fetch(import.meta.env.VITE_BACKENDURL + "/reservas/" + id)

            if(response.ok){
                const data = await response.json()
                dispatch({type:"GET_RESERVAS_USUARIO", payload: data.reverse()})
            }
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        if (state.userIsLogged && state.userEmail != null) {
            getUser(state.userEmail)
           
        }

    }, [state.userIsLogged, state.userEmail])

    useEffect(() => {
        if(state.user != null){
            getReservas(state.user.id)
        }
    
    },[state.user])



    useEffect(() => {
        getAutos()
    }, [])

    useEffect(() => {
        if (!state.userIsLogged) {
            localStorage.removeItem("favoritos")
            dispatch({ type: "GET_FAVS", payload: [] })
        }

    }, [state.userIsLogged])

    console.log(state)


    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default AppContext