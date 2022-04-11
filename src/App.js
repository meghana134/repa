import { useState } from 'react';
import './App.css';
import HomePage from './component/HomePage';
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Log from "./Log";


function App() {
  // const [searchTerm,setSearch]=useState("");
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="login" element={<Log />} />
     </Routes>
     <Routes>
     <Route path="/" element={<HomePage />} />
     </Routes>
     <Routes>
     <Route exact path="home" element={<HomePage />} />

     </Routes>
    {/* // <div className="App"> */}
     
      {/* </switch> */}
      {/* <Search/> */}
      {/* <Main></Main> */}

    {/* // </div> */}
    </BrowserRouter>
    </>
  );
}

export default App;
