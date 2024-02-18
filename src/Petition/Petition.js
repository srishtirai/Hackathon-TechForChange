import React, { useState } from "react";
import { Header } from "../Components/Header";
import "./Petition.css";

export const Petition = () => {

  const petitionData = [
    {
      id: 1,
      header: "Save the Local Park",
      date: "March 15, 2024",
      location: "Central Park",
      details: "Join us in a movement to stop the commercial development of Central Park.",
      status: "Active",
      topic: "Environment"
    },
    {
      id: 2,
      header: "Save the Local Park",
      date: "April 22, 2024",
      location: "Online",
      details: "Sign the petition to enact stronger laws against poaching of endangered species.",
      status: "Resolved",
      topic: "Environment"
    },
    {
        id: 2,
        header: "Protect Endangered Species",
        date: "April 22, 2024",
        location: "Online",
        details: "Sign the petition to enact stronger laws against poaching of endangered species.",
        status: "Resolved",
        topic: "Wildlife"
      },
      {
        id: 2,
        header: "Protect Endangered Species",
        date: "April 22, 2024",
        location: "Online",
        details: "Sign the petition to enact stronger laws against poaching of endangered species.",
        status: "Resolved",
        topic: "Wildlife"
      }
  ];
  
  const topics = [
    "Environment",
    "Wildlife",
    "Energy",
    "Conservation",
    "Community"
  ];

  
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  return (
    <div className="petition-page">
      <div className="sidebar">
        {topics.map((topic, index) => (
          <button 
            key={index} 
            onClick={() => setSelectedTopic(topic)}
            className={`sidebar-topic ${selectedTopic === topic ? 'selected' : ''}`} // Template literals
          >
            {topic}
          </button>
        ))}
      </div>
      <div className="petition-container">
        {petitionData
          .filter(petition => petition.topic === selectedTopic)
          .map(petition => (
            <div key={petition.id} className="petition-card">
              <div className="petition-header">{petition.header}</div>
              <div className={`petition-status ${petition.status.toLowerCase()}`}>{petition.status}</div>
              <div className="petition-date">{petition.date}</div>
              <div className="petition-location">{petition.location}</div>
              <div className="petition-details">{petition.details}</div>
              <button className="view-button">View More</button>
            </div>
        ))}
      </div>
    </div>
  );
};