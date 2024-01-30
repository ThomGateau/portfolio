import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>Thomas GATEAU</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/ThomGateau/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/thomasgateau/"><FiInstagram/></a>
        <a href="https://twitter.com/Thomas_Gateau"><IoLogoTwitter/></a>
      </div>
    </footer>
  )
}

export default Footer