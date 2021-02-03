import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ROUTE_NAMES } from '../constants/route-names';

import Home from '../pages/home';
import PlanSelect from '../pages/plan-select';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                    <Route path={ROUTE_NAMES.HOME} exact component={Home} />
                    <Route path={`/:id${ROUTE_NAMES.PLAN_SELECT}`} exact component={PlanSelect} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;