import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//CS This is what gives us access to our root element in our index.html file.
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
