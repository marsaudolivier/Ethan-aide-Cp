import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Nombre from "./Pages/Nombre";
import Lettre from "./Pages/Lettre";
import Poemes from "./Pages/Poemes";
import LettreLxXl from "./Pages/LettreLxXl";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/nombre" element={<Nombre />} />
      <Route path="/lettre" element={<Lettre />} />
      <Route path="/lettreLxXl" element={<LettreLxXl />} />
      <Route path="/poemes" element={<Poemes />} />
     
     
   
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
