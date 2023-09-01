import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 12.5rem;
  background-color: ${(props) => props.theme.gray700};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.6875rem;

  img {
    width: fit-content;
    height: 3rem;
    margin-top: 4.5rem;
  }
`

export const TaskContainer = styled.div`
  width: 100%;
  height: fit-content;
  //background-color: #234;
  margin-bottom: 5rem;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const TaskHeader = styled.div`
  width: 46rem;
  height: fit-content;
  margin-top: 4rem;

  display: flex;
  justify-content: space-between;
`

export const TaskCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    font-weight: bold;
    font-size: 14px;
  }

  p#created {
    color: ${(props) => props.theme.blue};
  }
  p#done {
    color: ${(props) => props.theme.purple};
  }

  span {
    padding: 0 0.625rem;
    font-size: 12px;
    font-weight: bold;
    color: ${(props) => props.theme.gray200};
    background-color: ${(props) => props.theme.gray400};
    border-radius: 1rem;
  }
`

export const TaskList = styled.ul`
  width: 46rem;
  height: fit-content;
  margin-top: 1.5rem;
`
