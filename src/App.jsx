import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Nombre from "./Pages/Nombre";
import Lettre from "./Pages/Lettre";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/nombre" element={<Nombre />} />
      <Route path="/lettre" element={<Lettre />} />
     
     
   
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
