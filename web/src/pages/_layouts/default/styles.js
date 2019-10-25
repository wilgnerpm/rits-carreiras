import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  background: #FFFFFF;
  display: flex;

`;

export const Content = styled.div`
  width: 100%;
  text-align: center;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    span {
      color: #EA376D;
      align-self: flex-start;
      margin: 0 0 10px;
      font-size:12px;
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }

`;
