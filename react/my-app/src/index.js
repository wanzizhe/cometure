import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FoldableImage from './App';
import Foldable from './App';
import registerServiceWorker from './registerServiceWorker';

let option = {
    width:'520',
    height:'280',
}
ReactDOM.render(
    <Foldable options = {option}/>   
    , document.getElementById('root')
);
registerServiceWorker();
