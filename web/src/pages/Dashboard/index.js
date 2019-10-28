import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {  Form } from "@rocketseat/unform"; // useField hook
import  Input from '../../components/Input'
import {Container, BoxCarreira, BoxCarreiraCard} from './styles'
import api from '../../services/api'
import * as Yup from 'yup';
import {SpiralSpinner} from "react-spinners-kit";
const schema = Yup.object().shape({
  carreira: Yup.string().required('Titulo da vaga é obrigatório'),
  localizacao: Yup.string().required('A localização é obrigatório'),
});
export default function Dashboard() {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [carreiras, setCarreiras] = useState([]);
  useEffect(()=>{
    handleLoadCarreiras()

  }, [])

  async function handleSubmit({carreira, localizacao}) {
    setLoading(true)
    let date = {carreira, localizacao,  open:0}
    const response = await api.post('admin/carreira',date)
    setEdit(false)
    handleLoadCarreiras()
  }

  async function handleLoadCarreiras() {
    const response = await api.get('admin/carreira')
    const {data} = response;
    setCarreiras(data.carreiras)
    setLoading(false)
  }
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
    <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="carreira" label="Carreira" type="text"  placeholder="Desenvolvedor PHP + Laravel"/>
        <Input name="localizacao" label="Localização" type="text" placeholder="Natal - RN, Brasil" />
        <button className='btn btn-green btn-transparent' type="button" onClick={()=>setEdit(false)}>
        Cancelar
        </button>
        <button className='btn btn-green' type="submit" disabled={loading}>
          {loading ? 'Atualizando...' : 'Salvar'}
        </button>
      </Form>
    </div>
    </div>
    </Container>
      )
  }else{
    return (


      <Container>
   {loading?(<div className="loadingCenter"><SpiralSpinner size={50} frontColor="#2E2236" backColor='#4EEF61'/></div>):(  <div className='card'>
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
        {carreiras.map(carreira=>(
          <BoxCarreira>
            <BoxCarreiraCard  open={carreira.open}>
<div className="box-carreira-body">
<div className='box-carreira-candidatos'>
{carreira.count}
<span>CANDIDATOS</span>
</div>
<div className='box-carreira-content'>
<span>{carreira.localizacao}
</span>
<Link to={{
pathname: `/dashboard/carreiras/${carreira.id}`,
state: { data: carreira }
}}  >{carreira.carreira}</Link>
</div>
</div>
<div>
<Link  to={{
pathname: `/dashboard/carreiras/${carreira.id}`,
state: { data: carreira }
}}  className='btn btn-green btn-sm mr-10' >
 CANDIDATOS
</Link>
</div>

            </BoxCarreiraCard>

          </BoxCarreira>
       ))}

        </div>
        </div>
      </div>)}


      </Container>

    );
  }


}
