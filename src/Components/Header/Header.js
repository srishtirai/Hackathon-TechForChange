import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import "./Header.css";

export const Header = ({ className, overlapGroupClassName }) => {
  const navigate = useNavigate(); // Initialize useHistory hook
  const [selectedMenuItem, setSelectedMenuItem] = useState('');

  // useEffect to load the selectedMenuItem from localStorage on component mount
  useEffect(() => {
    const storedMenuItem = localStorage.getItem('selectedMenuItem');
    if (storedMenuItem) {
      setSelectedMenuItem(storedMenuItem);
    }
  }, []);

  // Define function to navigate to respective pages and update selectedMenuItem
  const handleNavigation = (page) => {
    setSelectedMenuItem(page);
    localStorage.setItem('selectedMenuItem', page);
    navigate(`/${page}`); // Navigate to the respective page
  };

  return (
    <div className={`header ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <div className="rectangle" />
        <div className="div">
          <div className={`menu-item ${selectedMenuItem === "dashboard" ? 'selected' : ''}`} onClick={() => handleNavigation("dashboard")}>Dashboard</div>
          <div className={`menu-item ${selectedMenuItem === "events" ? 'selected' : ''}`} onClick={() => handleNavigation("events")}>Events</div>
          <div className={`menu-item ${selectedMenuItem === "discussion" ? 'selected' : ''}`} onClick={() => handleNavigation("discussion")}>Discussion</div>
          {/* <div className={`menu-item ${selectedMenuItem === "groups" ? 'selected' : ''}`} onClick={() => handleNavigation("groups")}>Groups</div> */}
          <div className={`menu-item ${selectedMenuItem === "petition" ? 'selected' : ''}`} onClick={() => handleNavigation("petition")}>Petition</div>
          <img className="ellipse" alt="Ellipse" src="https://c.animaapp.com/ZxZGK3Jl/img/ellipse-2-1@2x.png"  onClick={() => handleNavigation("dashboard")}></img>
        </div>
      </div>
    </div>
  );
};
