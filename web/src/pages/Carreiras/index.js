import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'

export default function Carreiras() {
  const [loading, setLoading] = useState(true);
  const [carreiras, setCarreiras] = useState([]);
  useEffect(()=>{
    async function loadCarreiras() {
      const response = await api.get('carreiras');
      const {data} = response;
      const {carreiras} = data;
      setCarreiras(carreiras)
      setLoading(false)

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
           Vagas em aberto
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
