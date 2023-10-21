import styled from "styled-components";

export const StyleHeader = styled.header`
  width: 100vw;
  padding: 30px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  background-color: ${(props) => props.theme.header};  

  .link, nav, ul, li, nav ul li:hover {
    background-color: ${(props) => props.theme.header};
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
    transform: scale(1.1);
  }

`

