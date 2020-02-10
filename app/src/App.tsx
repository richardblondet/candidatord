import React, { Fragment, memo } from 'react';
import { StateProvider } from './store';
import { Reducer, initialState } from './reducers';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './server';

/**
 * @see {@link https://reacttraining.com/react-router/web/guides/quick-start}
 */
export default () => {
  return (
    <StateProvider reducer={Reducer} initialState={initialState}>
      <div id="App">
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={memo(Home)} />
            </Switch>
          </Fragment>
        </Router>
      </div>
    </StateProvider>
  );
};