import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import router from './routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
import userSlicer from './redux/userSlicer';
import loaderSlicer from './redux/loaderSlicer';
import cartSlicer from './redux/cartSlicer';

const route = createBrowserRouter(router);

const store = configureStore({
  reducer: { userSlicer, loaderSlicer, cartSlicer },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
