import React from "react";
import "./navbar.css"

export default class CustomNavbar extends React.PureComponent {
  render() {
      return <nav>
        <ul className="menu" style={{display: "flex"}}>
            <li className="logo"><a href="#"> &lt; / &gt;</a></li>
            <li className="item"><a href="#">Home</a></li>
            <li className="item"><a href="#">Contact</a></li>
        </ul>
    </nav>
  }
}
