import React from 'react';
import { withRouter } from 'react-router-dom';

class Footer extends React.Component {

  render() {
    return(
      <div className="footer-container">
        <div className="footer-social">social icons here</div>
        <div className="footer-links">links go here</div>
        <div className="region">USA flag</div>
        <div className="footer-info">copyright beerPal</div>
      </div>
    );
  }
}

export default withRouter(Footer);
