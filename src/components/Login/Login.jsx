import { StyleContainerLogin } from "./login.styles.js";
import Button from "../Button/Button";
import { loginUsuario } from "../../service/api.js";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import Notificacao from "../Notificacao/Notificacao.jsx";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();

  const [infosNotificacao, setInfosNotificacao] = useState({
    tipo: "",
    texto: "",
  });
  const [abrirNotificacao, setAbrirNotificacao] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    const resposta = await loginUsuario({ email, password });

    if (resposta) {
      navigate("/home");
    } else {
      setAbrirNotificacao(true);
      setInfosNotificacao({
        tipo: "falha",
        texto: "Email ou senha incorretos",
      });
    }
  };

  const handleEmail = (e) => {
    localStorage.setItem("email", e.target.value);
    // const teste = localStorage.getItem('email')
    // console.log(teste)
  };
  const handlePassword = (e) => {
    localStorage.setItem("password", e.target.value);
    localStorage.getItem("password");
  };

  return (
    <StyleContainerLogin>
      <div className="containerLogo">
        <Logo />
        <h1 className="logo">DataDynamo</h1>
      </div>
      <div className="content">
        <h2>Login</h2>
        <form>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleEmail}
            placeholder="E-mail"
          />
          <input
            type="password"
            name="password"
            id="password"
            onChange={handlePassword}
            placeholder="Senha"
          />

          <Button
            texto="Entrar"
            width="100%"
            variant="primary"
            onClick={handleLogin}
          />
          {abrirNotificacao && (
            <Notificacao
              texto={infosNotificacao.texto}
              tipo={infosNotificacao.tipo}
              fecharNotificacao={() => setAbrirNotificacao(false)}
              open={abrirNotificacao}
            />
          )}
        </form>
      </div>
    </StyleContainerLogin>
  );
};

export default Login;
