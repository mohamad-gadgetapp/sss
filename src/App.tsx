import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
/** component */
import Header from "./components/Header";


/** pages */
import HomePage from './pages/Home';
import AboutUsPage from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {

  return (
    <div >
      <Header />
      <div style={{ padding: '10px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUsPage" element={<AboutUsPage />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
