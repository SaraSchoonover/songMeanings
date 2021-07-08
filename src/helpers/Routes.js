import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import States from '../views/usStates';
import Countries from '../views/Countries';
import CountriesForm from '../forms/CountriesForm';
import StatesForm from '../forms/StatesForm';

export default function Routes({ setCountry }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />

        <Route
        path='/countries'
        component={() => <Countries

          />}
        />

        <Route
          path='/usStates'
          component={States}
        />

         <Route
          path='/add-countries'
          component={() => <CountriesForm
          setCountry={setCountry}
            />}
        />

           <Route
          path='/add-states'
          component={() => <StatesForm
            />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  admin: PropTypes.any,
  setCountry: PropTypes.any
};
