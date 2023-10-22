import styled from "styled-components";

export const StyleHeader = styled.header`
box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  position: relative;
  top: 0;
  background-color: ${(props) => props.theme.gray100};  
  height: 160px;
  padding: 30px;
  width: 100vw;
  

  h1{
    font-family: 'Chakra Petch', sans-serif;
    font-size: 50px;
    display: flex;
    margin-left: 20px;
    background-color: ${(props) => props.theme.gray100};
    color: ${(props) => props.theme.white};
  }
  .link, nav, ul, li, nav ul li:hover {
    background-color: ${(props) => props.theme.gray100};
    padding-left: 20%;
  }

  .link{
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${(props) => props.theme.white};
    transform: scale(1.1);
  }

  nav ul {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.white};
    gap: 25px;
    font-size: 20px;
  }

  nav ul li {
    transition: all .2s ease-in-out;
    font-size: 25px;
    letter-spacing: 2px;
    font-weight: 300;
    color: ${(props) => props.theme.white};
  }

  nav ul li:hover {
    transform: scale(0.9);
  }

`

