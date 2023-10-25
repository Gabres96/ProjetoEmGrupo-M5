import { StyleContainerLogin } from './login.styles.js'
import Button from '../Button/Button'
import { loginUsuario } from '../../service/api.js'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')
    const resposta = await loginUsuario({ email, password })

    if(resposta){
      navigate('/contrato')
    }else{
      alert('Email ou senha incorretos')
    }
  }

  const handleEmail = (e) => {
    localStorage.setItem('email', e.target.value)
    // const teste = localStorage.getItem('email')
    // console.log(teste)
  }
  const handlePassword = (e) => {
    localStorage.setItem('password', e.target.value)
    localStorage.getItem('password')
  }

  return (
    <StyleContainerLogin>
      <div className="content">
        <h2>Login</h2>
        <form>
          <input type="text" name='email' id='email' onChange={handleEmail}/>
          <input type="text" name='password' id='password' onChange={handlePassword}/>
        
          <Button
            texto="Entrar"
            width="100%"
            variant='primary'
            onClick={handleLogin}
          />
        </form>
      </div>
    </StyleContainerLogin>
  )
}

export default Login