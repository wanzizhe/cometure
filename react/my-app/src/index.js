import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Foldable from './App';
import text from './test.ts';
import registerServiceWorker from './registerServiceWorker';

let option = {
    width:'520',
    height:'280',
}
console.log(text,'text')
ReactDOM.render(
    <Foldable options = {option}/>   
    , document.getElementById('root')
);
registerServiceWorker();
