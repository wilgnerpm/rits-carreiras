import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logotipo-white.svg';
export default function Header() {
  return (
    <div >
      <header className='header'>
          <div className='header-logo'>
 <Link to='/carreiras'><img src={logo} alt="Logo " /></Link>
          </div>
        <nav className='header-nav'>
          <Link to="/dashboard">A RITS</Link>
          <Link to="/dashboard">NOSSOS VALORES</Link>
          <Link to="/carreiras" className="btn btn-green">VAGAS ABERTAS</Link>
        </nav>
      </header>
    </div>
  );
}
