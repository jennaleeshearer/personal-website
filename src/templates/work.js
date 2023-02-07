import React from "react";
import "./work.css"

export default class WorkExperience extends React.PureComponent {
  render() {
      return <div className="work" id="experience">
        <h1 className="work-heading">Work Experience</h1>
        <table>
          <tbody>
            <tr>
              <td>04/2021 - Present</td>
              <td><strong>Software Developer</strong> <br></br>SwiftVEE</td>
              <td>
                <p>
                  Assisted in maintaining and enhancing front-end features of a multi-tenant, real-time auction platform using Ruby on Rails
                  with Stimulus and Bootstrap. Created and released new tenants, which involved configuring the platform to meet
                  the unique requirements of each tenant. Created and released multiple React Native mobile applications, ensuring
                  compatibility with both iOS and Android devices. Created and maintained static sites in Jekyll with
                  Stimulus and Bootstrap. Maintained and updated a Python server to ensure its functionality.
                  Queried databases using SQL to generate data reports.
                </p>
                <div className="badges">
                  <span className="work-badge">Ruby</span>
                  <span className="work-badge">React Native</span>
                  <span className="work-badge">Jekyll</span>
                  <span className="work-badge">Python</span>
                  <span className="work-badge">SQL</span>
                </div>
              </td>
            </tr>

            <tr>
              <td>02/2020 – 06/2020</td>
              <td><strong>Teacher’s Assistant</strong> <br></br>Stellenbosch University</td>
              <td>
                <p>
                  Assisted in teaching a second-year Applied Mathematics module. Helped students understand course
                  concepts and topics through one-on-one support during study sessions. Assisted in marking coursework
                  and providing feedback to students, promoting their learning and development.
                </p>
                  <span className="work-badge">Matlab</span>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  }
}
