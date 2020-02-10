import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

/**
 * Worth reading
 * 
 * @see {@link https://pouria.dev/how-i-react-in-2020/}
 * @see {@link https://dev.to/davidkpiano/redux-is-half-of-a-pattern-1-2-1hd7?utm_source=Iterable&utm_medium=email&utm_campaign=the_overflow_newsletter&utm_content=01-23-20}
 * @see {@link https://medium.com/@dmitrynozhenko/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf}
 */

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
