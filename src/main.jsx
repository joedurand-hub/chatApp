import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import ChatDataContextProvider from './context/index';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Admin from "./pages/Admin/Index.jsx";
import Conversaciones from "./pages/Conversaciones.jsx";
import ChatGeneral from "./pages/ChatGeneral.jsx";
import ChatPrivado from "./pages/ChatPrivado.jsx";
import Perfil from "./pages/Perfil.jsx";
import { registerSW } from "virtual:pwa-register";
import "./styles.css";

if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location)) {
  registerSW();
}

const MainApp = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<Home />} />
        <Route path="chat-general" element={<ChatGeneral />} />
        <Route path="chat-privado" element={<ChatPrivado />} />
        <Route path="conversaciones" element={<Conversaciones />} />
        <Route path="admin" element={<Admin />} />
        <Route path="perfil/:id" element={<Perfil />} />
        {/* <Route path="recuperar-contraseña" element={<Perfil />} /> */}
      </>
    )
  );

  return (
    <ChatDataContextProvider>
      <RouterProvider router={router} />
    </ChatDataContextProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<MainApp />);
