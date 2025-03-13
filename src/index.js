import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import App4 from './App4';
// import App5 from './App5';
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App flag={true}/>);
// root.render(<App4 n={5}/>);
// root.render(<App5 name="Cathy"/>);
root.render(<Login/>);