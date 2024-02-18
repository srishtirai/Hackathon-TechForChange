import React, { useState } from "react";
import { Header } from "../Components/Header";
import { EventBookingDialog } from "../Components/EventBookingDialog"; // New dialog component
import "./Events.css";


export const Events = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openDialog = (event) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };


const eventsData = [
  {
    id: 1,
    header: "Community Clean Up",
    date: "April 22, 2024",
    location: "Boston Park",
    image: "url-to-event-image-1.jpg",
  },
  {
    id: 2,
    header: "Tree Planting Day",
    date: "May 10, 2024",
    location: "Greenwood Forest",
    image: "url-to-event-image-2.jpg",
  },
  {
    id: 2,
    header: "Tree Planting Day",
    date: "May 10, 2024",
    location: "Greenwood Forest",
    image: "url-to-event-image-2.jpg",
  },
  {
    id: 2,
    header: "Tree Planting Day",
    date: "May 10, 2024",
    location: "Greenwood Forest",
    image: "url-to-event-image-2.jpg",
  },
  {
    id: 2,
    header: "Tree Planting Day",
    date: "May 10, 2024",
    location: "Greenwood Forest",
    image: "url-to-event-image-2.jpg",
  }
];

  return (
    <div className="events">
      <Header className="header-instance" overlapGroupClassName="design-component-instance-node" />
      <div className="events-container">
        {eventsData.map(event => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.header} className="event-image" />
            <div className="event-info">
              <div className="event-header">{event.header}</div>
              <div className="event-date">{event.date}</div>
              <div className="event-location">{event.location}</div>
              <button className="book-button" onClick={() => openDialog(event)}>View</button>
            </div>
          </div>
        ))}
      </div>
      {isDialogOpen && <EventBookingDialog event={selectedEvent} onClose={() => setIsDialogOpen(false)} />}
    </div>
  );
};