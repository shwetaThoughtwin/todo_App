import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './componant/app';
import {Provider} from 'react-redux'
import {legacy_createStore as createStore} from 'redux'
import { todoReducer} from './reducer/reducer'


const store=createStore(todoReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Provider store={store}>
  <App />
  </Provider>
   
  </>
);


