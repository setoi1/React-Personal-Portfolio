import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Contacts = () => {
  return (
    <div className="contacts-section">
      <div className="contacts-container">
        <div className="section-header-text">
          <h3>Contacts</h3>
        </div>
          <ul className="contacts-list">
            <li className="contacts-list-item">
              <a className="contacts-item-link" href="https://www.linkedin.com/in/ianseto/" rel="noreferrer" target="_blank">
                <LinkedInIcon />
              </a>
            </li>
            <li className="contacts-list-item">
              <a className="contacts-item-link" href="https://github.com/setoi1" rel="noreferrer" target="_blank">
                <GitHubIcon />
              </a>
            </li>
          </ul>
      </div>
    </div>
  );
}

export default Contacts;
