import React from "react";
import me from "../img/me.jpg"
import "./aboutme.css"

export default class AboutNe extends React.PureComponent {
  render() {
      return <div className="bg-img">
        <div className="text-white text-center p-5">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="mb-3">
                <span className="subheading fw-bold rounded bg-white text-dark">
                  Hi There!
                </span>
              </div>

              <h2 className="mt-2">I am <strong>Jenna-Lee Shearer</strong>, </h2>
              <h2 className="mt-0 mb-4">a Software Developer</h2>
              <h5 className="mb-3">Graduated Cum Laude in <strong>Applied Mathematics</strong>.</h5>

              <p>
                I'm a passionate and driven software developer with a cum laude degree in Applied Mathematics.
                Combining my love for coding with my analytical skills, I approach development with creativity and precision.
                With diverse experience in both software development and data analysis, I'm always eager to tackle new challenges
                and expand my skill set.
              </p>
              <a href='https://github.com/jennaleeshearer' target={'_blank'} rel="noreferrer" className="text-decoration-none text-white me-3">
                <i className="fab fa-github"></i> Github
              </a>
              <a href='https://www.linkedin.com/in/jenna-lee-shearer-7aba841b3/' target={'_blank'} rel="noreferrer" className="text-decoration-none text-white me-3">
                <i className="fab fa-linkedin"></i> Linkedin
              </a>
              <a href='https://public.tableau.com/app/profile/jenna.lee.shearer/' target={'_blank'} rel="noreferrer" className="text-decoration-none text-white">
                <i className="fa-solid fa-database"></i> Tableau
              </a>
            </div>
            <div className="col-0 col-md-4 d-flex flex-column justify-content-center align-items-center">
              <img src={me} className="d-none d-md-block rounded profile" alt="jennaleeshearer"/>
            </div>
          </div>
        </div>
      </div>
  }
}
