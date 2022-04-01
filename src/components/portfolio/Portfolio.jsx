import React from 'react';
import './portfolio.css';
import BlackJack from '../../assets/blackjack.jpeg';
import Python from '../../assets/python-logo.jpeg';
import CS from '../../assets/cs.jpeg';
import Discord from '../../assets/discord.png';
import Scam from '../../assets/scam.png';
import Eirene from '../../assets/eirene.jpeg';
import RSA from '../../assets/rsa.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={BlackJack} alt='blackjack' />
          </div>
          <div className='text'>
            <h3>Black Jack</h3>
            <small className='text-light'>Frontend Development</small>
          </div>
          <div className='portfolio__item-cta'>
            <a
              rel='noreferrer'
              href='https://github.com/TshiSelle/BlackJack'
              className='btn btn-primary'
              target='_blank'
            >
              Github
            </a>
            <a
              rel='noreferrer'
              href='https://github.com/TshiSelle/BlackJack/archive/refs/heads/main.zip'
              className='btn'
              target='_blank'
            >
              Download
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Python} alt='python' />
          </div>
          <div className='text'>
            <h3>Web Template with Python</h3>
            <small className='text-light'>Frontend Development</small>
          </div>
          <div className='portfolio__item-cta'>
            <a 
              rel='noreferrer'
              href='https://github.com/TshiSelle/WebTemplate'
              className='btn btn-primary'
              target='_blank'
            >
              Github
            </a>
            <a
              rel='noreferrer'
              href='https://github.com/TshiSelle/WebTemplate/archive/refs/heads/main.zip'
              className='btn'
              target='_blank'
            >
              Download
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={CS} alt='csharp' />
          </div>
          <div className='text'>
            <h3>App UI with C#</h3>
            <small className='text-light'>Frontend Development</small>
          </div>
          <div className='portfolio__item-cta'>
            <a
              rel='noreferrer'
              href='https://github.com/TshiSelle/App-UI'
              className='btn btn-primary'
              target='_blank'
            >
              Github
            </a>
            <a
              rel='noreferrer'
              href='https://github.com/TshiSelle/App-UI/archive/refs/heads/main.zip'
              className='btn'
              target='_blank'
            >
              Download
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Discord} alt='discord' />
          </div>
          <div className='text'>
            <h3>Discord Bot</h3>
            <small className='text-light'>Backend Development</small>
          </div>
          <div className='portfolio__item-cta'>
            <a
              rel='noreferrer'
              href='https://github.com/TshiSelle/DiscordBot'
              className='btn btn-primary'
              target='_blank'
            >
              Github
            </a>
            <a
              rel='noreferrer'
              href='https://github.com/TshiSelle/DiscordBot/archive/refs/heads/main.zip'
              className='btn'
              target='_blank'
            >
              Download
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Scam} alt='scam killer' />
          </div>
          <div className='text'>
            <h3>Scam Counter-Attack</h3>
            <small className='text-light'>Full Algorithm</small>
          </div>
          <div className='portfolio__item-cta'>
            <a
              rel='noreferrer'
              href='https://github.com/TshiSelle/Scam-Killer'
              className='btn btn-primary'
              target='_blank'
            >
              Github
            </a>
            <a
              rel='noreferrer'
              href='https://github.com/TshiSelle/Scam-Killer/archive/refs/heads/main.zip'
              className='btn'
              target='_blank'
            >
              Download
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Eirene} alt='project eirene' />
          </div>
          <div className='text'>
            <h3>Project Eirene</h3>
            <small className='text-light'>Fullstack development</small>
          </div>
          <div className='portfolio__item-cta'>
            <a
              rel='noreferrer'
              href='https://github.com/TshiSelle/eirene'
              className='btn btn-primary'
              target='_blank'
            >
              Github
            </a>
            <a
              rel='noreferrer'
              href='https://github.com/TshiSelle/eirene/archive/refs/heads/main.zip'
              className='btn'
              target='_blank'
            >
              Download
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={RSA} alt='rsa' />
          </div>
          <div className='text'>
            <h3>RSA Encryption</h3>
            <small className='text-light'>Full Algorithm</small>
          </div>
          <div className='portfolio__item-cta'>
            <a
              rel='noreferrer'
              href='https://github.com/TshiSelle/RSA'
              className='btn btn-primary'
              target='_blank'
            >
              Github
            </a>
            <a
              rel='noreferrer'
              href='https://github.com/TshiSelle/RSA/archive/refs/heads/master.zip'
              className='btn'
              target='_blank'
            >
              Download
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
