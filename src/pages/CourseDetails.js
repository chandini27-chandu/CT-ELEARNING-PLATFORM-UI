import React from "react";

import { Link } from "react-router-dom";

import "../App.css";

function CourseDetails() {

  return (

    <div className="details">

      <h1>React JS Course</h1>

      <p>
        Learn components, hooks, routing and APIs.
      </p>

      <Link to="/video">

        <button>
          Start Learning
        </button>

      </Link>

    </div>
  );
}

export default CourseDetails;