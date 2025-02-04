import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div>
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
      {/* <p>A portfolio designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> with 💜</p> */}
    </footer>
  );
}

export default Footer;
