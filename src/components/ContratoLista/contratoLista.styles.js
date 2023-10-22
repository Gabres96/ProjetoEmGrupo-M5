import styled from "styled-components";

export const StyleContatoLista = styled.section`
  width: 100%;
  align-self: center;
  display: flex;
  
  .text {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    background-color: ${props => props.theme.gray100};
    height: 86.5vh;
}

h2{
    font-family: 'Roboto Mono', monospace;
}

form .field,
form .fields .field {
    height: 45px;
    width: 100%;
    margin-bottom: 15px;
}

form .textarea {
    height: 80px;
    width: 100%;
}

form .field input,
form .field textarea {
    height: 100%;
    width: 100%;
    border-radius: 6px;
    outline: none;
    padding: 0 10px;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
}

form .field input:focus,
form .field textarea:focus {
    border-color: var(--active-color);
}

form .textarea textarea {
    padding-top: 10px;
    resize: none;
}

form .buttonArea {
    display: flex;
    align-items: center;
}

.right form .buttonArea button {
    background-color: var(--active-color);
    color: var(--site-color);
    display: block;
    width: 160px !important;
    height: 45px;
    outline: none;
    font-size: 18px;
    font-weight: 400;
    border-radius: 6px;
    cursor: pointer;
    flex-wrap: wrap;
    border: 2px solid var(--active-color);
    transition: all 0.3s ease;
}

.right form .button-area button:hover {
    color: var(--active-color);
    background: none;
}

@media (max-width: 947px) {
    .column {
        width: 100%;
        margin-bottom: 35px;
    }
}

  @media(max-width: 500px) {
    .title {
        margin-top: 50px;
    }
    form .fields {
        flex-direction: column;
    }
    form .name,
    form .email {
        margin: 0;
    }
  }

`

