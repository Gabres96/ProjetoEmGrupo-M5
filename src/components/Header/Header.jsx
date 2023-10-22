import { Link } from "react-router-dom";
import * as S from "./header.styles";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <S.StyleHeader>
      <Logo>
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
      </Logo>
    </S.StyleHeader>
  )
}

export default Header