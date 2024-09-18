import Header from "../composant/header";
import { useState } from "react";
import "../index.css";

export default function LettreLxXl() {
  // Alphabet de lettres
  const alphabet = [
    "lo", "li", "la", "lu", "le", "lé", "lè", "ly", "al", "ul", "él", "yl", 
    "ol", "el", "il", "èl", "la", "yl", "lu", "ol", "le", "ul", "al", "lé", 
    "lo", "li", "lè", "él", "il", "el"
  ];

  // État pour stocker l'index courant
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    // Incrémenter l'index de façon circulaire (quand on arrive à la fin, on repart de 0)
    setIndex((prevIndex) => (prevIndex + 1) % alphabet.length);
  };

  return (
    <div>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center p-5">
        <div className="gap-3">
          {/* Affichage de la lettre actuelle */}
          <p className="texte text-center" id="lettre">{alphabet[index]}</p>
          {/* Bouton pour changer la lettre */}
          <button onClick={handleClick} className="btn btn-danger m-2 btn-lg">
            MAJ
          </button>
        </div>
      </div>
    </div>
  );
}
