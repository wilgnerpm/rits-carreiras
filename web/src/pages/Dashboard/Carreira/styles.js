import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px auto;
max-width:900px;
padding:40px 0px;
.card{
  .card-header{
    div{
      display:flex;
      flex-direction:row;
      flex:1;
      label{
        margin-left:15px;
      }
    }
  }
}
h3{

      font-size:16px;
      margin-bottom:10px;
}
.candidate{
  width:100%;
  background:#fff;
  margin: 0px auto;
    height:80px;
    justify-content:space-between;
    display: flex;
    align-items:center;
 flex-direction:row;
border-radius:4px;
div{
  color:#3F3446;
  padding:0 15px;
  display: flex;
  font-size:24px;
  flex-direction:column;
  span{
    font-size:12px;
  }
}
}
`
