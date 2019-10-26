import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {  Form } from "@rocketseat/unform"; // useField hook
import  Input from '../../components/Input'
import {Container} from './styles'
export default function Dashboard() {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  if(edit){
    return (
    <Container>
    <div className='card'>
    <div className="card-header">
    <h1>
          Nova vaga
        </h1>
    </div>
    <div className="card-body">
    <Form >
        <Input name="carreira" label="Carreira" type="text"  placeholder="Desenvolvedor PHP + Laravel"/>
        <Input name="localizacao" label="Localização" type="text" placeholder="Natal - RN, Brasil" />
        <button className='btn btn-green btn-transparent' type="button" onClick={()=>setEdit(false)}>
        Cancelar
        </button>
        <button className='btn btn-green' type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Salvar'}
        </button>
      </Form>
    </div>
    </div>
    </Container>
      )
  }else{
    return (
      <Container>
  <div className='card'>
  <div className="card-header">
        <h1>
          Carreiras
        </h1>
        </div>
        <div className="card-body">
        <button onClick={()=>setEdit(true)} className="btn btn-green btn-block">
          NOVA VAGA
        </button>
        </div>
        <div className="card-body">
        <div className="box-carreiras">
        <div className="box-carreira">
          <div className="box-carreira-body">
          <div className='box-carreira-candidatos'>
  8
  <span>CANDIDATOS</span>
        </div>
        <div className='box-carreira-content'>
  <span>Natal - RN, Brasil
  </span>
  <Link to="/dashboard/carreiras/2" >Desenvolvedor PHP + Laravel</Link>
          </div>
          </div>
<div>
<Link  to="/dashboard/carreiras/2/editar" className='btn btn-trans btn-sm mr-10' >
           EDITAR
          </Link>
          <Link  to="/dashboard/carreiras/2" className='btn btn-green btn-sm mr-10' >
           CANDIDATOS
          </Link>
</div>

          </div>
        </div>
        </div>
      </div>
      </Container>

    );
  }


}
