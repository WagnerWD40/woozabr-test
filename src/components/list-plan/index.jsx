import React, { useState, useEffect } from 'react';

import {
    Container
} from './styles/list-plan';

import Api from '../../services/api';

function ListPlan() {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        async function getPlans() {
            setPlans(await Api.getPlans());
        }
    }, []);

    return (
        <Container>

        </Container>
    );
}

export default ListPlan;