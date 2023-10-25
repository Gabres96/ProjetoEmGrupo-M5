import Header from "../../components/Header/Header";
import { Contratos } from "../Contratos/Contratos";
import styled from "styled-components";
import Clientes from "../Clientes/Clientes";
import Footer from "../../components/Footer/Footer";
export const Home = () => {

  return (
    <>    
      <Header/>
      <StyleContainer>
        <div>
          <iframe title="Report Section"  src="https://app.powerbi.com/view?r=eyJrIjoiMmQ4YzAyMTUtMjlkYy00YzhlLWE4YTctMjlhNWQ2ZTYxNzVkIiwidCI6ImU0MWE3NmQ5LTYyNTEtNGU4OC04NzY2LTMzNTEyY2QwMDM3ZCJ9" frameborder="0" allowFullScreen="true"></iframe>
        </div>
        </StyleContainer>
      <Footer/>

    </>
  )
}

const StyleContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 15px;
background-image: radial-gradient(circle at -20.44% 56.16%, #546c6c 0, #4f605f 16.67%, #47504e 33.33%, #3c3c3c 50%, #30292c 66.67%, #271b20 83.33%, #1f1119 100%);
border-radius: 10px;
iframe{
  display: flex;
  margin: 10px;
  background-color: transparent;
  width:800px;
  height:80vh;
}`