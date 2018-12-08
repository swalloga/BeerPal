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
          <li class="contact-icon-item">
            <a href="https://github.com/swalloga"><i class="fab fa-github fa-3x"></i></a>
          </li>
          <li class="contact-icon-item">
            <a href="https://www.linkedin.com/in/sarahwalloga/"><i class="fab fa-linkedin fa-3x"></i></a>
          </li>
          <li class="contact-icon-item">
            <a href="https://angel.co/sarah-walloga?al_content=view+your+profile&al_source=transaction_feed%2Fnetwork_sidebar"><i class="fab fa-angellist fa-3x"></i></a>
          </li>
          <li class="contact-icon-item">
            <a href="https://www.sarahwalloga.com/"><i class="fas fa-home fa-3x"></i></a>
          </li>
          <li class="contact-icon-item">
            <a href="mailto:swalloga@gmail.com"><i class="fa fa-envelope fa-3x"></i></a>
          </li>
        </div>
        <div className="footer-info">© BEERPAL, INC.</div>
      </div>
    </div>
  );
};

export default Footer;
