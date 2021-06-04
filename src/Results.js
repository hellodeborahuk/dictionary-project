import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="results-word">
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
        </div>
        {props.results.meanings.map(function (meaning, index) {
          return (
        
              <Meaning meaning={meaning} key={index} />
      
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
