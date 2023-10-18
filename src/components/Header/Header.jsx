import { Logo } from "./Logo/Logo"

const Header = () => {
  return (
    <header>
      <Logo />
      {/* <img src="./src/assets/logo.jpg" alt="" /> */}
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header