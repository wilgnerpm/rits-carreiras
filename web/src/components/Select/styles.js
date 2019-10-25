import styled from 'styled-components';

export const Label = styled.div`
      background: #F6F6F7;
      display: flex;
      flex-direction: column;
      text-align:left;
      padding: 9px 20px;
      font-size:10px;
      color:#6C6472;
      border-radius: 4px;
      margin-bottom:10px;
      select {
      background: #F6F6F7;
      border: 0;
      color: #2E2236;
      margin: 5px 0 5px;
      &::placeholder {
        color: #D1D0D1;
      }

    }
    span{
      display:none
    }
`;
