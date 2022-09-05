import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Contacts = () => {
  return (
    <div className="contacts-page">
      <div className="section-header-text">
        <h3>Contacts</h3>
      </div>
        <ul className="contacts-list">
          <li className="contacts-list-item">
            <a className="contacts-item-link" href="mailto:i.seto00@gmail.com" rel="noreferrer" target="_blank">
              <MailIcon />
            </a>
            <a className='contacts-item-link'>
              i.seto00@gmail.com
            </a>
          </li>
          <li className="contacts-list-item">
            <a className="contacts-item-link" href="https://www.linkedin.com/in/ianseto" rel="noreferrer" target="_blank">
              <LinkedInIcon />
            </a>
            <a className='contacts-item-link' href="https://www.linkedin.com/in/ianseto" rel="noreferrer" target="_blank">
              linkedin.com/in/ianseto
            </a>
          </li>
          <li className="contacts-list-item">
            <a className="contacts-item-link" href="https://github.com/setoi1" rel="noreferrer" target="_blank">
              <GitHubIcon />
            </a>
            <a className='contacts-item-link' href="https://github.com/setoi1" rel="noreferrer" target="_blank">
              github.com/setoi1
            </a>
          </li>
        </ul>
    </div>
  );
}

export default Contacts;
