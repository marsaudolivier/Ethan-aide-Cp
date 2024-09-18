import Header from "../composant/header";
import { useState } from "react";
import "../index.css";



export default function LettreMxXm() {

//au click sur un bouton lettre suivante alphabet

  const alphabet = ["ma", "mi", "my", "mo", "mu", "me", "mé", "mè", "am",
                    "im", "ym", "om", "um", "em", "ém", "èm", "um", "mi",
                    "ém", "mo", "im", "ma", "èm", "om", "mu", "me", "mé"];

  const [lettre, setLettre] = useState(alphabet[0]);

  const handleClick = () => {
    document.getElementById("lettre").innerHTML = alphabet[alphabet.indexOf(lettre) + 1];
    setLettre(alphabet[alphabet.indexOf(lettre) + 1]);
  };
    return (
      <div>
        <Header/>
        <div className="container d-flex flex-column justify-content-center align-items-center p-5">
          <div className=" gap-3">
            <p className=" texte text-center" id="lettre">{lettre}</p>
            <button onClick={handleClick} className="btn btn-danger m-2 btn-lg">MAJ</button>
        </div>
        </div>
      </div>
    );
  }