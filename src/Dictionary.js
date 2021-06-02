import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
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