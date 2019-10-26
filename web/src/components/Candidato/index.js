import React from 'react';

import { Container } from './styles';

export default function Candidato({candidato, callbackParent}) {
  console.log()
  return (
    <Container>
    <div className="candidate">
    <div>
      <span>{candidato.email} </span>
      <strong> {candidato.nome_completo}</strong>
    </div>
    <button className='btn btn-green btn-sm mr-10' onClick={()=>callbackParent(candidato)}>
     VER CANDIDATO
    </button>
</div>
</Container>
  );
}
