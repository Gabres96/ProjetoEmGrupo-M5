import styled from "styled-components";

const Logo = () => {
  return (
    <StyleLogo>
      <img className={"logo"} src="./src/assets/logo.jpg" alt="" />
    </StyleLogo>
  );
};

export default Logo;

const StyleLogo = styled.div`
  background-color: ${(props) => props.theme.header};
  display: flex;
  img {
    width: 100px;
  }

  
`;
