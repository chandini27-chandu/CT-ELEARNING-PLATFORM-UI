import React from "react";

function VideoPage() {

  return (

    <div className="section">

      <h1 className="section-title">
        Featured Tutorials
      </h1>

      <div className="video-grid">

        <iframe
          src="https://www.youtube.com/embed/bMknfKXIFA8"
          title="React"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/PkZNo7MFNFg"
          title="JavaScript"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/_uQrJ0TkZlc"
          title="Python"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/3PHXvlpOkf4"
          title="Node"
          allowFullScreen
        ></iframe>

      </div>

    </div>
  );
}

export default VideoPage;