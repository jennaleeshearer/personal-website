import React from "react";
import "./footer.css"

export default class Footer extends React.PureComponent {
  render() {
      return <div className="footer primary" id="contact">
        <h2 class="contact-us">Contact Me</h2>
        <div class="contact-details"><a href="mailto:shearerjennalee@gmail.com" >shearerjennalee@gmail.com</a></div>
        <div class="contact-details"><a href="tel:27 60 528 5542">+27 60 528 5542</a></div>
        <div class="contact-details">Cape Town, South Africa</div>
        <div class="copyright"><small>Copyright © 2023 - Jenna-Lee Shearer</small></div>
    </div>
  }
}
