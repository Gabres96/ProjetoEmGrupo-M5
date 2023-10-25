import Header from "../../components/Header/Header";
import { Contratos } from "../Contratos/Contratos";

import Clientes from "../Clientes/Clientes";
import Footer from "../../components/Footer/Footer";
export const Home = () => {

  return (
    <>    
      <Header/>
      <Contratos/>
      <Clientes/>
      <Footer/>

    </>
  )
}