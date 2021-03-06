import React from 'react';
import {Route, Routes} from "react-router-dom";
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


function App() {

    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            <Header/>
            <div style={{padding: '10px'}}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/contractBooking" element={<ContractBooking/>}/>
                    <Route path="/aboutUsPage" element={<AboutUsPage/>}/>
                    <Route path="/contactUs" element={<ContactUs/>}/>
                    <Route path="/contract" element={<Contract/>}/>
                    <Route path="/loan" element={<Loan/>}/>
                   
                </Routes>
            </div>

        </div>
    );
}

export default App;
