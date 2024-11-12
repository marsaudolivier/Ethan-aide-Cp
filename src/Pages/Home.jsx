import Header from "../composant/header";

export default function Home() {
  console.log(window.screen.orientation.type)
    return (
      <div>
        <Header/>
        <div className="container d-flex flex-column justify-content-center align-items-center p-5">
            <h1>Bonjour Ethan</h1>
            <img src="assets/images/Ethan.jpg" alt="Ethan"  className="img-fluid rounded-circle w-50"/>
        </div>
      
     
        
      </div>
    );
  }