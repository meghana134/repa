import React from "react";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
// import SocialFlow from "./SocialFlow";
import { SocialMediaIconsReact } from "social-media-icons-react";
// import SocialFollow from "./SocialFollow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      <div className="footer">
        {/* <h6>Contact Us</h6> */}
        <CallOutlinedIcon className="ph-f" />
        <p>+7688787987879</p>
        <div className="email-f">
          <MailOutlinedIcon className="em-f" />
          <p>reapiro@gmail.com</p>
        </div>
        <div className="sicons-f">
          <div class="social-container">
            <a
              href="https://www.facebook.com/learnbuildteach/"
              className="facebook social"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://www.twitter.com/jamesqquick"
              className="twitter social"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/learnbuildteach"
              className="instagram social"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://www.youtube.com/c/jamesqquick"
              className="youtube social"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a
              href="https://www.youtube.com/c/jamesqquick"
              className="linkedin social"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
