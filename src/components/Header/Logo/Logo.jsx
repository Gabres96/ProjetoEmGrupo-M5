import styled from "styled-components";

const Logo = () => {
  return (
    <StyleLogo>
      <img className={"logo"} src="./src/assets/logo.jpg" alt="" />
      <h1>DataDynamo</h1>
    </StyleLogo>
  );
};

export default Logo;

const StyleLogo = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  padding: 30px;

  img {
    width: 100px;
    height: 100px;
  }

  h1{
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${(props) => props.theme.white};
  }
`;
