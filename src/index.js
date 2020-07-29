import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StudentF from './StudentF';
import StudentC from './StudentC';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<StudentF name="Abhishek Soni"/>,document.getElementById('root'));
ReactDOM.render(<StudentC name="Abhishek Soni"/>,document.getElementById('croot'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();