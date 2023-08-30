import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    height: 12.5rem;
    background-color: ${props => props.theme['gray700']};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.6875rem;

    img {
        width: 7.875rem;
        height: 3rem;
        margin-top: 4.5rem;
    }
`;

export const FormContainer = styled.div`
    width: 46rem;
    height: 3.375rem;
    margin-top: 3.3125rem;
    
    form {
        display: flex;
        justify-content: space-between;
        gap: 0.625rem;
    }
`;

export const TaskInput = styled.input`
    width: 100%;
    height: 3.375rem;
    border-radius: 8px;
    padding: 1rem;
    border: 1px solid ${props => props.theme.gray700};
    background-color: ${props => props.theme.gray500};
    color: ${props => props.theme.gray100};

    &::placeholder {
    color: ${props => props.theme.gray300};
  }
`;

export const Button = styled.button`
    display: flex;
    height: 3.375rem;
    border: none;
    padding: 1rem;
    background-color: ${props => props.theme.blueDark};
    color: ${props => props.theme.gray100};
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.1s;
    font-size: 14px;
    align-items: center;
    gap: 8px;

    &:hover {
        background-color: ${props => props.theme.blue};
    }
`;

export const TaskContainer = styled.div`
    width: 100%;
    height: fit-content;
    //background-color: #234;
    margin-bottom: 5rem;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const TaskHeader = styled.div`
    width: 46rem;
    height: fit-content;
    margin-top: 4rem;
    
    display: flex;
    justify-content: space-between;
`;

export const TaskCounter = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    p {
        font-weight: bold;
        font-size: 14px;
    }

    p#created { color: ${props => props.theme.blue} }
    p#done { color: ${props => props.theme.purple} }

    span {
        padding: 0 0.625rem;
        font-size: 12px;
        font-weight: bold;
        color: ${props => props.theme.gray200};
        background-color: ${props => props.theme.gray400};
        border-radius: 1rem;
    }
`;

export const TaskList = styled.ul`
    width: 46rem;
    height: fit-content;
    margin-top: 1.5rem;
`;

export const Task = styled.li`
    width: 100%;
    height: fit-content;
    list-style: none;
    padding: 1.2rem 1rem 1rem 1rem;
    font-size: 0.875rem;
    background-color: ${props => props.theme.gray500};
    // alterar borda quando a task estiver concluída
    border: 1px solid ${props => props.theme.gray400};
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.95rem;

    &:not(:first-child) {
        margin-top: 0.75rem;
    }

    p {
        width: 100%;
        // alterar color e riscar quando a task estiver concluída
        color: ${props => props.theme.gray100};
        // text-decoration: line-through;
    }
`;

export const TrashButton = styled.button`
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
    color: ${props => props.theme.gray300};
    cursor: pointer;
    transition: 0.1s;

    &:hover {
        background-color: ${props => props.theme.gray400};
        color: ${props => props.theme.danger};
    }
`;