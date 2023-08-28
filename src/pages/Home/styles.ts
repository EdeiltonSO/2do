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
    // border: 1px solid #f00;
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
`;

