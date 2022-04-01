import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageDetail } from 'react-icons/bi';
import { MdOutlineHomeRepairService } from 'react-icons/md';
import { useState } from 'react';
import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a
        rel='noreferrer'
        href='#about'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        rel='noreferrer'
        href='#experience'
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        rel='noreferrer'
        href='#field'
        onClick={() => setActiveNav('#field')}
        className={activeNav === '#field' ? 'active' : ''}
      >
        <MdOutlineHomeRepairService />
      </a>
      <a
        rel='noreferrer'
        href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
