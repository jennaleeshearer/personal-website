import React from "react";
import "./work.css"

export default class WorkExperience extends React.PureComponent {
  render() {
      return <div class="work">
        <table>
          <tr>
            <td>04/2021-present</td>
            <td><strong>Sotfware Developer</strong> <br></br>SwiftVEE</td>
            <td>
              <ul>
                <li>Maintain features and fix bugs in an real time auction platform in Ruby and Bootstrap</li>
                <li>Create and release React Native apps</li>
                <li>Maintained python server</li>
              </ul>

              <div>
                <span class="work-badge">Ruby</span><span class="work-badge">React Native</span><span class="work-badge">Python</span><span class="work-badge">SQL</span>
              </div>
            </td>
          </tr>

          <tr>
            <td>02/2020 – 06/2020</td>
            <td><strong>Teacher’s Assistant</strong> <br></br>Stellenbosch University</td>
            <td>
              <p>
                I was a teacher’s assistant for a second year Applied Mathematics module. This involved helping students understand
                topics taught in the course and assisting in marking course material.
              </p>
                <span class="work-badge">Matlab</span>
            </td>
          </tr>
        </table>
    </div>
  }
}
