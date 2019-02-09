import React from 'react';
import { withRouter } from 'react-router-dom';

const Footer = props => {
  let footerColor;
  if (props.path === "/") {
    footerColor = "purple";
  } else {
    footerColor ="white-footer";
  }
  return(
    <div className="footer">
      <div className={`footer-container  ${footerColor}`}>
        <p className="created-by">Created by: Sarah Walloga</p>
        <div className="footer-social">
          <li className="contact-icon-item">
            <a href="https://github.com/swalloga">
              <i className="fab fa-github fa-3x"></i>
            </a>
          </li>
          <li className="contact-icon-item">
            <a href="https://www.linkedin.com/in/sarahwalloga/">
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
          </li>
          <li className="contact-icon-item">
            <a href="https://angel.co/sarah-walloga">
              <i className="fab fa-angellist fa-3x"></i>
            </a>
          </li>
          <li className="contact-icon-item">
            <a href="https://www.sarahwalloga.com/">
              <i className="fas fa-home fa-3x"></i>
            </a>
          </li>
        </div>
        <div className="footer-info">© BEERPAL, INC.</div>
      </div>
    </div>
  );
};

export default Footer;
