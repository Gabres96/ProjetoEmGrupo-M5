import { useNavigate } from 'react-router-dom';
import { BiLogOut } from "react-icons/bi";
import styled from 'styled-components';
const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  };

  return (
    <>
      <Button onClick={handleLogout}>
        <Icon>
          <BiLogOut />
        </Icon>
      </Button>
    </>
  )
}
export default Logout;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Icon = styled(BiLogOut)`
  font-size: 50px;
  cursor: pointer;
  color: ${(props) => props.theme.purple};
  background-color: transparent;
`;