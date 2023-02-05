import React from "react";
import me from "../img/me.jpg"
import "./aboveFold.css"

export default class AboveFold extends React.PureComponent {
  render() {
      return <div class="aboveFold">
        <div class= "foldCol">
          <h1 style={{marginBottom: "3%"}}>
            Hi! I"m <span className= "primary">Jenna</span>,<br/>Front-End Web Developer
          </h1>
          <p>
            Graduated Cum Laude in <span className= "primary"><strong>Applied Mathematics</strong></span>.
            I love all things, numbers, front-end development, computer vision and more!
          </p>
          <div>
          <a href='https://github.com/jennaleeshearer' target={'_blank'} rel="noreferrer" class="links"><i class="fab fa-github"></i></a>
          <a href='https://www.linkedin.com/in/jenna-lee-shearer-7aba841b3/' target={'_blank'} rel="noreferrer" class="links"><i class="fab fa-linkedin"></i></a>
        </div>
        </div>
        <div style={{width: "50%"}}>
          <img src={me} class="profilePic"/>
        </div>
      </div>
  }
}
