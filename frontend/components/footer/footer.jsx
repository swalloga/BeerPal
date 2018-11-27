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
    <div className={`footer-container  ${footerColor}`}>
      <div className="footer-info">© BEERPAL, INC.</div>
    </div>
  );
};

export default Footer;

// <div className="footer-social">
//   <img id="social-icon" className="icon" src={window.social_icons} />
// </div>
// <div className="footer-links">
//   <ul className="footer-link-list">
//     <li>FAQS</li>
//     <span className="separator">•</span>
//     <li>HELLO@BEERPAL.COM</li>
//     <span className="separator">•</span>
//     <li>TERMS OF USE</li>
//     <span className="separator">•</span>
//     <li>PRIVACY POLICY</li>
//     <span className="separator">•</span>
//     <li>WE'RE HIRING!</li>
//   </ul>
// </div>
