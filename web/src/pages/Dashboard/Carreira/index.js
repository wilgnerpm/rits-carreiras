import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from './styles';
import api from '../../../services/api'
export default function Carreira(props) {
  const [edit, setEdit] = useState(false);
  const { data } = props.location.state;
  const [carreira, setCarreira] = useState(data);
  const [loading, setLoading] = useState(false);
  const [candidatos, setCandidatos] = useState([]);
  useEffect(()=>{
    async function handleLoadCandidatos() {
      const response = await api.get(`admin/carreira/${carreira.id}`)
      setCandidatos(response.data.carreira.candidato)
    }
    handleLoadCandidatos()
  }, [])
    return (
      <Container>
      <div className='card'>
      <div className="card-header">
      <span>{carreira.localizacao}</span>
      <div>
      <h1>{carreira.carreira}</h1>
      {!carreira.open?(<label className="badge badge-green">ABERTA</label>):(<label className="badge badge-red">FECHADA</label>)}
      </div>
    </div>
    <div className="card-body">
    <Link className='btn btn-green btn-sm mr-10' to={{
pathname: `/dashboard/carreiras/${carreira.id}/editar`,
state: { data: carreira }
}}  >
           EDITAR
          </Link>
          <button className='btn btn-red btn-sm' >
           FECHAR VAGA
          </button>
    </div>

    </div>
     <div className='card'>
    <div className="card-header mt-10">
        <h2>NOVOS CANDIDATOS</h2>
        </div>
        <div className="card-body">
        <div className="candidate">
          <div>
            <span>wilgnerp@hotmail.com</span>
            <strong>WILGNER </strong>
          </div>
          <button className='btn btn-green btn-sm mr-10' >
           VER CANDIDATO
          </button>
  </div>
        </div>

        <div className="card-body-row mb-10">
        <div className="card-body-col">
          <h3  className="text-green mt-10">CLASSIFICADOS</h3>
        <div className="candidate mb-10">
          <div>
            <span>wilgnerp@hotmail.com</span>
            <strong>WILGNER </strong>
          </div>
          <button className='btn btn-green btn-sm mr-10' >
           VER CANDIDATO
          </button>
  </div>
        </div>
        <div className="card-body-col">
        <h3 className="text-red mt-10" >NÃO CLASSIFICADOS</h3>
        <div className="candidate mb-10">
          <div>
            <span>wilgnerp@hotmail.com</span>
            <strong>WILGNER </strong>
          </div>
          <button className='btn btn-green btn-sm mr-10' >
           VER CANDIDATO
          </button>
  </div>
        </div>

        </div>

        </div>

      </Container>
    );

}
