import React from "react";
import "./work.css"

export default class WorkExperience extends React.PureComponent {
  render() {
      return <div className="work d-flex flex-column align-items-center bg-white" id="experience">
        <h1 className="fw-bold">Work Experience</h1>
        <table>
          <tbody>
            <tr>
              <td>04/2021 - Present</td>
              <td><strong>Software Developer</strong> <br></br>SwiftVEE</td>
              <td>
                <ul>
                  <li><strong>Ruby on Rails Development</strong>: Maintained and enhanced features of a multi-tenant, real-time auction platform using Ruby on Rails with Stimulus and Bootstrap. Created and released new tenants by configuring the platform to meet the unique needs of each client.</li>
                  <li><strong>React Native Mobile Applications</strong>: Developed and deployed multiple React Native mobile applications, ensuring compatibility across both iOS and Android devices. Managed the entire deployment process to various app stores.</li>
                  <li><strong>Static Website Maintenance</strong>: Responsible for maintaining and updating static websites, ensuring they remain functional, secure, and up-to-date.</li>
                  <li><strong>Data Analysis and Visualization</strong>: Utilized SQL to query databases, generate reports, and analyze data. Created and managed data dashboards using Metabase, providing actionable insights and supporting data-driven decision-making.</li>
                  <li><strong>Python Server Maintenance</strong>: Maintained and optimized a Python server, enhancing its performance and functionality.</li>
                  <li><strong>Collaboration and Code Reviews</strong>: Worked closely with cross-functional teams to ensure the timely and efficient delivery of software projects. Participated in code reviews, offering constructive feedback to improve the overall quality of the codebase.</li>
                </ul>

                <div>
                  <span className="badge badge-dark bg-dark text-white me-3">Ruby</span>
                  <span className="badge badge-dark bg-dark text-white me-3">React Native</span>
                  <span className="badge badge-dark bg-dark text-white me-3">Jekyll</span>
                  <span className="badge badge-dark bg-dark text-white me-3">Python</span>
                  <span className="badge badge-dark bg-dark text-white me-3">SQL</span>
                  <span className="badge badge-dark bg-dark text-white me-3">Metabase</span>
                </div>
              </td>
            </tr>
            <tr><td></td></tr>
            <tr>
              <td>02/2020 – 06/2020</td>
              <td><strong>Teacher’s Assistant</strong> <br></br>Stellenbosch University</td>
              <td>
                <p>
                  Assisted in teaching a second-year Applied Mathematics module. Helped students understand course
                  concepts and topics through one-on-one support during study sessions. Assisted in marking coursework
                  and providing feedback to students, promoting their learning and development.
                </p>
                  <span className="badge badge-dark bg-dark text-white me-3">Matlab</span>
                  <span className="badge badge-dark bg-dark text-white me-3">LaTeX</span>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  }
}
