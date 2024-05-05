import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import UserDataSlice from './redux/UserDataSlice.js'
import AdminDataSlice from './redux/AdminDataSlice.js'

let rootReducer = combineReducers({ UserDataSlice, AdminDataSlice }) //to combine more than one reducers

let store = configureStore({
  reducer : rootReducer
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
