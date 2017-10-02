import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
function anil(){
ReactDOM.render(<App />, document.getElementById('root'));
}
setInterval(anil,1000);
registerServiceWorker();
