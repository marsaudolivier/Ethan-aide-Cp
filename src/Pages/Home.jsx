import Header from "../composant/header";

export default function Home() {
    return (
      <div>
        <Header/>
        <div className="container d-flex flex-column justify-content-center align-items-center p-5">
            <h1>Bonjour Ethan</h1>
            <img src="/image/Ethan.jpg" alt="Ethan"  className="img-fluid rounded-circle w-50"/>
        </div>
      
     
        
      </div>
    );
  }