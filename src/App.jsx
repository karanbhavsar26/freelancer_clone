import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProtectedRoutes from './layout'
import Home from './home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from './categories'
import Login from './Login'
import store from './store';
import { Provider } from "react-redux";

function App() {

  return (
    <>
     <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route element={<Home />} path="/"></Route>
          </Route>
          <Route element={<Login />} path="/login"></Route>
        </Routes>

      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
