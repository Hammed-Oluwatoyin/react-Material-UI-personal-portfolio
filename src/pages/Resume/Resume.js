import React from "react";

import { Grid, Typography } from "@material-ui/core";
import CustomTimeline, {
  CustomTimelineSeparator,
  CustomTimeLineSeparator,
} from "../../components/CustomTimeline/CustomTimeline";
import WorkIcon from "@material-ui/icons/Work";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";

import "./Resume.css";
import resumeData from "../../utils/resumeData";

const Resume = () => {
  return (
    <>
      {/*About me*/}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <Typography className="section_title_text" variant="h6">
            About Me
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className="aboutme_text">{resumeData.about}</Typography>
        </Grid>
      </Grid>

      {/*Education and experiences */}
      <Grid container className="section">
        <Grid item className="section_title  mb_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="resume_timeline">
            {/* Experiences */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Work History" icon={<WorkIcon />}>
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            {/*Experiences */}
            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education History" icon={<WorkIcon />}>
                {resumeData.educations.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {education.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {education.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            {/*Education */}
          </Grid>
        </Grid>
      </Grid>

      {/*Services*/}
      <Grid container className="section"></Grid>

      {/*Skills*/}
      <Grid container className="section"></Grid>

      {/*Contact*/}
      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
