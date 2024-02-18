import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { getUserDetails } from "../api";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { Progress } from 'semantic-ui-react';
import { getXPLevel} from '../constants';

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
  return (
    <div className="dashboard">
      <div className="div-2">
        <div className="body">
          <div className="content">
            <div className="overlap-group-2">
              <img
                className="DALLE"
                alt="Dalle"
                src={userDetails.profile_url ? userDetails.profile_url : "https://c.animaapp.com/ZxZGK3Jl/img/dall-e-2024-02-17-17-55-21---redesign-the-set-of-circular-icons-@2x.png"}
              />
            </div>
            <div className="text-wrapper-6">{userDetails.name}</div>
            <div className="text-wrapper-7">Rewards</div>
            <Progress percent={60} active>
              Active
            </Progress>
            <div className="overlap">
              <div className="text-wrapper-10">Achievements</div>
              <div className="rectangle-3" />
            </div>
            <div className="text-wrapper-9">Events</div>
            <div className="text-wrapper-12">20/1000 XP</div>
            <img className="line" alt="Line" src="https://c.animaapp.com/ZxZGK3Jl/img/line-1.svg" />
            <div className="rectangle-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
