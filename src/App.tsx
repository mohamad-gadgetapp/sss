import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
/** component */
import Header from "./components/Header";


/** pages */
// import HomePage from './pages/Home';
import ContractBooking from "./pages/ContractBooking/index";

import HomePage from './pages/Home';
import AboutUsPage from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Contract from './pages/Contract';
import Loan from './pages/Loan';
import Borrow from './pages/Borrow';
import Match from './pages/Match'; 

function App() {

  return (
    <div >
      <Header />
      <div style={{ padding: '10px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contractBooking" element={<ContractBooking />} />
          <Route path="/aboutUsPage" element={<AboutUsPage />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/loan" element={<Loan />} />
          {/* <Route path="/borrow" element={<Borrow />} />
          <Route path="/match" element={<Match />} /> */}
        </Routes>
      </div>

    </div>
  );
}

export default App;
