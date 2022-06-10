import React, { Component } from "react";
import PropTypes from "prop-types";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <p className="copyright">{this.props.copyrightText}</p>
                <a
                  className="copyright text-white"
                  href="https://fineit.io/"
                  target="_blank"
                >
                  {this.props.corporate}
                </a>
              </div>
              <div className="col-md-7">
                <div className="social-icons bottom">
                  <ul className="list-inline">
                    <li>{this.props.socialTitle} </li>
                    {/* <li><Link to={this.props.FacebookLink}><Icofont icon="icofont-facebook"/></Link></li> */}
                    {/* <li><Link to={this.props.TwitterLink}><Icofont icon="icofont-twitter"/></Link></li> */}
                    {/* <li><Link to={this.props.InstagramLink}><Icofont icon="icofont-instagram"/></Link></li> */}
                    <li>
                      <a href={this.props.SkypeLink} target="_blank">
                        <Icofont icon="icofont-skype" />
                      </a>
                    </li>
                    <li>
                      <a href={this.props.DribbleLink} target="_blank">
                        <Icofont icon="icofont-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href={this.props.linkedinLink} target="_blank">
                        <Icofont icon="icofont-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
//Props Types
Footer.propTypes = {
  copyrightText: PropTypes.string,
  corporate: PropTypes.string,
  FacebookLink: PropTypes.string,
  TwitterLink: PropTypes.string,
  InstagramLink: PropTypes.string,
  linkedinLink: PropTypes.string,
};

//Default Props
Footer.defaultProps = {
  copyrightText: "2021 © All Rights Reserved.",
  corporate: "Corporate Partner FineIT",
  socialTitle: "Follow Us On:",
  DribbleLink: "https://dribbble.com/creativetechsolutions",
  SkypeLink: "https://join.skype.com/invite/jy3x4RjBXyVM",
  linkedinLink: "https://www.linkedin.com/in/muzammalrahim/",
};
export default Footer;
