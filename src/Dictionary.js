import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

   function handleResponse(response) {
    console.log(response.data[0]);
   }

    function search(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

     function handleKeywordChange(event) {
       setKeyword(event.target.value);
     }
    return (
      <div className="Dictionary">
        <p>What word do you want to look up?</p>
        <form onSubmit={search}>
            <input type="search"  onChange={handleKeywordChange}/>
            <input type="submit" />
        </form>
      </div>
    );
}