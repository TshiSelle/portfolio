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
            <h3>Game Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>C# and C++ project DevOp</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>2D Sprite Mechanism</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Environment Physics Optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Memory Use Efficieny</p>
            </li>
          </ul>
        </article>
        {/* END OF Game Design */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>PostgreSQL and NoSQL Dev</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Fullstack JavaScript Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Traffic Control</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Component Optimization</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service__head'>
            <h3>Computer Security</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Weak Link Checking</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Data Encryption With RSA</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>One Way Data Secuirty With SHA-512</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Middleman Network Monitor</p>
            </li>
          </ul>
        </article>
        {/* END OF COMPUTER SECURITY */}
      </div>
    </section>
  );
};

export default Field;
