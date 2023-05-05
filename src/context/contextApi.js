import React ,{createContext,useState,useEffect} from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading,setLoading]=useState(false);
    const [searchResults,setSearchResults]=useState([]);
    const [selectCategories,setSelectCategories]=useState("Trending");
    const [mobileMenu,setMobileMenu]=useState(false);
    
    const [data,setData]=useState([])

    useEffect( ()=>{
       fetchSelectedCategoryData(selectCategories)
    },[selectCategories]);


    
    const fetchSelectedCategoryData = (query) => {
        setLoading(true)
        if(query==="New"){
            setSearchResults(data);
            setLoading(false);
            
        }
        else{
        fetchDataFromApi(`${query}`).then(({contents})=>{
            console.log(contents);
            // https://www.youtube.com/results?search_query=songs
            setSearchResults(contents);
            setLoading(false);
        })
    }
    }

    return (
        <Context.Provider value={{
            loading,
            setLoading,
            searchResults,
            setSelectCategories,
            selectCategories,
            mobileMenu,
            setMobileMenu,
            setData
        }}>
            {props.children}
        </Context.Provider>

    )
}


