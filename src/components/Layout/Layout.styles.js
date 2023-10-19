import styled from 'styled-components'

export const StylesLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  > .barra-lateral {
    width: 220px;
    height: 100%;
    padding: 24px 10px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;
    top: 50;
    background-color: ${(props) => props.theme.header};

    > ul {
      position: relative;
      top: 100px;
      display: flex;
      gap: 34px;
      flex-direction: column;
      background-color: ${(props) => props.theme.header};

      > li {
        background-color: ${(props) => props.theme.header};
        color: ${(props) => props.theme.white200};
        transition: all .2s ease-in-out;
      } 

      > li:hover {
        transform: scale(1.1);
      }  
    }
  }

  a {
    font-size: 20px;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.header};
    transition: all .2s;
  }

  a:hover {
    transform: scale(1.1);
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .header-layout {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.header};
    padding: 24px;

    > h2 {
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.header};
      letter-spacing: 2px;
    }

    > p {
      background-color: ${(props) => props.theme.header};
    }
  }
`
