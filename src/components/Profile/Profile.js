import React from "react";
import { Typography } from "@material-ui/core";
import "./Profile.css";
import hammed from "../../assets/images/hammed.jpg";
import CustomTimeline from "../CustomTimeline/CustomTimeline";

const Profile = () => {
  return (
    <div className="profile_container_shadow">
      <div className="profile_name">
        <Typography className="name">Dauda Hammed Oluwatoyin</Typography>
        <Typography className="title">Frontend Developer</Typography>
      </div>
      <figure className="profile_image">
        <img src={hammed} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline />
        <br />
        <button>my Button</button>
      </div>
    </div>
  );
};

export default Profile;
