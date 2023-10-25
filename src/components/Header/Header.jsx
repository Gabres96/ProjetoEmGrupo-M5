import { Link } from "react-router-dom";
import * as S from "./header.styles";
import Logo from "../Logo/Logo";
import Logout from "../Logout/Logout";

const Header = () => {
  return (
    <S.StyleHeader>
      <Logo />
      <h1>DataDynamo</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/cliente"} className={"link"}>
              Clientes
            </Link>
          </li>
          <li>
            <Link to={"/contrato"} className={"link"}>
              Contratos
            </Link>
          </li>
        </ul>
      </nav>
        <Logout />
    </S.StyleHeader>
  );
};

export default Header;
