import React from "react";
import "../../styles/plans.css";

class Plans extends React.Component {
  render() {
    return (
      <div className="plans-container">
        <div className="card">
          <div className="container1">
            <h4>
              <b>Starter</b>
            </h4>
            <h1>
              <b>$ O /mo</b>
            </h1>
            <p>TEST THE WATERS</p>
            <hr />
            <p>1 User Profile</p>
            <p>1 Database Management</p>
            <p>Basic Access</p>
            <p>Free Updates</p>
            <hr />
            <div className="plan-btn">SIGN UP NOW</div>
          </div>
        </div>

        <div className="card">
          <div className="container2">
            <h4>
              <b>PROFESSIONAL</b>
            </h4>
            <h1>
              <b>$ 51 /mo</b>
            </h1>
            <p>GET THE JOB DONE AND GROW</p>
            <hr />
            <p>3 Users Profiles</p>
            <p>Multiple Database Management</p>
            <p>Full Access</p>
            <p>Free Updates</p>
            <p>Cloud Data Backup</p>
            <hr />
            <div className="plan-btn">SIGN UP NOW</div>
          </div>
        </div>

        <div className="card">
          <div className="container3">
            <h4>
              <b>PREMIUM</b>
            </h4>
            <h1>
              <b>$ 71 /mo</b>
            </h1>
            <p>THE BEST FOR EXPONENTIAL GROW</p>
            <hr />
            <p>15 Users Profiles</p>
            <p>All Professional Functions Plus:</p>
            <p>24/7 Phone Support</p>
            <p>Data Analitics and Statistics</p>
            <p>Graphic Information Display</p>
            <hr />
            <div className="plan-btn">SIGN UP NOW</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Plans;
