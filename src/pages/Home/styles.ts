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
    height: 3.375rem;
    border: none;
    padding: 1rem;
    background-color: ${props => props.theme.blueDark};
    color: ${props => props.theme.gray100};
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;

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
    padding: 1rem;
    font-size: 0.875rem;
    background-color: ${props => props.theme.gray500};
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
        line-height: 1.4rem;
    }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    position: relative;
    width: 16px;
    height: 16px;

    margin-top: 0.2rem;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid ${props => props.theme.blue};
    transition: 0.2s;

    &:checked {
        background-color: ${props => props.theme.purpleDark};
        border: 2px solid ${props => props.theme.purpleDark};

        &::after {
            content: '';
            font-size: 12px;
            
            position: absolute; 
            top: 45%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
            
            width: 3px;
            height: 6px;
            border: solid ${props => props.theme.gray100};
            border-width: 0 2px 2px 0;
        }
    }
`;