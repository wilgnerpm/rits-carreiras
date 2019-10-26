import React, {useState} from 'react';

import { Container } from './styles';

export default function Carreira() {
  const [edit, setEdit] = useState(false);


    return (
      <Container>
      <div className='card'>
      <div className="card-header">
      <span>NATAL - RN, BRASIL</span>
      <div>
      <h1>Desenvolvedor PHP + Laravel</h1> <label className="badge badge-red">FECHADA</label>
      </div>
    </div>
    <div className="card-body">
    <button className='btn btn-green btn-sm mr-10' >
           EDITAR
          </button>
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
