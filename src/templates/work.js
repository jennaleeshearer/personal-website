import React from "react";
import "./work.css"

export default class WorkExperience extends React.PureComponent {
  render() {
      return <div class="work">
        <h1 class="work-heading">Work Experience</h1>
        <table>
          <tr>
            <td>04/2021-present</td>
            <td><strong>Sotfware Developer</strong> <br></br>SwiftVEE</td>
            <td>
              <p>
                Maintained and enhanced features of a real-time auction platform using Ruby on Rails with Stimulus and Bootstrap.
                Created and released multiple React Native mobile applications, ensuring compatibility with both iOS and Android devices.
                Maintained and updated a Python server to ensure it's functionality. Queried databases using SQL to data generate reports.
              </p>
              <div class="badges">
                <span class="work-badge">Ruby</span>
                <span class="work-badge">React Native</span>
                <span class="work-badge">Python</span>
                <span class="work-badge">SQL</span>
                <span class="work-badge">Jekyll</span>
              </div>
            </td>
          </tr>

          <tr>
            <td>02/2020 – 06/2020</td>
            <td><strong>Teacher’s Assistant</strong> <br></br>Stellenbosch University</td>
            <td>
              <p>
                Assisted in teaching a second-year Applied Mathematics module. Helped students understand course
                concepts and topics, through one-on-one support during study sessions. Assisted in marking coursework
                and providing feedback to students, promoting their learning and development
              </p>
                <span class="work-badge">Matlab</span>
            </td>
          </tr>
        </table>
    </div>
  }
}
