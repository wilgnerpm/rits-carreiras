import React, {useState} from 'react';
import {  Form } from "@rocketseat/unform"; // useField hook
import  Input from '../../../../components/Input'
import {Container} from '../styles'

export default function Editar() {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <Container>
    <div className='card'>
    <div className="card-header">
    <h1>
        Editar
        </h1>
    </div>
    <div className="card-body">
    <Form >
        <Input name="carreira" label="Carreira" type="text"  placeholder="Desenvolvedor PHP + Laravel"/>
        <Input name="localizacao" label="Localização" type="text" placeholder="Natal - RN, Brasil" />
        <button className='btn btn-green btn-transparent' type="button" >
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
}
