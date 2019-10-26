import styled from 'styled-components';
export const Container = styled.div`
/* header /*/
.header-dashboard{
  height:80px;
  width:100%;
  background:#fff;
  .header-content{
    padding:0px 20px;
    max-width:1120px;

    margin: 0px auto;
    height:80px;
    justify-content:space-between;
    display: flex;
    align-items:center;
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

  }
  @media (max-width:720px) {
    .header{
      flex-direction:column;
      .header-nav{
      display:none;
      }
    }
}

`;
export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #333;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
