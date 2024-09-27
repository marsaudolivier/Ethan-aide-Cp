import Header from "../composant/header";
import "../index.css";
import Poesierentre from "../composant/poesie/Poesierentre";
import Poesierentre2 from "../composant/poesie/Poesierentre2";
import { useState } from "react";

export default function Poemes() {
  const [showPoesierentre, setShowPoesierentre] = useState(false);
  const [showPoesierentre2, setShowPoesierentre2] = useState(false);

  const handlePoesierentre = () => {
    setShowPoesierentre(true);
    setShowPoesierentre2(false); // Hide the other component
    document.getElementById("retour").style.display = "block";
  };

  const handleVillanelle = () => {
    setShowPoesierentre2(true);
    setShowPoesierentre(false); // Hide the other component
    document.getElementById("retour").style.display = "block";
  };

  const handleRetour = () => {
    setShowPoesierentre(false);
    setShowPoesierentre2(false);
    document.getElementById("retour").style.display = "none";
  };

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center">
        {/* Bouton pour afficher Quelle belle rentrée ! */}
        <button
          onClick={handlePoesierentre}
          className="btn btn-primary m-2"
          id="poesierentre"
        >
          Afficher Quelle belle rentrée !
        </button>

        {/* Bouton pour afficher Villanelle */}
        <button
          onClick={handleVillanelle}
          className="btn btn-primary m-2"
          id="Villanelle"
        >
          Villanelle
        </button>
      </div>

      {/* Affichage conditionnel des composants */}
      {showPoesierentre && <Poesierentre />}
      {showPoesierentre2 && <Poesierentre2 />}

      <div className="d-flex justify-content-center">
        {/* Bouton retour */}
        <button
          onClick={handleRetour}
          className="btn btn-primary m-3"
          id="retour"
          style={{ display: "none" }}
        >
          Retour
        </button>
      </div>
    </div>
  );
}
