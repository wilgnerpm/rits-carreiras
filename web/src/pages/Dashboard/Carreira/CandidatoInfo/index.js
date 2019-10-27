import React from 'react';
import { Container } from './styles';
import api from '../../../../services/api'
export default function CandidatoInfo({candidato, callbackParent}) {

 async function handleClassificado(classificado){
await api.put(`admin/candidato/${candidato.id}`,{classificado:`${classificado}`})
const candidatoAtualizado = {...candidato,classificado:`${classificado}`}
callbackParent(candidatoAtualizado);
  }
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
         <button className='btn btn-red' onClick={()=>handleClassificado(false)}>
         NUDE
         </button>
         <button className='btn btn-green' onClick={()=>handleClassificado(true)}>
        LIKE
         </button>
       </div>
    </Container>
  );
}
