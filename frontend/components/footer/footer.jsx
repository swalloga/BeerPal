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
      <div className="footer-social">social icons here</div>
      <div className="footer-links">links go here</div>
      <div className="region">USA flag</div>
      <div className="footer-info">copyright beerPal</div>
    </div>
  );
};

export default Footer;
