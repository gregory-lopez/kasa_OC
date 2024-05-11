import React from "react";
import {Routes, Route } from 'react-router-dom'
import Appart from '../../pages/Appart'
import About from '../../pages/About'
import ErrorPage from '../../pages/ErrorPage'


function RoutersApp() {
    return (

    <Routes>
        <Route path="/Appart" element={<Appart />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>

      )
    
}

export default RoutersApp