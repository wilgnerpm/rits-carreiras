import React from "react"; // add the hooks
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/logotipo.png';
import { Link } from 'react-router-dom';
import {  Form } from "@rocketseat/unform"; // useField hook
import  Input from '../../components/Input'
import {Container} from './styles'
import * as Yup from 'yup';
const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});
export default function SignIn() {

  const loading = false;
  function handleSubmit(data) {
    console.log(data)
  }

  return (
    <Container>
<div  className='session-backgroud'>
<Form schema={schema} onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Input name="email" label="E-mail" type="text"  placeholder="E-mail"/>
        <Input name="password" label="E-mail" type="password" placeholder="Sua senha" />
        <button className='button-green' type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Acessar'}
        </button>
      </Form>
</div>

    </Container>
  );
}
