import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/netflix_profile.png";
import caret_img from "../../assets/caret_icon.svg";
import { logout } from "../../firebase"; // Ensure you have this import

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 70) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Netflix Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="Search" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="Notifications" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="Profile" className="profile" />
          <img src={caret_img} alt="Dropdown" />
          <div className="dropdown">
            <p onClick={logout}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
