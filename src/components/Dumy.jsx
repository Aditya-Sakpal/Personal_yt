import React,{createContext} from 'react'

export const IdContext=createContext();
const Dumy = (props) => {
    const x=""
    const vId=props.video?.title
   
  return (
    <>
    <IdContext.Provider value={{vId}}>
        {props.children}
    </IdContext.Provider>
    </>
  )
}

export default Dumy