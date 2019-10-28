import styled from 'styled-components';
export const Container = styled.div`
/* footer */
.footer{

width:100%;

background:#F6F6F7;
.footer-content{
margin: 0px auto;
padding:50px 15px;
justify-content:space-between;
max-width:1120px;
display: flex;
flex-direction:row;
.footer-logo{}
.footer-text{
color:#6C6472;
   text-align:center;
   font-size:14px;
   strong{
     color:#6C6472;
     font-weight:bold;
   }
}
.footer-site{
  display:flex;
  flex-direction: column;
a{
  color: #4EEF61;
  font-weight:bold;
  font-size:16px;
  label{
    font-size:12px;
  }
}

}
}
}
@media (max-width:720px) {
.footer .footer-content{
    flex-direction:column;
    .footer-text{
      margin-top:15px;
      font-size:12px;
    }
    .footer-site{
      margin-top:15px;
      text-align:center;
    }
  }
}
  `
