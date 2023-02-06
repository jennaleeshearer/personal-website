import React from "react";
import "./timeline.css"

export default class Timeline extends React.PureComponent {
  render() {
      return <div style={{display: "flex", justifyContent: "center"}}>
        <div class="container">
          <h1 style={{marginBottom: '30px'}}>Education</h1>
          <div class="timeline">
            <div class="timeline-container">
              <div class="timeline-icon timeline-color">
              </div>
              <div class="timeline-body">
                  <span class="badge timeline-color"><strong>BScHons Applied Mathematics (Cum Laude) 2020 </strong></span>
                  <h4>Stellenbosch University</h4>
                  <p>
                    My honours thesis was a study about different techniques used for iris segmentation using Digital Image Processing.
                    Various techniques were studied and compared in order to find the best algorithm for this problem.
                    The different methods explored were Hough transform, Region Growing segmentation and Region Growing segmentation.
                    Before one could apply these different segmentation algorithms, various preprocessing techniques were explored to
                    ensure the most accurate result, which included Gaussian blur, edge detection methods and row and column sum operations.
                  </p>
              </div>
            </div>
            <div class="timeline-container">
              <div class="timeline-icon timeline-color">
              </div>
              <div class="timeline-body">
                <span class="badge timeline-color"><strong>BSc Mathematical Sciences 2017-2019</strong></span>
                <h4>Stellenbosch University</h4>
                <p>
                  I completed a Bachelor of Science in Mathematical Sciences, with a specialization in Applied Mathematics and Operations Research.
                  This degree program provided me with a comprehensive education in mathematical theories, models, and techniques, and equipped me
                  with the necessary skills to analyze and solve real-world problems in various industries. I took courses in areas such as
                  linear algebra, calculus, numerical analysis, optimization techniques, probability and statistics.
                  These courses helped me develop a solid foundation in mathematical concepts and methods, and provided me with hands-on
                  experience in using mathematical tools to solve practical problems.
                </p>
              </div>
            </div>
            <div class="timeline-container ">
              <div class="timeline-icon timeline-color">
              </div>
              <div class="timeline-body">
                <span class="badge timeline-color"><strong>Matric 2016</strong></span>
                <h4>Parklands College</h4>
                <p>Matriculated with a NSC Bachelor Pass</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  }
}
