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
          <a href='#about'>About</a>
          <a href='#experience'>Experience</a>
          <a href='#field'>Field</a>
          <a href='#portfolio'>Portfolio</a>
          <a href='#testimonials'>Testimonials</a>
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
