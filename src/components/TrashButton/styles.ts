import styled from 'styled-components'

export const Container = styled.button`
  width: 1.3rem;
  height: 1.3rem;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  padding-top: 0.3rem;
  background-color: transparent;
  color: ${(props) => props.theme.gray300};
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background-color: ${(props) => props.theme.gray400};
    color: ${(props) => props.theme.danger};
  }
`
