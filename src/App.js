import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard } from "./Dashboard";
import { Events } from './Events';
import { Header } from './Components/Header';
import { Petition } from './Petition';
import { Discussion } from './Discussion';
import LoginSignupScreen from './Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {isLoggedIn && <Header />}
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<LoginSignupScreen setIsLoggedIn={setIsLoggedIn} />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/petition" element={<Petition />} />
        <Route exact path="/discussion" element={<Discussion />} />
      </Routes>
    </Router>
  );
};

export default App;