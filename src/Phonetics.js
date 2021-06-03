import React from "react";
import "./Phonetics.css";
import { GiSpeaker } from "react-icons/gi";

export default function Phonetics(props) {
   return (
     <div className="Phonetics">
       <span>
         {props.phonetic.text}{" "}
         <a href={props.phonetic.audio} target="_blank" rel="norefferer" className="speaker-icon"><GiSpeaker /></a>
       </span>
     </div>
   );
}