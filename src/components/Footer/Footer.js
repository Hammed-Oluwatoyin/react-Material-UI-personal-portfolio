import React from "react";
import { Typography } from "@material-ui/core";
import "./Footer.css";
import resumeData from "../../utils/resumeData";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography classname="footer_name">{resumeData.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Developed by{" "}
          <a href="/" target="_blank">
            DAUDA HAMMED OLUWATOYIN
          </a>
          <br />
          Clone idea from{" "}
          <a
            href="https://themeforest.net/user/tavonline"
            rel="noreferrer"
            target="_blank"
          >
            Travonline
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
