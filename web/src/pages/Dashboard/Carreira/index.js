import React, {useState, useEffect, Ref} from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from './styles';
import api from '../../../services/api'
import Candidato from '../../../components/Candidato'
import CandidatoInfo from './CandidatoInfo'
export default function Carreira(props) {
  const { data } = props.location.state;
  const [carreiraAtual, setCarreiraAtual] = useState(data);
  const [loading, setLoading] = useState(false);
  const [candidato, setCandidato] = useState(false);
  const [candidatosList, setcandidatosList] = useState([]);
  useEffect(()=>{
    handleLoadCandidatos()
  }, [])
  async function handleLoadCandidatos() {
    const response = await api.get(`admin/carreira/${carreiraAtual.id}`)
    const {candidato} = response.data.carreira;
    setcandidatosList(candidato)
  }

  function candidatoSelecionado(candidato) {
    setCandidato(candidato)
}

function handleUpdateCandidato(candidato) {
  setCandidato(false)
}
    return (
      <Container>
      <div className='card'>
      <div className="card-header">
      <span>{carreiraAtual.localizacao}</span>
      <div>
      <h1>{carreiraAtual.carreira}</h1>
      {!carreiraAtual.open?(<label className="badge badge-green">ABERTA</label>):(<label className="badge badge-red">FECHADA</label>)}
      </div>
    </div>
    <div className="card-body">
    <Link className='btn btn-green btn-sm mr-10' to={{
pathname: `/dashboard/carreiras/${carreiraAtual.id}/editar`,
state: { data: carreiraAtual }
}}  >EDITAR</Link>
          <button className='btn btn-red btn-sm' >
           FECHAR VAGA
          </button>
    </div>

    </div>

{candidato?(<CandidatoInfo candidato={candidato} callbackParent={(candidato)=>handleUpdateCandidato(candidato)} />):(   <div className='card'>
<div className="card-header mt-10">
 <h2>NOVOS CANDIDATOS</h2>
</div>
<div className="card-body">
{candidatosList.map(candidato=>{
 if(candidato.classificado==='open'){
   return  <Candidato  candidato={candidato} callbackParent={(candidato)=>candidatoSelecionado(candidato)} />
 }
}
)}
 </div>
 <div className="card-body-row mb-10">
 <div className="card-body-col">
   <h3  className="text-green mt-10">CLASSIFICADOS</h3>
   {candidatosList.map(candidato=>{
if(candidato.classificado==='true'){
return  ''
}
}
)}
 </div>
 <div className="card-body-col">
 <h3 className="text-red mt-10" >NÃO CLASSIFICADOS</h3>
 {candidatosList.map(candidato=>{
if(candidato.classificado==='false'){
return  ''
}
}
)}
 </div>

 </div>

 </div>
)}


      </Container>
    );

}
