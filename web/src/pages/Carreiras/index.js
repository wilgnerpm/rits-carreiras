import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'

export default function Carreiras() {
  const [carreiras, setCarreiras] = useState([]);
  useEffect(()=>{
    async function loadCarreiras() {
      const response = await api.get('carreiras');
      const {data} = response;
      const {carreiras} = data;
      setCarreiras(carreiras)

    }
    loadCarreiras();
  },[])
  return (
    <div>
      <div>
      <div  className='session-backgroud'>
            <h2>
Conheça as oportunidades que temos em aberto.
  </h2>
           <h1>
             {carreiras[0]?'Vagas em aberto':':( Ops... No momento não temos vagas abertas.'}
  </h1>
  <div className="carreiras">
    {carreiras.map(c=>(
  <div key={c.id} className="carreira">
  <div className="carreira-content">
<span>{c.localizacao}</span><h2>{c.carreira}</h2>
</div>
<div className="carreira-button">
<Link  to={{
    pathname: `/carreiras/${c.url}`,
    state: { data: c }
  }} className="btn btn-green">Canidatar-se</Link>
</div>
</div>
    ))}

      </div>
          </div>

      </div>
      <div>

      </div>
    </div>
  );
}
