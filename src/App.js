import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Dashboard } from "./Dashboard";
import { Events } from './Events';
import { Header } from './Components/Header';
import { Petition } from './Petition';
import { Discussion } from './Discussion';
import LoginSignupScreen from './Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUserDetails } from "./api";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getUserDetails().then(() => {
      setIsLoggedIn(true);
    }).catch(error => {
      setIsLoggedIn(false);
    });
}, []);

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