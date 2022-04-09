import { useState } from 'react';
import './App.css';
import CarouselContainer from './component/CarouselContainer';
import Services from './Services';
import Launch from './component/Launch';
// import Main from './component/Main.js';
// import Search from './component/Search';
import Choose from './component/Choose';
import Work from './component/Work';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Location from './component/Location';
import SearchFilter from './component/SearchFilter';
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";


function App() {
  const [searchTerm,setSearch]=useState("");
  return (
    <>
     {/* <BrowserRouter> */}
    {/* // <div className="App"> */}
      <CarouselContainer />
      {/* <switch> */}
      {/* <Route path="/SearchFilter/:searchTerm"> */}
      {/* <SearchFilter/> */}
      {/* </Route> */}
     
      <Services/>
      <Launch/>
      <Choose/>
      <Work/>
      <Contact/>
      <Footer/>
      {/* </switch> */}
      {/* <Search/> */}
      {/* <Main></Main> */}

    {/* // </div> */}
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
