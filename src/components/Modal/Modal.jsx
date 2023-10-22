import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import { tema } from "../../style/theme.js";

const Modal = ({ open, title, fechaModal, children }) => {
  const handleClose = (e) => {
    e.target.id === "modal" && fechaModal();
  };
  return (
    <>
      {open && (
        <StylesModal id="modal" onClick={handleClose}>
          <StylesContentModal>
            <section className="header">
              <h2>{title}</h2>
              <AiOutlineClose
                color={tema.blue500}
                onClick={fechaModal}
                cursor="pointer"
                size={32}
              />
            </section>
            {children}
          </StylesContentModal>
        </StylesModal>
      )}
    </>
  );
};

export default Modal;

const StylesModal = styled.div`
  position: fixed; /* Ou 'absolute' dependendo de suas necessidades */
  top: 50%; /* Posição vertical no meio da tela */
  left: 50%; /* Posição horizontal no meio da tela */
  transform: translate(-50%, -50%); /* Centraliza o modal na tela */
  background-color: rgba(0, 0, 0, 0.7);
`;

const StylesContentModal = styled.div`
  display: flex;
  width: 401px;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  flex-shrink: 0;
  border-radius: 16px;
  background: ${(p) => p.theme.white200};
  box-shadow: 4px 7px 21px 0px #263238, -4px -7px 21px 0px #263238;

  > .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h2 {
      color: ${(p) => p.theme.blue500};
    }
  }
`;
