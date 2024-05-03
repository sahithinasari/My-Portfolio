/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Footer
      </a>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">experience</a>
        </li>
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
      <a href="https://facebook.com"><FaFacebookF/></a>
      <a href="https://instagram.com"><FiInstagram/></a>
      <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>
      <div className="footer-copyright">
      <small>&copy;All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
