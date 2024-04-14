import React from "react";
import profileImage from "../../assets/large/Profile/Profile_Pic.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hello! I'm Alicen Bender, a 26-year-old History Teacher in Virginia. I have a Bachelor of Science in History and Social Sciences Education from Illinois State University in Normal, IL.
          </p>
          <p>I moved from Illinois to Virginia to support my partner in taking care of his ill father. I have loved my time in Virginia and plan to remain here.</p>
          <p>Aside from my job, I enjoy running, walking, reading, and playing video games. My current favorite book is Fourth Wing, and my current favorite video game is Content Warning.</p>
        </div>
      </div>
    </section>
  );
}

export default About;