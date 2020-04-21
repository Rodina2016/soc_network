import './index.css';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
console.log(store);

let rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderTree(state);
});

