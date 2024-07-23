import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube.png'
import twitter_icon from '../../assets/twitter.jpg'
import facebook_icon from '../../assets/facebook.png'
import instagram_icon from '../../assets/instagram.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer">
        <div className="footer-icons">
          <img src={facebook_icon} alt="" />
          <img src={instagram_icon} alt="" />
          <img src={twitter_icon} alt="" />
          <img src={youtube_icon} alt="" />
        </div>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cockie Prefrences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>@ 1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
