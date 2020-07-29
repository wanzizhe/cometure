import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Example from './App';
import text from './test.ts';
import registerServiceWorker from './registerServiceWorker';

let option = {
    width:'520',
    height:'280',
}
console.log(text,'text')
ReactDOM.render(
    <Example options = {option}/>   
    , document.getElementById('root')
);
registerServiceWorker();
