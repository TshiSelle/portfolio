import React from 'react';
import { BiCheck } from 'react-icons/bi';
import './field.css';

const Field = () => {
  return (
    <section id='field'>
      <h5>What I Do</h5>
      <h2>Field</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Modern User Interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User-Friendly reactive components</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Scalable Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Component Optimization</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX DESIGN */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Modern User Interface with straight forward functionality</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User-Friendly reactive components</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Scalable Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Component Optimization</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT*/}
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Modern User Interface with straight forward functionality</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User-Friendly reactive components</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Scalable Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Component Optimization</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION*/}
      </div>
    </section>
  );
};

export default Field;
