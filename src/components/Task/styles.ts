import styled from "styled-components";

const BaseContainer = styled.li`
    width: 100%;
    height: fit-content;
    list-style: none;
    padding: 1.2rem 1rem 1rem 1rem;
    font-size: 0.875rem;
    background-color: ${props => props.theme.gray500};
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.95rem;

    &:not(:first-child) {
        margin-top: 0.75rem;
    }

    p { width: 100%; }
`;

export const DoneContainer = styled(BaseContainer)`
    border: 1px solid ${props => props.theme.gray500};

    p {
        color: ${props => props.theme.gray300};
        text-decoration: line-through;
    }
`;

export const NotDoneContainer = styled(BaseContainer)`
    border: 1px solid ${props => props.theme.gray400};
    
    p { color: ${props => props.theme.gray100}; }
`;