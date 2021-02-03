import React from 'react';

import {
    Container
} from './styles/single-platform';

function SinglePlatform({ platform, onClick }) {
    return (
        <Container onClick={onClick}>
            {platform.nome}
            {platform.descricao}
        </Container>
    );
}

export default SinglePlatform;