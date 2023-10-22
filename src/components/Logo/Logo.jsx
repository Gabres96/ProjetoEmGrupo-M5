import styled from "styled-components";

const Logo = () => {
  return (
    <StyleLogo>
      <img className={"logo"} src="./src/assets/logo_png.png" alt="" />
    </StyleLogo>
  );
};

export default Logo;

const StyleLogo = styled.div`
  background-color: ${(props) => props.theme.gray100};
  display: flex;
  img {
    width: 100px;
    background-color: ${(props) => props.theme.gray100};
  }

  
`;
