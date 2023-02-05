import React from "react";
import "./timeline.css"

export default class Timeline extends React.PureComponent {
  render() {
      return <div style={{display: "flex", justifyContent: "center"}}>
        <div class="container">
          <div class="timeline">
            <div class="timeline-container">
              <div class="timeline-icon timeline-color">
              </div>
              <div class="timeline-body">
                  <span class="badge timeline-color"><strong>BScHons Applied Mathematics (Cum Laude) 2020 </strong></span>
                  <h4>Stellenbosch University</h4>
                  <p>My honours thesis was a study about techniques used for iris segmentation using Digital Image Processing.</p>
              </div>
            </div>
            <div class="timeline-container">
              <div class="timeline-icon timeline-color">
                <i class="far fa-grin-hearts"></i>
              </div>
              <div class="timeline-body">
                <span class="badge timeline-color"><strong>BSc Mathematical Sciences 2017-2019</strong></span>
                <h4>Stellenbosch University</h4>
                <p>BSc Mathematical Sciences in Applied Mathematics and Operations Research</p>
              </div>
            </div>
            <div class="timeline-container ">
              <div class="timeline-icon timeline-color">
                <i class="far fa-grin-tears"></i>
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
