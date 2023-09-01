import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.gray400};
  padding: 64px 24px;
  color: ${(props) => props.theme.gray300};
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    user-select: none;
  }

  strong {
    margin-top: 1rem;
  }
`
