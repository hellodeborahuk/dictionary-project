import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import { FaSearch } from "react-icons/fa";


export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    
   function handleResponse(response) {
    setResults(response.data[0]);
   }

    function handleSubmit(event) {
      event.preventDefault();
      search()
    }
      function search(keyword) {
        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
      }

    
     function handleKeywordChange(event) {
       setKeyword(event.target.value);
     }
    return (
      <div className="Dictionary">
        <p className="search-question">What word do you want to look up?</p>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleKeywordChange}
            className="form-input"
          />
          <button type="submit" className="form-submit">
            <FaSearch />
          </button>
        </form>
        <div className="hint">
          suggested words: yoga, sunrise, happy, tomato...
        </div>
        <Results results={results} />
      </div>
    );
}