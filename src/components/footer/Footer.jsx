import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        Omar Houssami
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#field'>Field</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.instagram.com/omar_houssami/'>
          <FiInstagram />
        </a>
        <a href='https://twitter.com/OmarHoussami7'>
          <IoLogoTwitter />
        </a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Omar Houssami 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
