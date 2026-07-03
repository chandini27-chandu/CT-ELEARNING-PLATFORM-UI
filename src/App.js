import React from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import Courses from "./pages/Courses";

import Dashboard from "./pages/Dashboard";

import VideoPage from "./pages/VideoPage";

import Contact from "./pages/Contact";

import "./App.css";

function App() {

  return (

    <div>

      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="courses">
        <Courses />
      </section>

      <section id="progress">
        <Dashboard />
      </section>

      <section id="videos">
        <VideoPage />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </div>
  );
}

export default App;