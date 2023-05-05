import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import React,{useState,useEffect} from "react";
// import Api from "./utils/Api";
// import Api from "./utils/api";
// import { useState } from "react";
import Header from "./components/Header";
import Feed from "./components/Feed";
import LeftNav from "./components/LeftNav";
import LeftNavMenuItem from "./components/LeftNavMenuItem";
import SearchResult from "./components/SearchResult";
import SuggestionVideoCard from "./components/SuggestionVideoCard";
import VideoCard from "./components/VideoCard";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";

// function App() {
//   const [data,setData]=useState(null);
//   const getData = (data) => {
//     console.log(data);
//     // <Api data={data}/>
//     setData(data);
//   }

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Login onSubmit={getData}/>} />
//         <Route path="/home" element={<Home data={data} />} />
//       </Routes>
//       </>
//   );
// }

function App(){
  return(
    <>
    <AppContext>
      {/* <BrowserRouter> */}
      <div className="flex flex-col h-full">
        {/* <Header/> */}
        <Routes>
          {/* <Route  path="/" exact element={<Feed/>}/> */}
          <Route path="/" exact element={<Login/>}/>
          <Route path="/feed" exact element={<Feed/>}/>
          <Route path="/searchResult/:searchQuery" element={<SearchResult/>}/>
          <Route path="/video/:id" element={<VideoDetails/>}/>
        </Routes>
      </div>
      {/* </BrowserRouter> */}
    </AppContext>
    </>
  );
}

export default App;
