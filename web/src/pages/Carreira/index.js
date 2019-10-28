import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import {  Form, FileInput} from "@rocketseat/unform"; // useField hook
import { toast } from 'react-toastify';
import  Input from '../../components/Input'
import  Select from '../../components/Select'
import { ContainerBackgroud, FormCanidatese } from './styles';
import { MdCheckCircle, MdAttachFile } from 'react-icons/md';
import {SpiralSpinner} from "react-spinners-kit";
import api from '../../services/api'
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email').required('O e-mail é obrigatório'),
    nome_completo: Yup.string().required('Nome completo é obrigatorio'),
    telefone: Yup.string().required('Telefone é obrigatorio'),
    resumo: Yup.string(),
    linkedin: Yup.string().required('Linkedin é obrigatorio'),
    github: Yup.string().required('Github é obrigatorio'),
    nivel_ingles: Yup.string().required('Nivel de inglês é obrigatorio'),
    salario: Yup.string().required('Pretensão salarial é obrigatorio'),
});

export default function Carreiras(props) {
  const { data } = props.location.state;
  const [carreira, setCarreira] = useState(data);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState('');
  async function handleSubmit({nome_completo,email, telefone, resumo, linkedin, github, nivel_ingles, salario }) {
  try {
    setLoading(true)
    const dataForm = new FormData();
    dataForm.append('carreira_id', carreira.id);
    dataForm.append('nome_completo', nome_completo);
    dataForm.append('email', email);
    dataForm.append('telefone',telefone);
    dataForm.append('resumo', resumo);
    dataForm.append('linkedin', linkedin);
    dataForm.append('github',github);
    dataForm.append('nivel_ingles', nivel_ingles);
    dataForm.append('salario', salario);
    dataForm.append('file', file);
    console.log(dataForm)
    const response = await api.post('candidato', dataForm);
    setLoading(false)
    toast.success('Obrigado pelo interrese na vaga... ;) ');
  } catch (error) {
    toast.error('Falha');
    setLoading(false)
  }

  }

  async function handleChange(e) {
    setFile(e.target.files[0])

  }

  const options = [
  { id: 'Básico', title: 'Básico' },
  { id: 'Intermedário', title: 'Intermedário' },
  { id: 'Avançado', title: 'Avançado' },
  { id: 'Fluente', title: 'Fluente' },
];
  return (
    <>
    <ContainerBackgroud>

             <header>
        <h2>
{carreira.localizacao}
        </h2>
        <h1>
        {carreira.carreira}
        </h1>
      </header>



            <div className='candidate'>
 <Link to={{
    pathname: `/carreiras/${carreira.url}#candidate-se`,
    state: { data: carreira ,
      hash: "#candidate-se",}
  }}  className="btn btn-green">Candidate-se</Link>
            </div>

           <div className="carreira-detalhes">
            <div  className='carreira-item'>
          <strong>
Na função de Desenvolvedor Frontend aqui na Rits, você vai:
        </strong>
        <p>
            <MdCheckCircle color="#4EEF61" size={14} /> Transformar layouts (XD e Photoshop) em montagens responsivas utilizando HTML + CSS + JS;
 </p>
  <p>
 <MdCheckCircle color="#4EEF61" size={14} /> Integrar montagem com APIs desenvolvidas por outras equipes;
</p>
<p>
 <MdCheckCircle color="#4EEF61" size={14} /> Manter e melhorar a base de código existente corrigindo bugs e refatorando código quando necessário.
       </p>
       </div>
            <div  className='carreira-item'>
          <strong>
Procuramos alguém que:
        </strong>
        <p>
            <MdCheckCircle color="#4EEF61" size={14} />
            Possua habilidades arquiteturais para desenvolvimento de software;
            </p>
  <p>
 <MdCheckCircle color="#4EEF61" size={14} />Goste de trabalhar em equipe;
</p>
<p>
 <MdCheckCircle color="#4EEF61" size={14} /> Seja focado, proativo, tenha boa comunicação e relacionamento interpessoal.
       </p>
       </div>

            <div  className='carreira-item'>
          <strong>
Procuramos alguém que:
        </strong>
        <p>
            <MdCheckCircle color="#4EEF61" size={14} />
            Possua habilidades arquiteturais para desenvolvimento de software;
            </p>
  <p>
 <MdCheckCircle color="#4EEF61" size={14} />Goste de trabalhar em equipe;
</p>
<p>
 <MdCheckCircle color="#4EEF61" size={14} /> Seja focado, proativo, tenha boa comunicação e relacionamento interpessoal.
       </p>
       </div>
       </div>


    </ContainerBackgroud>
       <div >
         <div>
          <div  >
            <FormCanidatese>
            <Form  schema={schema} onSubmit={handleSubmit}>
                   <h2 id='candidate-se'>Informações pessoais</h2>
 <Input name="nome_completo" label="NOME COMPLETO" type="text"  placeholder=" SEU NOME"/>
  <Input name="email" label="E-MAIL" type="email"  placeholder=" SEU E-MAIL"/>
  <Input name="telefone" label="TELEFONE(COM DD)" type="text"  placeholder="SEU TELEFONE"/>
    <h2>Carta de apresentação</h2>
 <Input name="resumo" multiline label="CONTE SUA MOTIVAÇÃO (opcional)" type="text"  placeholder="Faça um breve resumo sobre você"/>
    <h2>Últimas perguntas</h2>
 <Input name="linkedin" label="URL do seu Linkedin" type="text"  placeholder="www.linkedin.com/xxxxxxxxxx"/>
 <Input name="github" label='URL DO SEU GITHUB' type="text"  placeholder="www.github.com/xxxxxxxxxx"/>
  <Select name="nivel_ingles" label='QUAL SEU NÍVEL DE INGLÊS?' options={options} />
  <Input name="salario" label='PRETENSÃO SALARIAL' type="text"  placeholder="R$"/>
 <h2>Anexe seu currículo em PDF ou DOC</h2>
<div class="upload-btn-wrapper">
  <button className="btn-upload ">
    <MdAttachFile color="#2E2236" size={14} /> Escolha um arquivo</button>
    <input
          type="file"
          accept="doc/*"
          onChange={handleChange}

        />
</div>

         {loading?(<div className="loadingCenter"><SpiralSpinner size={50} frontColor="#2E2236" backColor='#4EEF61'/></div>):(<button className="btn btn-green" type="submit" disabled={loading} > ENVIAR</button>)}

    </Form>
            </FormCanidatese>

          </div>
          </div>
       </div>
       </>
  );
}
