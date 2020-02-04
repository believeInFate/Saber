import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import request from './utils/request';

React.Component.prototype.$request = request;

ReactDOM.render(<App />, document.getElementById('root'));
