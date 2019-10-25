import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logotipo-black.svg';
import { Container, Content, Profile } from './styles';
export default function HeaderDashboard() {
  return (
    <Container >
      <header className='header-dashboard'>
        <div className='header-content'>
        <div className='header-logo'>
 <Link to='/carreiras'><img src={logo} alt="Logo " /></Link>
          </div>
        <nav className='header-nav'>
        </nav>
        <Profile>
            <div>
              <strong>wiglner</strong>
              <Link to="profile">Sair</Link>
            </div>
            <img
              src={

                'https://api.adorable.io/avatars/200/abott@adorable.png'
              }
              alt="Wilgner Pinheiro"
            />
          </Profile>

        </div>

      </header>
    </Container>
  );
}
