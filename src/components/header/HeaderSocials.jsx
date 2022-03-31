import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.linkedin.com/in/omar-houssami-342315195/'
        target='_blank'
      >
        <BsLinkedin />
      </a>
      <a href='https://github.com/TshiSelle' target='_blank'>
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
