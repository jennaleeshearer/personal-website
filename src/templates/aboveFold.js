import React from "react";
import me from "../img/me.jpg"
import "./aboveFold.css"

export default class AboveFold extends React.PureComponent {
  render() {
      return <div className="aboveFold">
        <div className= "foldCol">
          <h1>
            Hi! I"m <span className= "primary">Jenna</span>,<br/>Front-End Web Developer
          </h1>
          <p>
            Graduated Cum Laude in <span className= "primary"><strong>Applied Mathematics</strong></span>.
          </p>
          <p>
            I love all things, mathematics, front-end development, computer vision and more! I am a highly motivated and hardworking front-end
            software developer with a strong background in applied mathematics. My passion for coding and problem-solving combined with my
            mathematical knowledge allows me to approach software development in a unique and creative way. I am always looking for
            new challenges to expand my skills and knowledge.
          </p>
          <div>
          <a href='https://github.com/jennaleeshearer' target={'_blank'} rel="noreferrer" className="links"><i className="fab fa-github"></i></a>
          <a href='https://www.linkedin.com/in/jenna-lee-shearer-7aba841b3/' target={'_blank'} rel="noreferrer" className="links"><i className="fab fa-linkedin"></i></a>
        </div>
        </div>
        <div>
          <img src={me} className="profilePic"/>
        </div>
      </div>
  }
}
