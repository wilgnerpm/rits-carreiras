import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px auto;
width:900px;
padding:40px 0px;
.box-carreiras{
      .box-carreira{
        background:#fff;
        border-radius:4px;
        display:flex;
        flex-direction:row;
        align-items:center;
        align-content:space-between;
        padding:15px;
        .box-carreira-candidatos{
          display:flex;
        flex-direction:column;
        background:#4EEF61;
        text-align:center;
        font-size: 24px;
        font-weight:bold;
        padding:15px;
        border-radius:4px;
        span{
          font-size:10px;
        }
        }
        .box-carreira-content{
          padding:0px 15px;
          display:flex;
        flex-direction:column;
          font-size: 24px;
          font-weight:bold;
          span{
          font-size:10px;
          font-weight:normal;
        }
        a{
          color:#2E2236;
        }
        }

      }
    }
`;
