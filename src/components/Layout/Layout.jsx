import { Link } from 'react-router-dom'
import { StylesLayout } from './Layout.styles'
import Logo from '../Logo/Logo'

const Layout = ({ children }) => {
  return (
    <StylesLayout>
      <aside className='barra-lateral'>
        <Logo />
        <ul>
          <li>
            <Link to='/dashboard' className={'link'}>Dashboard</Link>
          </li>
          <li>
            <Link to='/cliente' className={'link'}>Clientes</Link>
          </li>
          <li>
            <Link to='/contrato' className={'link'}>Contratos</Link>
          </li>
        </ul>
      </aside>
      <div>
        <header className='header-layout'>
          <h2>DataDynamo</h2>
          <Link className={'link'} >Sair</Link>
        </header>
        <main>
          {children}
        </main>
      </div>
    </StylesLayout>
  )
}

export default Layout