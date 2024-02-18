import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import "./Header.css";

export const Header = ({ className, overlapGroupClassName }) => {
  const navigate = useNavigate(); 
  const [selectedMenuItem, setSelectedMenuItem] = useState('');

  useEffect(() => {
    const storedMenuItem = localStorage.getItem('selectedMenuItem');
    if (storedMenuItem) {
      setSelectedMenuItem(storedMenuItem);
    }
  }, []);

  const handleNavigation = (page) => {
    setSelectedMenuItem(page);
    localStorage.setItem('selectedMenuItem', page);
    navigate(`/${page}`); 
  };

  console.log(selectedMenuItem)
  return (
    <div className={`header ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <div className="rectangle" />
        <div className="div">
          <div className={`menu-item ${selectedMenuItem === "dashboard" ? 'selected' : ''}`} onClick={() => handleNavigation("dashboard")}>Dashboard</div>
          <div className={`menu-item ${selectedMenuItem === "events" ? 'selected' : ''}`} onClick={() => handleNavigation("events")}>Events</div>
          <div className={`menu-item ${selectedMenuItem === "discussion" ? 'selected' : ''}`} onClick={() => handleNavigation("discussion")}>Discussion</div>
          <div className={`menu-item ${selectedMenuItem === "petition" ? 'selected' : ''}`} onClick={() => handleNavigation("petition")}>Petition</div>
          <img className="ellipse" alt="Ellipse" src="https://c.animaapp.com/ZxZGK3Jl/img/ellipse-2-1@2x.png"  onClick={() => handleNavigation("dashboard")}></img>
        </div>
      </div>
    </div>
  );
};
