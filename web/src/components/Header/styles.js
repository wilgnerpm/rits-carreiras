import styled from 'styled-components';
export const Container = styled.div`
  position: relative;
  height:120px;
  justify-content:center;
  align-items: center;
  max-width: 1120px;
  margin: 0px auto;
  padding:30px 0;
  @media (max-width:720px) {
 flex-direction:column
}
`;
export const Content = styled.div`

  nav {
    display: flex;
    align-items: center;
    div{
       display: flex;
      flex-direction:column;
      text-align:center;
      img {
      margin-left: 20px;
      padding-right: 20px;
      border-radius: 1px solid #eee;
    }
    span{
      font-size:9px;
      color:#fff;
      margin-top:4px;
    }
    }

  }
  aside {
    display: flex;
    align-items: center;
    a{
      font-size:14px;
      color:#fff;
      margin-right:40px;
      font-weight: bold;
    }
    div{
 margin-left:20px;
 a{
      background: #4EEF61;
      font-weight: bold;
      color: #2E2236;
      border: 0;
      padding:15px 30px;
      border-radius: 25px;
      font-size: 12px;
      transition: background 0.2s;
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
