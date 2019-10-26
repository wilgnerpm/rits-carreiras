import React from 'react';

import { Container } from './styles';
import { MdFavorite, MdClear } from 'react-icons/md';
export default function CandidatoInfo({candidato}) {
  return (
    <Container>
     <h1>{candidato.nome_completo}</h1>
     <p>E-mail: <span>{candidato.email}</span></p>
     <p>Telefone: <span>{candidato.telefone}</span></p>
     <p>linkedin: <span>{candidato.linkedin}</span></p>
     <p>github: <span>{candidato.github}</span></p>
     <p>Nivel de Ingles:: <span>{candidato.nivel_ingles}</span></p>
     <p>Pretensao Salariol: <span>R$ {candidato.salario}</span></p>
     <p>Curriculo</p>
     <p>Resumo:</p>
     <p><span>
{candidato.resumo}
       </span></p>
       <div>
         <button className='btn btn-red'>
         NUDE
         </button>
         <button className='btn btn-green'>
        LIKE
         </button>
       </div>
    </Container>
  );
}
