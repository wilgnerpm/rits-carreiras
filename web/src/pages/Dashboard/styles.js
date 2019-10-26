import styled from 'styled-components';
import posed from 'react-pose';


export const Container = styled.div`
  margin: 0px auto;
  max-width:900px;
padding:40px 0px;
.box-carreiras{
      .box-carreira{
        background:#fff;
        border-radius:4px;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
        padding:15px;
        margin-bottom:15px;
        .box-carreira-body{
          display:flex;
        flex-direction:row;
        align-items:center;
        }
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
export const  BoxCarreira = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.1,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  },
  press: {
    scale: 1.1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  },

})
