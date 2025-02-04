import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className='container'>
      <div className='about-section'>
        <div className='image-wrapper hidden'>
          <img
            src='https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg'
            alt='Avatar'
          />
        </div>
        <div className='content'>
          <div className='social_icons'>
            <a
              href='https://github.com/superMiracle'
              target='_blank'
              rel='noreferrer'
            >
              <GitHubIcon />
            </a>
            <a
              href='mailto:contact@andersonlakwan.xyz'
              target='_blank'
              rel='noreferrer'
            >
              <EmailIcon />
            </a>
            <a href='tel:+18504623043' target='_blank' rel='noreferrer'>
              <PhoneAndroidIcon />
            </a>
          </div>
          <h1>Lakwan Anderson</h1>
          <p>Front-End / Full Stack Engineer</p>

          <div className='mobile_social_icons'>
            <a
              href='https://github.com/superMiracle'
              target='_blank'
              rel='noreferrer'
            >
              <GitHubIcon />
            </a>
            <a
              href='mailto:contact@andersonlakwan.xyz'
              target='_blank'
              rel='noreferrer'
            >
              <EmailIcon />
            </a>
            <a href='tel:+18504623043' target='_blank' rel='noreferrer'>
              <PhoneAndroidIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
