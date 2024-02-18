import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { getUserDetails } from "../api";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { Progress, Image } from 'semantic-ui-react';
import { getXPLevel} from '../constants';

const topics = [
  "Environment",
  "Wildlife",
  "Energy",
  "Conservation",
  "Community"
];

const getRandomScore = () => Math.floor(Math.random() * 101);

// Generate mock data for each topic with random scores
const mockTopicScores = topics.map(topic => ({
  focus: topic,
  topicScore: getRandomScore()
}));

const eventsData = [
  {
    id: 1,
    header: "Tree Planting Day",
    date: "2024-03-15",
    location: "Greenwood Forest",
    attendanceStatus: "Not Attended",
  },
  {
    id: 2,
    header: "Climate Change Symposium",
    date: "2024-03-20",
    location: "City Hall Auditorium",
    attendanceStatus: "Not Attended",
  },
  {
    id: 3,
    header: "Community Clean-Up",
    date: "2024-03-25",
    location: "Downtown Park",
    attendanceStatus: "Not Attended",
  },
  {
    id: 4,
    header: "Environmental Awareness Workshop",
    date: "2024-01-20",
    location: "Community Center",
    attendanceStatus: "Attended",
  },
  {
    id: 5,
    header: "Recycling Campaign Launch",
    date: "2023-02-25",
    location: "City Recycling Center",
    attendanceStatus: "Not Attended",
  },
];

const AchievementsContent = () => (
  <div className="achievements">
    <div className="leaderboard-section">
      <div className="topic-wise-scores">Keep Going !!</div>
      <span className="rank">Current Rank: 1200 position</span>
    </div>
    <div className="topic-wise-scores">Topic Wise Scores</div>
  <div className="achievements-container">
    {mockTopicScores.map((achievement, index) => (
      <div key={index} className="achievement-topic-container">
        <div className="achievement-topic-bubble">
          <span className="achievement-topic">{achievement.focus}</span>
          <span className="achievement-score">{` | ${achievement.topicScore}`}</span>
        </div>
      </div>
    ))}
  </div>
  
  <div className="topic-wise-scores">Levels</div>
    <div className="levels-section">
      <div className="level">
        <Image src='https://c.animaapp.com/t9C0xUaQ/img/dall-e-2024-02-17-17-55-21---redesign-the-set-of-circular-icons--1@2x.png' size='tiny' circular />
        <span className="level-name">Green Initiate</span>
      </div>
      <div className="level">
      <Image src='https://c.animaapp.com/ZxZGK3Jl/img/dall-e-2024-02-17-17-55-21---redesign-the-set-of-circular-icons-@2x.png' size='tiny' circular />
        <span className="level-name">Eco Warrior</span>
      </div>
      <div className="level locked">
      <Image src='https://c.animaapp.com/t9C0xUaQ/img/dall-e-2024-02-17-17-55-21---redesign-the-set-of-circular-icons-@2x.png' size='tiny' circular />
        <span className="level-name">Sustainability Champion</span>
      </div>
      {/* Add more levels as needed */}
    </div>
  </div>
);


const EventsContent = () => (
  <div className="events-container-dash">
    
    <div className="topic-wise-scores">Upcoming Events</div>
    <div className="upcoming-events">
      {eventsData.filter(event => new Date(event.date) > new Date()).map(event => (
        <div key={event.id} className="event-card-dash">
          <div className="event-info">
            <div className="event-header">{event.header}</div>
            <div className="event-date">{event.date}</div>
            <div className="event-location">{event.location}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="topic-wise-scores">Past Events</div>
    <div className="past-events">
      {eventsData.filter(event => new Date(event.date) <= new Date()).map(event => (
        <div key={event.id} className="event-card-dash">
          <div className="event-info">
            <div className="event-header">{event.header}</div>
            <div className="event-date">{event.date}</div>
            <div className="event-location">{event.location}</div>
            <div className="attendance-status">Attendance: {event.attendanceStatus}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const RewardsContent = () => {
  const rewardsData = [
    {
      id: 1,
      businessName: "GreenMart",
      offerValidity: "2024-03-31",
      productType: "Organic Vegetables",
      couponCode: "GMAR10",
      requiredLevel: 2,
    },
    {
      id: 2,
      businessName: "EcoClothes",
      offerValidity: "2024-04-15",
      productType: "Sustainable Apparel",
      couponCode: "ECO20",
      requiredLevel: 1,
    },
    {
      id: 3,
      businessName: "EcoTech",
      offerValidity: "2024-04-30",
      productType: "Solar Panels",
      couponCode: "SOLAR50",
      requiredLevel: 3,
    }
  ];

  return (
    <div className="rewards-container">
      <div className="rewards-list">
        {rewardsData.map((reward, index) => (
          <div key={index} className={`reward-item ${2 < reward.requiredLevel ? 'disabled' : ''}`}>
            <div className="business-name">{reward.businessName}</div>
            <div className="offer-validity">Valid until: {reward.offerValidity}</div>
            <div className="product-type">Product: {reward.productType}</div>
            {2 < reward.requiredLevel ? (
              <div className="disabled-text">Available at level {reward.requiredLevel}</div>
            ) : (
              <div className="coupon-code">Coupon Code: {reward.couponCode}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


const RectangleContentOptions = {
  Achievements: <AchievementsContent />,
  Events: <EventsContent />,
  Rewards: <RewardsContent />,
};


export const Dashboard = () => {
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
      getUserDetails().then(({data}) => {
        setUserDetails(data);
      }).catch(error => {
        console.log(error);
        toast((error.data && error.data.message) || "Could not fetch user data");
        navigate("/");
      });
  }, []);

  const [selectedOption, setSelectedOption] = useState("Achievements");

  return (
    <div className="dashboard">
      <div className="div-2">
        <div className="body">
          <div className="content">
            <div className="overlap-group-2">
              <Image src={"https://c.animaapp.com/ZxZGK3Jl/img/dall-e-2024-02-17-17-55-21---redesign-the-set-of-circular-icons-@2x.png"}  circular size="medium"/>
            </div>
            <div className="text-wrapper-6">{userDetails.name}</div><br></br>
            <div className="text-wrapper-12">{getXPLevel(userDetails.credits).levelName} | {1000 - getXPLevel(userDetails.credits).remaining}/1000 XP</div>
            {/* <Progress percent={60} active>
              Active
            </Progress> */}
          <div className="option-container">
            <div className={`text-wrapper ${selectedOption === "Achievements" ? "active" : ""}`} onClick={() => setSelectedOption("Achievements")}>Achievements</div>
            <div className={`text-wrapper ${selectedOption === "Events" ? "active" : ""}`} onClick={() => setSelectedOption("Events")}>Registered Events</div>
            <div className={`text-wrapper ${selectedOption === "Rewards" ? "active" : ""}`} onClick={() => setSelectedOption("Rewards")}>Rewards</div>
          </div>
                <img className="line" alt="Line" src="https://c.animaapp.com/ZxZGK3Jl/img/line-1.svg" />
                <div className="rectangle-4">
                  {RectangleContentOptions[selectedOption]}
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};
