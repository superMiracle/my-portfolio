import React from 'react';
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import {
  faChartPie,
  faLayerGroup,
  faServer,
  faMobileAndroidAlt,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFront = [
  'React',
  'TypeScript',
  'JavaScript',
  'Redux',
  'Next.js',
  'Tailwind CSS',
  'Material UI',
  'BootStrap',
  'SASS',
  'HTML5',
  'CSS3',
];

const labelsFull = [
  'RESTful APIs',
  'GraphQL',
  'Websocket',
  'Apollo',
  'Firebase',
  'Node.js',
  'Express.js',
  'C#',
  'Python',
  'MongoDB',
  'PostgreSQL',
  'MySQL',
];

const labelsVisualization = ['Recharts', 'D3', 'Chart.js', 'Three.js'];

const labelsData = [
  'React Window',
  'React Virtualized',
  'WebSockets',
  'Pagination',
  'Infinite Scrolling',
  'Memoization',
  'Data Caching',
  'Data Streaming',
];

const labelsMobile = ['React Native', 'Android', 'IOS', 'Native Modules'];

const labelsPerformance = [
  'Lazy Loading',
  'Code Splitting',
  'Memoization',
  'Minification',
  'Compression',
  'Caching',
  'Debouncing/Throttling',
];

function Expertise() {
  return (
    <div className='container' id='expertise'>
      <div className='skills-container'>
        <h1>Expertise</h1>
        <div className='skills-grid'>
          <div className='skill'>
            <FontAwesomeIcon icon={faReact} size='3x' />
            <h3>Front End Web Development</h3>
            {/* <p>
              I have built a diverse array of web applications from scratch
              using modern technologies such as React, Next.js, Redux, and
              modern CSS libraries .
            </p> */}
            <div className='flex-chips'>
              {/* <span className='chip-title'>Tech stack:</span> */}
              {labelsFront.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          <div className='skill'>
            <FontAwesomeIcon icon={faLayerGroup} size='3x' />
            <h3>Full Stack Web Development</h3>
            {/* <p>
              I have built a diverse array of web applications from scratch
              using modern technologies such as React and Flask. I have a strong
              proficiency in the SDLC process and frontend + backend
              development.
            </p> */}
            <div className='flex-chips'>
              {/* <span className='chip-title'>Tech stack:</span> */}
              {labelsFull.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          <div className='skill'>
            <FontAwesomeIcon icon={faChartPie} size='3x' />
            <h3>Data Visualization</h3>
            {/* <p>
              Experienced in building interactive and visually compelling data
              visualizations, transforming complex datasets into intuitive and
              insightful user interfaces.
            </p> */}
            <div className='flex-chips'>
              {/* <span className='chip-title'>Tech stack:</span> */}
              {labelsVisualization.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          <div className='skill'>
            <FontAwesomeIcon icon={faServer} size='3x' />
            <h3>Large Dataset Handling</h3>
            {/* <p>
              Experienced in efficiently handling and visualizing large datasets
              on the front end using techniques like virtualization, pagination,
              and optimized state management to ensure smooth performance and
              seamless user experience
            </p> */}
            <div className='flex-chips'>
              {/* <span className='chip-title'>Tech stack:</span> */}
              {labelsData.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>
          <div className='skill'>
            <FontAwesomeIcon icon={faMobileAndroidAlt} size='3x' />
            <h3>Mobile Development</h3>
            {/* <p>
              Developed high-performance, cross-platform mobile applications
              using React Native, integrating third-party APIs, optimizing
              performance, and ensuring a seamless user experience across iOS
              and Android.
            </p> */}
            <div className='flex-chips'>
              {/* <span className='chip-title'>Tech stack:</span> */}
              {labelsMobile.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>
          <div className='skill'>
            <FontAwesomeIcon icon={faCogs} size='3x' />
            <h3>Performance Optimization</h3>
            {/* <p>
              Ensured fast, seamless, and efficient user experiences by
              minimizing load times, optimizing assets, and leveraging modern
              coding practices.
            </p> */}
            <div className='flex-chips'>
              {/* <span className='chip-title'>Tech stack:</span> */}
              {labelsPerformance.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
