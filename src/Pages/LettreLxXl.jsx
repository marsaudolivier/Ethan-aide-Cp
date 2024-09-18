import Header from "../composant/header";
import { useState } from "react";
import "../index.css";



export default function LettreLxXl() {

//au click sur un bouton lettre suivante alphabet

  const alphabet = ["lo", "li", "la", "lu", "le", "lé", "lè", "ly", "al", "ul",
                    "él", "yl", "ol", "el", "il", "èl", "la", "yl", "lu", "ol",
                    "le", "ul", "al", "lé", "lo", "li", "lè", "él", "il", "el"];

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