import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/logotipo-black.svg';
import { Container,  Profile } from './styles';
import {signOut } from '../../store/modules/auth/actions'
import { store } from '../../store'
export default function HeaderDashboard() {
  const dispatch = useDispatch();
  const {name} = useSelector(state => state.user.profile[0]);
  function handleSubmitSignOut() {
    dispatch(signOut());
  }
  return (
    <Container >
      <header className='header-dashboard'>
        <div className='header-content'>
        <div className='header-logo'>
 <Link to='/dashboard'><img src={logo} alt="Logo " /></Link>
          </div>
        <nav className='header-nav'>
        </nav>
        <Profile>
            <div>
              <strong>{name}</strong>
              <Link  onClick={handleSubmitSignOut}>SAIR</Link>
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
