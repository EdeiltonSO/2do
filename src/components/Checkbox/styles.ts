import styled from 'styled-components';

export const Box = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    position: relative;
    width: 1rem;
    height: 1rem;

    margin-top: 0.2rem;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid ${props => props.theme.blue};
    transition: 0.1s;

    &:hover {
        border: 2px solid ${props => props.theme.blueDark};
    }

    &:checked {
        background-color: ${props => props.theme.purpleDark};
        border: 2px solid ${props => props.theme.purpleDark};

        &:hover {
            background-color: ${props => props.theme.purple};
            border: 2px solid ${props => props.theme.purple};
        }

        &::after {
            content: '';
            
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
