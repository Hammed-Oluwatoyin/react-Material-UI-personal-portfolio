import React from "react";
import { Typography } from "@material-ui/core";
import "./Profile.css";
import hammed from "../../assets/images/hammed.jpg";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../CustomTimeline/CustomTimeline";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import resumeData from "../../utils/resumeData";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomButton from "../CustomButton/CustomButton";
import GetAppIcon from "@material-ui/icons/GetApp";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} rel="noreferrer" target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Dauda Hammed Oluwatoyin</Typography>
        <Typography className="title">Frontend Developer</Typography>
      </div>
      <figure className="profile_image">
        <img src={hammed} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="title" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />

          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <br />
      </div>
    </div>
  );
};

export default Profile;
