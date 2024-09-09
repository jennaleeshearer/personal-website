import React from "react";

export default class Footer extends React.PureComponent {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <div className="footer bg-dark text-light py-3" id="contact">
        <small>Copyright © {currentYear} - Jenna-Lee Shearer</small>
      </div>
    );
  }
}
