import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import JSONDATA from "./Mock.json";

function Search() {
  const [inputSearch, setInputSearch] = useState("");
  const [searchTerm,setSearchTerm]=useState("");
  return (
    <div className="input">
      <input
        onChange={(event) => {setSearchTerm(event.target.value)}}
        // value={inputSearch}
        type="text"
        placeholder=" Search Services"
        name="search"
      />
      {JSONDATA.filter((val)=>{
        if(searchTerm == " "){
        return val
        }
        else if (val.search.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }

      }).map((val, key) => {
        return (
          <div className="searchp" key={key}>
            <p>{val.search}</p>
          </div>
        );
      })}

      <SearchIcon className="input_searchbutton" />
    </div>
  );
}

export default Search;
