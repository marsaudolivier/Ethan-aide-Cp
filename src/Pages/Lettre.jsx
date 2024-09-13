import Header from "../composant/header";
import { useState } from "react";
import "../index.css";



export default function Lettre() {

//au click sur un bouton lettre suivante alphabet

  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const alphabetMinus = ["a", "b", "c", "d", "e","é", "è", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const [lettre, setLettre] = useState(alphabet[0]);
  const [lettreMinus, setLettreMinus] = useState(alphabetMinus[0]);

  const handleClick = () => {
    document.getElementById("lettre").innerHTML = alphabet[alphabet.indexOf(lettre) + 1];
    setLettre(alphabet[alphabet.indexOf(lettre) + 1]);
  };
  const handleClickMinus = () => {
    document.getElementById("lettre").innerHTML = alphabetMinus[alphabetMinus.indexOf(lettreMinus) + 1];
    setLettreMinus(alphabetMinus[alphabetMinus.indexOf(lettreMinus) + 1]);
  };
  // bouton random
  const handleRandom = () => {
    document.getElementById("lettre").innerHTML = alphabet[Math.floor(Math.random() * alphabet.length)];
    setLettre(alphabet[Math.floor(Math.random() * alphabet.length)]);
  };
  const handleRandomMinus = () => {
    document.getElementById("lettre").innerHTML = alphabetMinus[Math.floor(Math.random() * alphabetMinus.length)];
    setLettreMinus(alphabetMinus[Math.floor(Math.random() * alphabetMinus.length)]);
  };
    return (
      <div>
        <Header/>
        <div className="container d-flex flex-column justify-content-center align-items-center p-5">
          <div className=" gap-3">
            <p className=" texte text-center" id="lettre">{lettre}{lettreMinus}</p>
            <button onClick={handleClick} className="btn btn-danger m-2 btn-lg">MAJ</button>
            <button onClick={handleRandom} className="btn btn-danger m-2 btn-lg">X</button>
            <button onClick={handleClickMinus} className="btn btn-success  m-2 btn-lg">MIN</button>
            <button onClick={handleRandomMinus} className="btn btn-success m-2 btn-lg">x</button>
        </div>
        </div>
      </div>
    );
  }