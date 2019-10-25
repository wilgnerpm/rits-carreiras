import React from 'react';
import { Link } from 'react-router-dom';


export default function Carreiras() {
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
      <div className="carreira">
      <div className="carreira-content">
<span>Natal - RN, Brasil</span><h2>Desenvolvedor Frontend</h2>
</div>
<div className="carreira-button">
<Link to="/carreiras/testexs" className="button-green">Canidatar-se</Link>
</div>
</div>
      </div>
          </div>

      </div>
      <div>

      </div>
    </div>
  );
}
