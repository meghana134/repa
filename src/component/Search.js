import React from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

function Search() {
  const [inputSearch, setInputSearch]= useState("");
  return (
    <div className='input'>
   
     <input onChange={e=>setInputSearch(e.target.value)}  value={inputSearch} type="text"
                    placeholder=" Search Services"
                    name="search"></input>
                     {/* <Link to={`/SearchFilter/${inputSearch}`}> */}
                    <SearchIcon className='input_searchbutton'/>
                    {/* </Link> */}
      
   


      
    </div>
  )
}

export default Search