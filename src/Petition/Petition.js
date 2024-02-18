import React, { useState, useEffect } from "react";
import { Header } from "../Components/Header";
import {  getPetitions, getTags, updateEventStatus } from "../api";
import { Icon, Transition, Label} from 'semantic-ui-react';
import "./Petition.css";
import {toast} from 'react-toastify';
import { formatDate } from "../constants";

export const Petition = () => {
  const [tags, setTags] = useState([]);
  const [petitions, setPetitions] = useState([]);
  const [visible, setVisible] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState((tags.length && tags[0]) || {});
  const fetchPetitions = (tag_id) => {
    getPetitions(tag_id).then(response => {
      setPetitions(response.data);
    }).catch(errror => {
      console.log(errror);
      toast("Failed to fetch petitions !");
    })
  };

  useEffect(() => {
    getTags("PETITION").then(response => {
      const {data} = response;
      setTags(data);
    }).catch(errror => {
      console.log(errror);
      toast("Could not fetch tags", "error");
    });
    fetchPetitions();
  }, []);

  

  

/*
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
  ];*/

  const selectTopic = (topic) => {
    setSelectedTopic(topic.id)
    fetchPetitions(topic.id);
  }

  const handleClick = (petition) => {
    updateEventStatus(petition.id).then(response => {
      setVisible(!visible);
      setVisible(true);
      fetchPetitions(selectedTopic.id);
    }).catch(error => {
      console.log(error);
      toast.error("Failed to vote for petition. Please try again !");
    });
    
  }
  
  return (
    <div className="petition-page">
      <Header />
      <div className="sidebar">
        {tags.map((topic, index) => (
          <button 
            key={index} 
            onClick={() => selectTopic(topic)}
            className={`sidebar-topic ${selectedTopic.id === topic.id ? 'selected' : ''}`} // Template literals
          >
            {topic.name}
          </button>
        ))}
      </div>
      <div className="petition-container">
        {petitions
          .map(petition => {
            const voted = petition.status == "VOTED";
            return (
            <div key={petition.id} className="petition-card">
              <img className="petition-img" src={petition.images[0]} alt="Petition Image" />
              <div className="petition-header">{petition.name}</div>
              {petition.status && <Label style={{margin: "4px"}} color="brown">{petition.status}</Label>}
              <div className="petition-date">{formatDate(petition.created_at)}</div>
              <div className="petition-location">Boston, MA</div>
              <div className="petition-details">{petition.description}</div>
              <button className={voted ? "view-button--red": "view-button"} onClick={() => {handleClick(petition)}}>
                <Transition
                  animation={"jiggle"}
                  duration={500}
                  visible={visible}
                >
                  <Icon name="like" />
                </Transition>
              </button>
            </div>
        )
            })}
      </div>
    </div>
  );
};