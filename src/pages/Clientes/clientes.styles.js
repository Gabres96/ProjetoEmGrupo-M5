import styled from 'styled-components'

export const Topo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`

export const StylesCliente = styled.main`
  width: 100%;
  height: max-content;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 24px;
  overflow-x: hidden;

  > section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > ul {
    width: 100%;
    background-color: ${(props) => props.theme.green50};
    border-radius: 8px;
    padding: 24px;
    gap: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > li {
      width: 30%;
      padding: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      background-color: ${props => props.theme.white50};
    }
  }

`
