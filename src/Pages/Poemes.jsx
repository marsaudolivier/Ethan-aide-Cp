
import Header from "../composant/header";
import "../index.css";
import Poesierentre from "../composant/poesie/Poesierentre";
import { useState } from "react";




export default function Poemes() {
  const [poesierentre, setPoesierentre] = useState(false);
  //fonction pour afficher la poesierentre et au click enlever le bouton handlePoesierentre

  const handlePoesierentre = () => {
    setPoesierentre(true);
    document.getElementById("retour").style.display = "block";
    document.getElementById("poesierentre").style.display = "none";
  }
  //bouton retour
  const handleRetour = () => {
    setPoesierentre(false);
    document.getElementById("poesierentre").style.display = "block";
    document.getElementById("retour").style.display = "none";
  }
 
    return (
      <div>
        <Header/>
        <div className="d-flex justify-content-center">
          {/* bouton affiché a gauche et retour a droite */}
        <button onClick={handlePoesierentre} className="btn btn-primary" id="poesierentre">Afficher Quelle belle rentrée !</button>
        <button onClick={handleRetour} className="btn btn-primary m-3 none " id="retour">Retour</button>
        </div>
        {poesierentre && <Poesierentre/>}

      


      
  
        
        
      
      </div>
    );
  }