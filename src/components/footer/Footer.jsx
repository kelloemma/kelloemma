import React from 'react';
import './footer.css'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
    return (
      <>
        <div className="footer-outter-container">
          <div className="footer-container">
            <div className="footer-icons">
              <ul>
                <li>
                  <FacebookIcon />
                </li>
                <li>
                  <InstagramIcon />
                </li>
                <li>
                  <TwitterIcon />
                </li>
                <li>
                  <YouTubeIcon />
                </li>
              </ul>
            </div>
            <div className="footer-lists">
              <div>
                <ul>
                  <li>Audio Describtion</li>
                  <li>Investor Relations</li>
                  <li>Privacy</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Help Center</li>
                  <li>Jobs</li>
                  <li>Legal Notice</li>
                  <li>
                    Do Not Sell or Share MyPersonal <br />
                    Information
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Gift Cards</li>
                  <li>Netflix Shop</li>
                  <li>Cookie Preference</li>
                  <li>Ad Choice</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Media Center</li>
                  <li>Term Of Use</li>
                  <li>Coorporate Information</li>
                </ul>
              </div>
            </div>
            <div className="service">
              <p>Service Code</p>
            </div>
            <div className="copy-write">&copy; 1997-2024 Netflix, Inc.</div>
          </div>
        </div>
      </>
    );
}

export default Footer;
