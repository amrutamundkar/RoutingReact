import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AuthComponent } from './AuthComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AuthComponent />, document.getElementById('root'));
registerServiceWorker();
