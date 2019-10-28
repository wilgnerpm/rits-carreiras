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
     <p>linkedin: <span><a target={candidato.linkedin} href={candidato.linkedin}>{candidato.linkedin}</a></span></p>
     <p>github: <span><a target={candidato.github} href={candidato.github}>{candidato.github}</a></span></p>
     <p>Nivel de Ingles:: <span>{candidato.nivel_ingles}</span></p>
     <p>Pretensao Salariol: <span>R$ {candidato.salario}</span></p>
     <p><span><a target={candidato.curriculo} href={candidato.curriculo}>Currículo</a></span></p>
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
