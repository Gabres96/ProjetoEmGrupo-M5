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
      <Icon>
      <BiLogOut onClick={handleLogout}  className='icon' />
      </Icon>
    </>
  )
}
export default Logout;

const Icon = styled(BiLogOut)`
  font-size: 50px;
  cursor: pointer;
  color: ${(props) => props.theme.purple};
  background-color: transparent;
`;