import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRouter from './router/UserRouter';
import HostToast from './components/toastify/Toastify';
function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
          <Route path={"/*"} element={<UserRouter />} />
        </Routes>
      </BrowserRouter>
      <HostToast />
    </>
  )
}

export default App
