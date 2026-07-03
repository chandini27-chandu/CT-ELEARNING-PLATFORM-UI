import React from "react";

function Courses() {

  return (

    <div className="section">

      <h1 className="section-title">
        Trending Courses
      </h1>

      <div className="course-container">

        <div className="course-card">

          <img
            src="https://img.youtube.com/vi/bMknfKXIFA8/maxresdefault.jpg"
            alt="React"
          />

          <h2>React JS</h2>

          <p>
            Build modern frontend applications
          </p>

          <a
            href="https://www.youtube.com/watch?v=bMknfKXIFA8"
            target="_blank"
            rel="noreferrer"
          >

            <button>
              Watch Now
            </button>

          </a>

        </div>

        <div className="course-card">

          <img
            src="https://img.youtube.com/vi/PkZNo7MFNFg/maxresdefault.jpg"
            alt="JavaScript"
          />

          <h2>JavaScript</h2>

          <p>
            Master JavaScript from beginner level
          </p>

          <a
            href="https://www.youtube.com/watch?v=PkZNo7MFNFg"
            target="_blank"
            rel="noreferrer"
          >

            <button>
              Watch Now
            </button>

          </a>

        </div>

        <div className="course-card">

          <img
            src="https://img.youtube.com/vi/_uQrJ0TkZlc/maxresdefault.jpg"
            alt="Python"
          />

          <h2>Python</h2>

          <p>
            Learn Python programming professionally
          </p>

          <a
            href="https://www.youtube.com/watch?v=_uQrJ0TkZlc"
            target="_blank"
            rel="noreferrer"
          >

            <button>
              Watch Now
            </button>

          </a>

        </div>

        <div className="course-card">

          <img
            src="https://img.youtube.com/vi/3PHXvlpOkf4/maxresdefault.jpg"
            alt="Node"
          />

          <h2>Node JS</h2>

          <p>
            Backend development with Node.js
          </p>

          <a
            href="https://www.youtube.com/watch?v=3PHXvlpOkf4"
            target="_blank"
            rel="noreferrer"
          >

            <button>
              Watch Now
            </button>

          </a>

        </div>

      </div>

    </div>
  );
}

export default Courses;