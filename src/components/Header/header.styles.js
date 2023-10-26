import styled from "styled-components";

export const StyleHeader = styled.header`

  display: flex;
  align-items: center;
  position: relative;
  top: 0;
  height: 130px;
  padding: 30px;
  width: 100%;
  background-image: radial-gradient(circle at -20.44% 56.16%, #546c6c 0, #4f605f 16.67%, #47504e 33.33%, #3c3c3c 50%, #30292c 66.67%, #271b20 83.33%, #1f1119 100%);

.logo{
  display: flex;
  align-items: center;
  justify-content: space-around;
}

  h1{
    font-family: 'Chakra Petch', sans-serif;
    font-size: 50px;
    display: flex;
    margin-left: 20px;
    background-color: transparent;
    color: ${(props) => props.theme.white};
  }
  .link, nav, ul, li, nav ul li:hover {
    background-color: ${(props) => props.theme.gray100};
    padding-left: 10%;
  }

  .link{
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${(props) => props.theme.white};
    transform: scale(1.1);
    background-color: transparent;
  }
  nav{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 70%;
    background-color: transparent;
  }
  
  nav ul {
    background-color: transparent;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.white};
    gap: 25px;
    font-size: 20px;
    margin-right: 200px;
  }

  nav ul li {
    transition: all .2s ease-in-out;
    font-size: 25px;
    letter-spacing: 2px;
    font-weight: 300;
    color: ${(props) => props.theme.white};
    background-color: transparent;
  }

  nav ul li:hover {
    transform: scale(0.9);
    background-color: transparent;
  }

`

