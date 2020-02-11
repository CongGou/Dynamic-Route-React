import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { reducer, addnum, rmnum } from './redux'

const store = createStore( reducer )
// console.log(reducer, addnum, rmnum)
render()
function render() {
    ReactDOM.render(
        <App
            store={store}
            addnum={addnum}
            rmnum={rmnum}
        />,
        document.getElementById('root')
    );
}
store.subscribe(render )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
