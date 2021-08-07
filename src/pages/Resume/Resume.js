import React from "react";
import { Grid, Typography } from "@material-ui/core";
import "./Resume.css";
import resumeData from "../../utils/resumeData";

const Resume = () => {
  return (
    <>
      {/*About me*/}
      <Grid container className="section pb_45">
        <Grid item className="section_title">
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
      <Grid container className="section"></Grid>

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
