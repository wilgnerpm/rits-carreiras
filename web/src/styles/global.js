import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import image1 from '../assets/image-1.png';
export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
html{
  font-size:62.5%
}
@media (max-width:1080px) {
  html{
  font-size:58%
}
}

  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px 'Lato', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
/* header /*/
  .header{
  position: relative;
  height:120px;
  justify-content:space-between;
  width:100%;
  max-width: 1120px;
  margin: 0px auto;
  padding:15px 15px;
  display: flex;
 flex-direction:row;

  .header-logo{
  }
  .header-nav{
    display: flex;
    align-items: center;
    a{
      font-size:14px;
      color:#fff;
      margin-right:40px;
      font-weight: bold;
    }
  }
  }
  @media (max-width:720px) {
    .header{
      flex-direction:column;
      .header-nav{
      display:none;
      }
    }
}

/* session */
.session-backgroud{
  background-image: url(${image1}) ;
  background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: auto;
margin-top:-120px;
align-items:center;
padding-top:120px;
padding-bottom:100px;
color:#fff;
h1{
  font-size:46px;
}
h2{
font-size:14px;
color:#4EEF61
}
}
/* **/
.button-green {
      margin: 5px 0 0;
      background: #4EEF61;
      font-weight: bold;
      color: #2E2236;
      border: 0;
      border-radius: 25px;
            padding:15px 30px;
      font-size: 16px;
      transition: background 0.2s;
      a{
        color: #2E2236;
      }
    }


    /* page carreiras */
    .carreiras{
      max-width:640px;
      margin:0 auto;
      padding:50px;
      .carreira{
border-radius:4px;
margin-bottom:15px;
        background:#ffff;
        padding:20px 30px;
        justify-content:space-between;
        align-items:center;
  display: flex;
 flex-direction:row;
        .carreira-content{
          text-align:left;
          align-content:space-between;
          span{
            color:#4EEF61;
          }
          h2{
            color: #2E2236;
            font-size:24px;
          }
        }
      }
    }
    @media (max-width:720px) {
    .carreiras{
       .carreira{
        flex-direction:column;
        padding-bottom:30px;
        .carreira-content{
          text-align:center;
          span{
            font-size:12px
          }
          h2{
            font-size:18px
          }
        }
        .carreira-button{
          margin-top:20px
        }
      }
    }
}
 /* page carreira */
.carreira-detalhes{
  width:100%;
  margin:0 auto;
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
  .carreira-item{
  color:#fff;
  font-size:18px;
  text-align:left;
  padding:0 30px 30px;;

  strong{

}
p{
font-size:16px;
margin-top:30px;
}
  }
}
@media (max-width:720px) {
  .carreira-detalhes{
  flex-direction:column;

  }
}
`;


