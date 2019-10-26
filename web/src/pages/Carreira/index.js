import React from 'react';
import {  Form, FileInput} from "@rocketseat/unform"; // useField hook
import  Input from '../../components/Input'
import  Select from '../../components/Select'
import { ContainerBackgroud, FormCanidatese } from './styles';
import { MdCheckCircle, MdAttachFile } from 'react-icons/md';
export default function Carreiras() {
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
Natal/RN - Brasil
        </h2>
        <h1>
          Desenvolvedor PHP
        </h1>
      </header>



            <div className='candidate'>
 <a href="#candidate-se" className="btn btn-green">Candidate-se</a>
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
          <div mobile={12} table={12} desktop={12} >
            <FormCanidatese>
                 <Form className=''>
                   <h2 id='candidate-se'>Informações pessoais</h2>
 <Input name="name" label="NOME COMPLETO" type="text"  placeholder=" SEU NOME"/>
  <Input name="email" label="E-MAIL" type="email"  placeholder=" SEU E-MAIL"/>
  <Input name="telefone" label="TELEFONE(COM DD)" type="text"  placeholder="SEU TELEFONE"/>
    <h2>Carta de apresentação</h2>
 <Input name="resumo" multiline label="CONTE SUA MOTIVAÇÃO (opcional)" type="text"  placeholder="Faça um breve resumo sobre você"/>

    <h2>Últimas perguntas</h2>
 <Input name="Linkedin" label="URL do seu Linkedin" type="text"  placeholder="www.linkedin.com/xxxxxxxxxx"/>
 <Input name="github" label='URL DO SEU GITHUB' type="text"  placeholder="www.github.com/xxxxxxxxxx"/>

  <Select name="tech" label='QUAL SEU NÍVEL DE INGLÊS?' options={options} />

  <Input name="pretensao_salarial" label='PRETENSÃO SALARIAL' type="text" value='R$' placeholder="R"/>
 <h2>Anexe seu currículo em PDF ou DOC</h2>
<div class="upload-btn-wrapper">
  <button class="btn-upload ">
    <MdAttachFile color="#2E2236" size={14} /> Escolha um arquivo</button>
<FileInput name="attach"  id="file"  />
</div>
<button className="btn btn-green" type="submit" >
         ENVIAR
        </button>
    </Form>
            </FormCanidatese>

          </div>
          </div>
       </div>
       </>
  );
}
