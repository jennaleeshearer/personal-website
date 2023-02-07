import React from "react";
import "./contact.css"

export default class ContactMe extends React.PureComponent {
  render() {
      return <div className="contact" id="contact">
        <h2 className="contact-us">Contact Me</h2>
        <p>Please feel free to contact me at any time</p>
        <div className="contact-details">
          <a href="mailto:shearerjennalee@gmail.com">
            <i className="far fa-envelope"></i>shearerjennalee@gmail.com
          </a>
        </div>
        <div className="contact-details">
          <a href="https://www.linkedin.com/in/jenna-lee-shearer-7aba841b3/" target={"_blank"} rel="noreferrer">
            <i className="fab fa-linkedin"></i>
            Linkedin
            </a>
        </div>
        <div className="contact-details">
          <i className="fas fa-map-marker-alt"></i>
          Cape Town, South Africa
        </div>
    </div>
  }
}
