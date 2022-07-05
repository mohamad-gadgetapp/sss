import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
/** component */
import Header from "./components/Header";



/** pages */
// import HomePage from './pages/Home';
import ContractBooking from "./pages/ContractBooking/index";


function App() {

  return (
    <div>
      <Header title={"hello"} />
      <Router>
        <Routes>
          <Route path="/" element={<ContractBooking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
