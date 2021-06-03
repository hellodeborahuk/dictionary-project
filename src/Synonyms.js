import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
console.log(props.synonyms);
if (props.synonyms) {
    return (
        <ul className="Synonyms">
            <strong>Synonyms:</strong>
        {props.synonyms.map(function(synonym, index) {
            return (
              <li key={index}>
                {synonym}
              </li>
            );
        })}
        </ul>
    )
} else {
    return null;
}
}