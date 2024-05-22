import React from "react";
import {Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Appart from '../../pages/Appart'
import About from '../../pages/About'
import ErrorPage from '../../pages/ErrorPage'


function RoutersApp() {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Appart/:id" element={<Appart />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
      )
}

export default RoutersApp