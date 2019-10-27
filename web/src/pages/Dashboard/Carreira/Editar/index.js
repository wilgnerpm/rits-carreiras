import React, {useState} from 'react';
import {  Form } from "@rocketseat/unform"; // useField hook
import  Input from '../../../../components/Input'
import {Container} from '../styles'
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import api from '../../../../services/api'
import { toast } from 'react-toastify';
const schema = Yup.object().shape({
  carreira: Yup.string().required('Titulo da vaga é obrigatório'),
  localizacao: Yup.string().required('A localização é obrigatório'),
});
export default function Editar(props) {
  const { data } = props.location.state;
  const [carreiraEdit, setCarreiraEdit] = useState(data);
  const [loading, setLoading] = useState(false);
  async function handleSubmit() {
    setLoading(true)
    const carreira_ = carreiraEdit;
    delete carreira_['url'];
    delete carreira_['count'];
    try {
       await api.put(`admin/carreira/${carreiraEdit.id}`,carreira_)
      setLoading(false)
      toast.success('Vaga atualizada...');
    } catch (error) {
      toast.error('Falha');
      setLoading(false)
    }


  }
  function handleSetCarreira(evento){
    setCarreiraEdit({...carreiraEdit, carreira:evento.target.value})
  }
  function handleSetLocalizacao(evento){
    setCarreiraEdit({...carreiraEdit, localizacao:evento.target.value})
  }
  return (
    <Container>
    <div className='card'>
    <div className="card-header">
    <h1>
        Editar
        </h1>
    </div>
    <div className="card-body">
    <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="carreira" label="Carreira" type="text" onChange={handleSetCarreira} value={carreiraEdit.carreira}  placeholder="Desenvolvedor PHP + Laravel"/>
        <Input name="localizacao" label="Localização" type="text"  onChange={handleSetLocalizacao}   value={carreiraEdit.localizacao} placeholder="Natal - RN, Brasil" />
        <Link  to={{
pathname: `/dashboard/carreiras/${carreiraEdit.id}`,
state: { data: carreiraEdit }
}} className='btn btn-green btn-transparent' >

        Cancelar
        </Link>
        <button className='btn btn-green' type="submit" disabled={loading}>
          {loading ? 'Atualizando...' : 'Salvar'}
        </button>
      </Form>
    </div>
    </div>
    </Container>
      )
}
