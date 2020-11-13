import React from 'react';
import { Building } from '../icons/Building';
import { GithubIcon } from '../icons/Github';
import { InstagramIcon } from '../icons/Instagram';
import { LinkedInIcon } from '../icons/LinkedIn';
import { Location } from '../icons/Location';
import { StackoverflowIcon } from '../icons/Stackoverflow';
import { WorkIcon } from '../icons/Work';
import { EmailIcon } from '../icons/Email';
import { ToolIcon } from '../icons/Tool';
import './Navigation.scss';

const MobileLayout = () => (
  <div className="navigation-mobile">
    <div className="navigation-mobile">
      <ul className="navigation-mobile-icons">
        <li>
          <a href="https://github.com/iamtomhewitt">
            <GithubIcon />
          </a>
        </li>
        <li>
          <a href="http://instagram.com/iamtomhewitt">
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/3002268/tom?tab=profile">
            <StackoverflowIcon />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/thomas-hewitt-ab7724a8/">
            <LinkedInIcon />
          </a>
        </li>
      </ul>

      <hr />

      <ul className="navigation-mobile-icons">
        <li>
          <a href="#/experience">
            <WorkIcon />
          </a>
        </li>
        <li>
          <a href="#/github">
            <ToolIcon />
          </a>
        </li>
        <li>
          <a href="#/contact">
            <EmailIcon />
          </a>
        </li>
      </ul>
    </div>

  </div>
);

const DesktopLayout = () => (
  <div className="navigation">
    <div className="navigation-profile">
      <a href="#/">
        <img src={`${process.env.PUBLIC_URL}/images/profile.png`} alt="" />
      </a>
      <ul className="navigation-profile-info">
        <li>
          <Building />
          <span>William Hill</span>
        </li>
        <li>
          <Location />
          <span>Leeds</span>
        </li>
      </ul>
      <ul className="navigation-profile-info-icons">
        <li>
          <a href="https://github.com/iamtomhewitt">
            {' '}
            <GithubIcon />
          </a>
        </li>
        <li>
          <a href="http://instagram.com/iamtomhewitt">
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/3002268/tom?tab=profile">
            <StackoverflowIcon />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/thomas-hewitt-ab7724a8/">
            <LinkedInIcon />
          </a>
        </li>
      </ul>
    </div>

    <div className="navigation-links">
      <ul>
        <li><a href="#/experience">Experience</a></li>
        <li><a href="#/github">Github</a></li>
        <li><a href="#/contact">Contact</a></li>
      </ul>
    </div>

  </div>
);

const Navigation = () => {
  const isMobile = window.innerWidth < 480;

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default Navigation;
