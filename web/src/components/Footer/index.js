import React from 'react';
import { Link} from 'react-router-dom'
import logo from '../../assets/logotipo-black.svg';
import {Container} from './styles'

export default function Footer() {
  return (
    <Container>
<div className='footer'>
        <div className='footer-content'>
 <img className='footer-logo' src={logo} alt="Logo " />
          <div className='footer-text'>
            <strong>Rits Tecnologia. Todos os direitos reservados.</strong><br/>
            Desenvolver e evoluir soluções digitais para negócios que acreditam na tecnologia como força propulsora.
          </div>
          <div className="footer-site" >
          <a href="https://rits.dev/">Rits.com.br</a>
          <Link to={{
    pathname: `/sigin`,

  }}  >Dashboard</Link>
          </div>

 </div>
    </div>
    </Container>

  );
}
