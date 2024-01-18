import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Get a reference to the div with ID root
const el = document.getElementById('root');

// Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// Create a component


// Render the component on the screen
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
