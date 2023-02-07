import React from "react";
import "./navbar.css"

export default class CustomNavbar extends React.PureComponent {
  render() {
      return <nav>
        <ul className="menu" style={{display: "flex"}}>
            <li className="logo" id="logo">&lt; / &gt;</li>
            <li className="item"><a href="#experience">Experience</a></li>
            <li className="item"><a href="#education">Education</a></li>
            <li className="item"><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  }
}
