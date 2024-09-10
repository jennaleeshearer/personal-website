import React from "react";

export default class ContactMe extends React.PureComponent {
  render() {
      return <div className="mb-5" id="contact">
        <h2 className="my-3 fw-bold">Contact Me</h2>
        <p>Please feel free to contact me at any time</p>
        <div>
          <a href="mailto:shearerjennalee@gmail.com" className="text-decoration-none text-dark">
            <i className="far fa-envelope me-2"></i>shearerjennalee@gmail.com
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/jenna-lee-shearer-7aba841b3/" target={"_blank"} rel="noreferrer" className="text-decoration-none text-dark">
            <i className="fab fa-linkedin me-2"></i>
            Linkedin
            </a>
        </div>
        <div>
          <i className="fas fa-map-marker-alt me-2"></i>
          Amsterdam, Netherlands
        </div>
    </div>
  }
}
