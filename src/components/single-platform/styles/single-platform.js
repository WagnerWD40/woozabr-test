import styled from 'styled-components/macro';

export const Container = styled.li`
    position: relative;
    background-color: #fCfCfC;
    padding: 3.2rem;
    font-size: 2rem;
    width: 20%;
    height: 60rem;
    border-radius: 1rem;
    cursor: pointer;
    box-shadow: 4px 4px 8px 8px #00000044;
    transition: transform .3s ease-in-out,
                z-index .3s ease-in-out;

    &:not(:last-of-type) {
        margin-right: 4rem;
    }

    &:hover {
        transform: scale(1.2);
        z-index: 10;
    }
`;

