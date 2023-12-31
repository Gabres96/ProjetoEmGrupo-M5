import styled from "styled-components";

const Button = ({ texto, variant, width, onClick }) => {
  return (
    <>
      {variant == 'primary' && <PrimaryButton onClick={onClick} width={width}>{texto}</PrimaryButton>}
      {variant == 'secondary' && <SecondaryButton onClick={onClick} width={width}>{texto}</SecondaryButton>}
      {variant == 'third' && <ThirdButton onClick={onClick} width={width}>{texto}</ThirdButton>}
    </>
  );
};

export default Button;

const StyleButton = styled.button`
  width:auto;
  border-radius: 8px;
  box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 12px 48px;
  align-items: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: background .3s;

  &:hover{
    background-color: ${(props) => props.theme.purple200};
  }
`;


const PrimaryButton = styled(StyleButton)`
  width: ${props => props.width ? props.width : 'fit-content'};
   background-color: ${(props) => props.theme.purple500};
   border: none; 
   color: ${(props) => props.theme.white};
   :hover{
    background-color: ${(props) => props.theme.purple600};
  }
`
const SecondaryButton = styled(StyleButton)`
    background-color: ${(props) => props.theme.purple500};
   border: 1px solid ${(props) => props.theme.purple200}; 
   color: ${(props) => props.theme.purple200};
`
const ThirdButton = styled(StyleButton)`
width:auto;
  border-radius: 8px;
  background-color: ${(props) => props.theme.white};
  box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 12px 48px;
  align-items: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: background .3s;

  &:hover{
    background-color: ${(props) => props.theme.gray100};
    color: ${(props) => props.theme.white};
  }
`