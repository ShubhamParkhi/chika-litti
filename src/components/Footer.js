import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      {/* footer section */}
      <footer className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-col">
              <div className="footer_contact">
                <h4>Contact Us</h4>
                <div className="contact_link_box">
                  <Link to="/book">
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <span> Location </span>
                  </Link>
                  <a href="/">
                    <i className="fa fa-phone" aria-hidden="true" />
                    <span> Call +91 7050225661 </span>
                  </a>
                  <a href="/">
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <span> satyamparkhi@gmail.com </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 footer-col">
              <div className="footer_detail">
                <a href="/" className="footer-logo">
                  {" "}
                  Chika litti{" "}
                </a>
                <p>
                  Witness the riverside view of Ganges with beautiful Sunset and
                  authentic taste of our Desi Street Food "Chicken Litti"
                </p>
                <div className="footer_social">
                  <a href="/">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a href="/">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                  <a href="/">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 footer-col">
              <h4>Opening Hours</h4>
              <p>Everyday</p>
              <p>10.00 Am -10.00 Pm</p>
            </div>
          </div>
          <div className="footer-info">
            <p>
              © <span id="displayYear">2022</span> All Rights Reserved By{" "}
              <a href="https://html.design/">Me</a>
              <br />
              <br />
              © <span id="displayYear" /> Distributed By{" "}
              <a
                href="https://themewagon.com/"
                target="_blank"
                rel="noreferrer"
              >
                Shubham Parkhi
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
