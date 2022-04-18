import React from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

import ME from '../../assets/me.jpeg';

import './about.css';
import '../nav/nav.css';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='me' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1 Year Asset Designing</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>2 Regional</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
          </div>
          <p>
            Work driven, qualified and motivated software engineer, experienced
            with Full stack web development using different stack technologies.
            I am driven to continuously learn and improve myself and my
            environment.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk!!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
