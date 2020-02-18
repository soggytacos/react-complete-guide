import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

//CS This is what gives us access to our root element in our index.html file.
ReactDOM.render(<App appTitle="Person Manager"/>, document.getElementById('root'));
registerServiceWorker();
