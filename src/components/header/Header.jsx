import React from 'react';
import './header.css'
import netflixLogo from '../../assets/images/NetflixLogo.png'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
    return (
      <>
        <div className="header-outter-container">
          <div className="header-container">
            <div className="header-left">
              <ul>
                <li>
                  <img src={netflixLogo} alt="" width="100px" />
                </li>
                <li>Home</li>
                <li>Tv Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
              </ul>
            </div>
            <div className="header-right">
              <ul>
                <li>
                  <SearchIcon />
                </li>
                <li>kids</li>
                <li>
                  <NotificationsNoneIcon />
                </li>
                <div className="accountBox">
                  <li>
                    <AccountBoxIcon />
                  </li>
                  <li>
                    <ArrowDropDownIcon />
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
}

export default Header;
