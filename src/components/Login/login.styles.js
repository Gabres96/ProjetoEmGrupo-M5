import styled from "styled-components";
export const StyleContainerLogin = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
  background-image: radial-gradient(
    circle at -20.44% 56.16%,
    #546c6c 0,
    #4f605f 16.67%,
    #47504e 33.33%,
    #3c3c3c 50%,
    #30292c 66.67%,
    #271b20 83.33%,
    #1f1119 100%
  );

  .containerLogo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  logo {
    font-family: "Chakra Petch", sans-serif;
    font-size: 50px;
    color: ${(props) => props.theme.white};
  }
  > .content {
    display: flex;
    padding: 48px;
    height: fit-content;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    border-radius: 16px;
    background-color: ${(props) => props.theme.white};
    box-shadow: -4px -4px 8px 0px rgba(0, 0, 0, 0.25),
      4px 4px 8px 0px rgba(0, 0, 0, 0.25);

    > form {
      display: flex;
      padding: 24px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 24px;

      .destaque {
        font-weight: bold;
      }
    }
  }
`;
