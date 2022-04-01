import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href='#about' rel='noreferrer' className='footer__logo'>
        Omar Houssami
      </a>
      <ul className='permalinks'>
        <li>
          <a rel='noreferrer' href='#about'>
            Home
          </a>
        </li>
        <li>
          <a rel='noreferrer' href='#about'>
            About
          </a>
        </li>
        <li>
          <a rel='noreferrer' href='#experience'>
            Experience
          </a>
        </li>
        <li>
          <a rel='noreferrer' href='#field'>
            Field
          </a>
        </li>
        <li>
          <a rel='noreferrer' href='#portfolio'>
            Portfolio
          </a>
        </li>
        <li>
          <a rel='noreferrer' href='#testimonials'>
            Testimonials
          </a>
        </li>
        <li>
          <a rel='noreferrer' href='#contact'>
            Contact
          </a>
        </li>
      </ul>
      <div className='footer__socials'>
        <a rel='noreferrer' href='https://www.instagram.com/omar_houssami/'>
          <FiInstagram />
        </a>
        <a rel='noreferrer' href='https://twitter.com/OmarHoussami7'>
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
