import React from 'react'
import { useLocation } from 'react-router-dom';

//récupération de la navigation pour active sur la page ou on est



const Header = () => {
    const location = useLocation();

const isActive = (path) => {
  return location.pathname === path ? 'active' : '';
}
  return (
    <div className="container">
<header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
  <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
    <span className="fs-4">Ethan</span>
  </a>

  <ul className="nav nav-pills">
          <li className="nav-item"><a href="/" className={`nav-link ${isActive('/')}`}>Home</a></li>
          <li className="nav-item"><a href="/nombre" className={`nav-link ${isActive('/nombre')}`}>Nombre</a></li>
          <li className="nav-item"><a href="/lettre" className={`nav-link ${isActive('/lettre')}`}>Lettre</a></li>
        </ul>
</header>
</div>
  )
}

export default Header