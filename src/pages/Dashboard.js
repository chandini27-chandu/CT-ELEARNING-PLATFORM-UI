import React from "react";

function Dashboard() {

  return (

    <div className="section">

      <h1 className="section-title">
        Learning Progress
      </h1>

      <div className="progress-wrapper">

        <div className="progress-card">

          <h2>React JS</h2>

          <div className="progress-bar">

            <div
              className="progress-fill react"
            ></div>

          </div>

          <p>75% Completed</p>

        </div>

        <div className="progress-card">

          <h2>JavaScript</h2>

          <div className="progress-bar">

            <div
              className="progress-fill js"
            ></div>

          </div>

          <p>60% Completed</p>

        </div>

        <div className="progress-card">

          <h2>Python</h2>

          <div className="progress-bar">

            <div
              className="progress-fill python"
            ></div>

          </div>

          <p>85% Completed</p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;