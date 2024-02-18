// Leaderboard.jsx
import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {

    fetch('/api/leaderboard')
      .then(response => response.json())
      .then(data => setLeaders(data));
  }, []);

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ul>
        {leaders.map((leader, index) => (
          <li key={index}>
            <span className="rank">{leader.rank}</span>
            <span className="name">{leader.name}</span>
            <span className="points">{leader.points} XP</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;