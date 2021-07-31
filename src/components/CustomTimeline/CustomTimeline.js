import React from "react";
import { Timeline } from "@material-ui/lab";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import WorkIcon from "@material-ui/icons/Work";
import { Typography } from "@material-ui/core";

const CustomeTimeline = () => {
  return (
    <Timeline className={"timeline"}>
      {/*Item Header*/}
      <TimelineItem className={"timeline_firstItem"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline_dot_header"}>
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography varaint="h6" className={"timeline_header"}>
            title
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default CustomeTimeline;
