import Header from "../composant/header";
import { useState } from "react";
import "../index.css";
export default function Nombre() {
  const [nombre, setNombre] = useState(0);
  //fonction pour incrémenter le nombre
  const incrementer = () => {
    setNombre(nombre + 1);
  }
  //fonction pour décrémenter le nombre
  const decrementer = () => {
    setNombre(nombre - 1);
  }
  //fonction pour reset le nombre
  const reset = () => {
    setNombre(0);
  }
    return (
      <div>
        <Header/>
        <div className="container d-flex flex-column justify-content-center align-items-center p-5">
          <p className=" texte">{nombre}</p>
          <div className="d-flex gap-3">
          <button onClick={incrementer} className="btn btn-primary">+</button>
          <button onClick={decrementer} className="btn btn-primary">-</button>
          <button onClick={reset} className="btn btn-primary">Reset</button>
        </div>
        </div>
      
      </div>
    );
  }