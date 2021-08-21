import React from "react";
import { Timeline } from "@material-ui/lab";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Typography } from "@material-ui/core";
import "./CustomTimeline.css";

const CustomeTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className="timeline">
      {/*Item Header*/}
      <TimelineItem className="timeline_firstItem">
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot className="timeline_dot_header">{icon}</TimelineDot>
        </TimelineSeparator>
        <TimelineContent classname="timeline_content">
          <Typography variant="h6" className="timeline_header">
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {children}
    </Timeline>
  );
};

export const CustomTimelineSeparator = () => (
  <TimelineSeparator className="separator_padding">
    <TimelineConnector />
    <TimelineDot className="timeline_dot" />
  </TimelineSeparator>
);

export default CustomeTimeline;
