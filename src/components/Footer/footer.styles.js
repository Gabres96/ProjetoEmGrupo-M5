import styled from "styled-components";

export const FooterStyle = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.gray100};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  h3{
    background-color:${(props) => props.theme.gray100};
    color: ${(props) => props.theme.white};
  }
`;
