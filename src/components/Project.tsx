import React from 'react';
import vp from '../assets/images/vpe2.png';
import da from '../assets/images/dae.png';
import wm from '../assets/images/wme.png';
import hh from '../assets/images/hh.png';
import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className='projects-container' id='projects'>
      <h1>Projects</h1>
      <div className='projects-grid'>
        <div className='project'>
          <a href='https://www.truepill.com/' target='_blank' rel='noreferrer'>
            <img src={vp} className='zoom' alt='thumbnail' width='100%' />
          </a>
          <a href='https://www.truepill.com/' target='_blank' rel='noreferrer'>
            <h2>Virtual Pharmacy Platform</h2>
          </a>
          <p>
            Developed and optimized core features for the Virtual Pharmacy
            Platform using React, Next.js, Redux, Vite, Tailwind CSS,
            Typescript, Jest, React Testing Library, Snowflake, Bitbucket.
          </p>
        </div>
        <div className='project'>
          <a href='https://www.walmart.com/' target='_blank' rel='noreferrer'>
            <img src={wm} className='zoom' alt='thumbnail' width='100%' />
          </a>
          <a href='https://www.walmart.com/' target='_blank' rel='noreferrer'>
            <h2>Walmart UI</h2>
          </a>
          <p>
            Contributed to development and maintenance of Walmart website using
            React, Redux, SASS/SCSS, JavaScript, Webpack, Babel, REST APIs,
            GitLab, CircleCI, Sentry, Docker.
          </p>
        </div>
        <div className='project'>
          <a
            href='https://www.dolarapp.com/en-MX'
            target='_blank'
            rel='noreferrer'
          >
            <img src={da} className='zoom' alt='thumbnail' width='100%' />
          </a>
          <a
            href='https://www.dolarapp.com/en-MX'
            target='_blank'
            rel='noreferrer'
          >
            <h2>DolarApp</h2>
          </a>
          <p>
            Designed and developed mobile application and landing website using
            React Native, JavaScript, Firebase, Bootstrap, transforming
            wireframes into engaging, interactive application.
          </p>
        </div>
        <div className='project'>
          <a
            href='https://www.hiltonhyland.com//'
            target='_blank'
            rel='noreferrer'
          >
            <img src={hh} className='zoom' alt='thumbnail' width='100%' />
          </a>
          <a
            href='https://www.hiltonhyland.com//'
            target='_blank'
            rel='noreferrer'
          >
            <h2>Hilton Hyland Website</h2>
          </a>
          <p>
            Developed and launched the Hilton & Hyland website, enhancing its
            user experience and functionality to showcase luxury real estate
            listings and attract high-net-worth clients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
