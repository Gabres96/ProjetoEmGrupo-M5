import styled from "styled-components";

export const StyleHeader = styled.header`
  width: 100vw;
  height: 160px;
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  background-color: ${(props) => props.theme.header};  
`;

