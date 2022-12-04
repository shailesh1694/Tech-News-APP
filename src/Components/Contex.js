import React, { useEffect, useReducer, createContext, useContext } from 'react'
import  reducer  from './reducer';
//When Component first time mount that time call API

//here show both hook reducer and contect use it most important !


//initialvalue that can be declared for reducer hook
const initialvalue = {
    isloading: false,
    query: "html",
    hits: [],
    page: 0,
    nbPages: 0
};
//Heree use contexct api hook first createContext
const Appcontext = createContext();
//app provider main components

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialvalue);

    let API = "https://hn.algolia.com/api/v1/search?";


    //Feth Data form API
    const fetchdata = async (url) => {
        dispatch({ type: "GET_LOADING" })
        try {
            let data = await fetch(url);
            data = await data.json();
            console.log(data)
            dispatch({
                type: "GET_DATA", payload: {
                    hits: data.hits, page: data.page, nbPages: data.nbPages
                }
            })
        } catch (error) {
            console.log(error)
        }

        // let data = fetch(api).then((response)=>{return response.json()}).then((result)=>{console.log(result)})
    }
        // here serachdata function 
       const  serchdata=(value)=>{
        // console.log(value);
        dispatch({type:"SERCHDATA",payload:value})
       }
       //remove item functionallity
      const removeitem =(id)=>{
                // console.log(id)
                dispatch({type:"REMOVEITEM",payload:id})
      }
      //pagination for next and previous page
      const nextpage =()=>{
      dispatch({type:"NEXTPAGE"})
        
      }
      const prevpage =(page)=>{
        
        
            dispatch({type:"PREVPAGE"})
        
      }

    //Here lern that useeffect call only in under component not allowed to out of components
    useEffect(() => {

        fetchdata(`${API}query=${state.query}&page=${state.page}`);
        return () => {

        }
    }, [state.query,state.page])

    //here main component of App Provider return value;

    return (
        <Appcontext.Provider value={{ ...state,serchdata,removeitem,nextpage,prevpage}}>
            {children}
        </Appcontext.Provider>

    );

}

//cutom hook created 
const useGetdata = () => {
    return useContext(Appcontext);
}
export { Appcontext, AppProvider, useGetdata }
















