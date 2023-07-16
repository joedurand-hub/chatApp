import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx'
import { registerSW } from "virtual:pwa-register";
import "./styles.css"
if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location)) {
  registerSW();
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route index element={<Home />} />
    {/* <Route path="login" element={<Login />} /> */}
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)