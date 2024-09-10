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
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <p className=" texte">{nombre}</p>
          <div className="d-flex">
          <button onClick={incrementer} className="btn btn-primary m-2 btn-lg">+</button>
          <button onClick={decrementer} className="btn btn-primary m-2 btn-lg">-</button>
          <button onClick={reset} className="btn btn-primary m-2 btn-lg">Reset</button>
        </div>
        </div>
      
      </div>
    );
  }