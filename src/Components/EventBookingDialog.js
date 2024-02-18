import React from "react";
import { formatDate } from "../constants";
import "./EventBookingDialog.css";

const eventStatus = {
  "ATTENDED": {
    action: false,
    buttonName: "Attended"
  },
  "ATTENDING": {
    action: true,
    buttonName: "I'm Out"
  },
  "": {
    action: true,
    buttonName: "I'm In"
  },
  "BLOCKED": {
    action: true,
    buttonName: "I'm In"
  }
}

export const EventBookingDialog = ({ event, onClose, onClick = () => {} }) => {
  if (!event) return null;
  let buttonAttributes = {buttonName: "", action: false};
  if (event.type == 'EVENT') {
    buttonAttributes =  eventStatus[event.status];
  }
  
  return (
    <div className="event-booking-dialog">
      <div className="dialog-content">
        <h2>{event.name}</h2>
        <p>{formatDate(event.created_at)}</p>
        <p>{event.description}</p>
        <div className="button-container">
        <button className="close-button" onClick={onClose}>Close</button>
        {buttonAttributes["buttonName"] ? <button className={buttonAttributes["action"] ? "close-button": "close-wo-button"} onClick={ buttonAttributes["action"] ? () => onClick(event.id) : null }>{buttonAttributes["buttonName"]}</button>: null}
        </div>
      </div>
      <div className="backdrop" onClick={onClose} />
    </div>
  );
};