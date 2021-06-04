import React from "react";
import "./Phonetics.css";
import { GiSpeaker } from "react-icons/gi";


export default function Phonetics(props) {

  const audio = new Audio(props.phonetic.audio);

  function handleClick() {
    audio.play();
  }
   return (
     <div className="Phonetics">
       <span>
         {props.phonetic.text}{" "}
         <button type="button"
          
           target="_blank"
           rel="noreferrer"
           className="speaker-icon"
           onClick={handleClick}
         >
           <GiSpeaker />
         </button>
       </span>
     </div>
   );
}