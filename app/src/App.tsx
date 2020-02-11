import React, { Fragment, memo } from 'react';
import { StateProvider } from './store';
import { Reducer, initialState } from './reducers';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ViewCandidate from './components/ViewCandidate';
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
              <Route path="/candidate" component={memo(ViewCandidate)} />
            </Switch>
          </Fragment>
        </Router>
      </div>
    </StateProvider>
  );
};