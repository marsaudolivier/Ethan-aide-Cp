import Header from "../composant/header";
import { useState } from "react";
import "../index.css";



export default function LettreMxXm() {

//au click sur un bouton lettre suivante alphabet

  const alphabet = ["ma", "mi", "my", "mo", "mu", "me", "mé", "mè", "am",
                    "im", "ym", "om", "um", "em", "ém", "èm", "um", "mi",
                    "ém", "mo", "im", "ma", "èm", "om", "mu", "me", "mé"];

                    const [index, setIndex] = useState(0);

  const handleClick = () => {
   // Incrémenter l'index de façon circulaire (quand on arrive à la fin, on repart de 0)
   setIndex((prevIndex) => (prevIndex + 1) % alphabet.length);
  };
    return (
      <div>
        <Header/>
        <div className="container d-flex flex-column justify-content-center align-items-center p-5">
          <div className=" gap-3">
          <p className="texte text-center" id="lettre">{alphabet[index]}</p>
            <button onClick={handleClick} className="btn btn-danger m-2 btn-lg">MAJ</button>
        </div>
        </div>
      </div>
    );
  }