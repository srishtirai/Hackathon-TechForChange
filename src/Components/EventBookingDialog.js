import React from "react";
import "./EventBookingDialog.css";

export const EventBookingDialog = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="event-booking-dialog">
      <div className="dialog-content">
        <h2>{event.header}</h2>
        <p>{event.date}</p>
        <p>{event.location}</p>
        <p>Description of the event...</p>
        <div className="button-container">
        <button className="close-button" onClick={onClose}>Close</button>
        <button className="close-button">Book</button>
        </div>
      </div>
      <div className="backdrop" onClick={onClose} />
    </div>
  );
};