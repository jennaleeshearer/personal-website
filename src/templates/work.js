import React from "react";

export default class WorkExperience extends React.PureComponent {
  render() {
    return (
      <div className="work bg-white py-5" id="experience">
        <div className="container">
          <h1 className="fw-bold mb-5">Work Experience</h1>

          <div className="row mb-4">
            <div className="col-md-3 d-flex flex-column justify-content-center">
              <p className="fw-bold mb-0">04/2021 - Present</p>
            </div>
            <div className="col-md-3 d-flex flex-column justify-content-center">
              <p className="m-0 p-0"><strong>Software Developer</strong></p>
              <p className="mx-0 mt-0 mb-4 m-md-0 p-0">SwiftVEE</p>
              </div>
            <div className="col-md-6 text-start">
              <ul>
                <li><strong>Ruby on Rails Development:</strong> Maintained and enhanced features of a multi-tenant, real-time auction platform using Ruby on Rails with Stimulus and Bootstrap. Created and released new tenants by configuring the platform to meet the unique needs of each client.</li>
                <li><strong>React Native Mobile Applications:</strong> Developed and deployed multiple React Native mobile applications, ensuring compatibility across both iOS and Android devices. Managed the entire deployment process to various app stores.</li>
                <li><strong>Static Website Maintenance:</strong> Responsible for maintaining and updating static websites, ensuring they remain functional, secure, and up-to-date.</li>
                <li><strong>Data Analysis and Visualization:</strong> Utilized SQL to query databases, generate reports, and analyze data. Created and managed data dashboards using Metabase, providing actionable insights and supporting data-driven decision-making.</li>
                <li><strong>Python Server Maintenance:</strong> Maintained and optimized a Python server, enhancing its performance and functionality.</li>
              </ul>
              <div className="mt-2 text-center text-md-start">
                <span className="badge bg-dark me-2">Ruby</span>
                <span className="badge bg-dark me-2">React Native</span>
                <span className="badge bg-dark me-2">Jekyll</span>
                <span className="badge bg-dark me-2">Python</span>
                <span className="badge bg-dark me-2">SQL</span>
                <span className="badge bg-dark">Metabase</span>
              </div>
            </div>
          </div>

          <div className="row pt-4">
          <div className="col-md-3 d-flex flex-column justify-content-center">
              <p className="fw-bold mb-0">02/2020 – 06/2020</p>
            </div>
            <div className="col-md-3 d-flex flex-column justify-content-center">
              <p className="m-0 p-0"><strong>Teacher’s Assistant</strong></p>
              <p className="mx-0 mt-0 mb-4 m-md-0 p-0">Stellenbosch University</p>
            </div>
            <div className="col-md-6 text-start">
              <p className="text-center text-md-start">
                Assisted in teaching a second-year Applied Mathematics module. Helped students understand course
                concepts and topics through one-on-one support during study sessions. Assisted in marking coursework
                and providing feedback to students, promoting their learning and development.
              </p>
              <div className="mt-2 text-center text-md-start">
                <span className="badge bg-dark me-2">Matlab</span>
                <span className="badge bg-dark">LaTeX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
