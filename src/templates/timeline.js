import React from "react";
import "./timeline.css"

export default class Timeline extends React.PureComponent {
  render() {
      return <div className="d-flex text-center flex-column justify-content-center align-items-center">
        <div id="education">
          <hr className="mb-5"></hr>
          <h1 className="my-5 fw-bold">Education</h1>
          <div className="timeline">
            <div className="timeline-container">
              <div className="timeline-icon bg-dark">
              </div>
              <div className="timeline-body">
                  <h4><strong>BScHons Applied Mathematics (Cum Laude) 2020 </strong></h4>
                  <p className="badge bg-secondary my-0">Stellenbosch University</p>
                  <p>
                    My honours thesis was a study about different techniques used for iris segmentation using Digital Image Processing.
                    Various techniques were studied and compared in order to find the best algorithm for this problem.
                    The different methods explored included Hough transform and Region Growing segmentation.
                    Before one could apply these different segmentation algorithms, various pre-processing techniques were explored to
                    ensure the most accurate result, which included Gaussian blur, edge detection methods and row and column sum operations.
                  </p>
              </div>
            </div>
            <div className="timeline-container">
              <div className="timeline-icon bg-dark">
              </div>
              <div className="timeline-body">
                <h4><strong>BSc Mathematical Sciences 2017-2019</strong></h4>
                <p className="badge bg-secondary my-0">Stellenbosch University</p>
                <p>
                  I completed a Bachelor of Science in Mathematical Sciences, with a specialization in Applied Mathematics and Operations Research.
                  I took courses in areas such as linear algebra, calculus, numerical analysis, optimization techniques, probability and statistics.
                </p>
              </div>
            </div>
            <div className="timeline-container">
              <div className="timeline-icon bg-dark">
              </div>
              <div className="timeline-body">
                <h4><strong>Matric 2016</strong></h4>
                <p className="badge bg-secondary my-0">Parklands College</p>
                <p>Matriculated with a NSC Bachelor’s Degree Pass</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  }
}
