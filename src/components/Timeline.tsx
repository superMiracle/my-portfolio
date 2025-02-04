import React from 'react';
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id='history'>
      <div className='items-container'>
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date='March 2022 - present'
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className='vertical-timeline-element-title'>
              Senior Front-End Developer
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Truepill | Hayward, CA
            </h4>
            <p>Full-End Development, Cotentful CMS, Web Accessibility,</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='August 2019 - February 2022'
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className='vertical-timeline-element-title'>
              Senior Front-End Engineer
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Walmart | Bentonville, AR
            </h4>
            <p>
              Front End Development, Performance Optimizations, Unit and
              Integration Tests
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='July 2016 - July 2019'
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className='vertical-timeline-element-title'>
              Full-Stack Developer
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Fair Technologies | Beverly Hills, CA
            </h4>
            <p>Full-Stack Development, Data Visualization, Third-party APIs</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='September 2013 - June 2016'
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className='vertical-timeline-element-title'>
              Web and Mobile Developer
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              DolarApp | Pensacola, FL
            </h4>
            <p>Front-End Development, Mobile Development, Version Control</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
