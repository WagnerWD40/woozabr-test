import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
    Container
} from './styles/list-platform';

import SinglePlatform from '../single-platform';

import Api from '../../services/api';

import { ROUTE_NAMES } from '../../constants/route-names';

function ListPlatform() {
    const [platforms, setPlatforms] = useState([]);

    const history = useHistory();

    useEffect(() => {
        async function getFromApi() {
            setPlatforms(await Api.getPlatforms())
        }

        getFromApi()
    }, []);

    function handleSelect(platform) {
        console.log('clicked')
        history.push(`/${platform}${ROUTE_NAMES.PLAN_SELECT}`)
    }

    return (
        <Container>
            {platforms.map(platform =>
                <SinglePlatform
                    key={platform.sku}
                    platform={platform}
                    onClick={() => handleSelect(platform.nome)} />
            )}
        </Container>
    );
}

export default ListPlatform;