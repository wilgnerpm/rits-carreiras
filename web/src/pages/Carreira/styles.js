import styled from 'styled-components';
import image1 from '../../assets/image-1.png';
export const ContainerBackgroud = styled.div`
  background-image: url(${image1}) ;
  background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: auto;
margin-top:-120px;
align-items:center;
padding-top:120px;
padding-bottom:100px;
flex:1;
.candidate{
margin: 45px 0;
width:100%;
text-align:center;
a{
  text-transform:uppercase;
}
}
.carreiras-detalhes{

}
.carreiras-item{
  color:#fff;
  font-size:18px;
  text-align:left;
  padding:0 30px;
@media only screen and (max-width:600px){
  width:100%;
}
@media only screen and (min-width:768px){
  width:100%;
}
@media only screen and (max-width:900px){
  width:33%;
}
  strong{

  }
  p{
  font-size:16px;
  margin-top:30px;
  }
}
header{
text-align:center;
width:100%;
}
h1{
font-size:42px;
color:#fff;
}
h2{
  font-size:12px;
color:#4EEF61;
text-transform:uppercase
}

`;
export const FormCanidatese = styled.div`
max-width:560px;
margin: 0 auto 100px;
h2{
  margin-top:50px;
  margin-bottom:30px;
}
.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-bottom:50px;
  margin-top:30px;
}
.btn-upload {
  border: 2px solid #4EEF61;
  color: #2E2236;
  background-color: white;
  padding: 20px 110px;
  border-radius: 40px;
  font-size: 16px;
  font-weight: bold;
}

.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
`
