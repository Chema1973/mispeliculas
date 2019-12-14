import 'font-awesome/css/font-awesome.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
// INI::Redux
import {createStore, applyMiddleware} from 'redux';
// import logger from 'redux-logger';
import {createLogger} from 'redux-logger';
// --> Registrar cambios de estado en nuestra aplicación
//import reduxThunk from 'redux-thunk';
import thunk from 'redux-thunk';
//import promise from 'redux-promise-middleware';
import {createPromise} from 'redux-promise-middleware';
import {Provider} from 'react-redux';
import reducers from './redux/reducers';
// FIN::Redux
import App from './componentes/App';
import * as serviceWorker from './serviceWorker';

import {createGlobalStyle} from 'styled-components';
// --> Inyecta de forma global los estilos a todas las páginas

// export const GlobalStyle
createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Amatic+SC|Anton|Rock+Salt|Cinzel&display=swap');

    body{
        margin:100px !important;
        font-family: 'Anton', sans-serif;
    }
    htmml {
        background: red;
    }
`

// middleware

const store = createStore(reducers,{},applyMiddleware(createPromise(),thunk,createLogger()))
// --> createLogger() --> Está todo el rato escribiendo en el console.log
// const store = createStore(reducers,{},applyMiddleware(createPromise(),thunk))
/*
const store = createStore(
        reducers,
        applyMiddleware(reduxThunk, logger));
        */
// Con esto le decimos al store que se ejecute el
// middleware cada vez que haya un cambio de estado
/*
reducers,
        {},
        applyMiddleware(promise(), reduxThunk, logger
*/

// Archivo Principal de la Aplicación
// Provider es de alto nivel y así
// engloba a toda la aplicación
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
