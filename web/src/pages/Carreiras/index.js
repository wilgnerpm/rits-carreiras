import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'

export default function Carreiras() {
  const [carreiras, setCarreiras] = useState([]);
  useEffect(()=>{
    async function loadCarreiras() {
      const response = await api.get('carreiras');
      setCarreiras(response.data.carreiras)
    }
    loadCarreiras();
    console.log(carreiras)
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
    {carreiras.map(carreira=>(
  <div className="carreira">
  <div className="carreira-content">
<span>Natal - RN, Brasil</span><h2>Desenvolvedor Frontend</h2>
</div>
<div className="carreira-button">
<Link to="/carreiras/testexs" className="btn btn-green">Canidatar-se</Link>
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
