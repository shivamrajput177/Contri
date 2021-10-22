import { Grid, IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="container__footer">
        <Grid container className="footer__container">          
          <Grid md={12} sm={12} className="social_footer">
            <hr className="social__hr" />
            <div className="social__tags_footer" style={{fontSize:"25px",color:"black",display:"flex"}}>
                <FacebookIcon className="social__tags__color__footer" />
                <LinkedInIcon className="social__tags__color__footer" />
                <TwitterIcon className="social__tags__color__footer" />
            </div>
            <div className="social__copyrights" style={{fontSize:"15px",color:"black"}}>
              Made with ❤️ © All Rights Reserved.
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Footer;
