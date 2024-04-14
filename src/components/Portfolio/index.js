import React from "react";
import drinksImage from "../../assets/small/drinks.png";
import workoutImage from "../../assets/small/shapeshift.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Austinma1010/shapeShift">
                {" "}
                <img
                  src={workoutImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="shape-shift"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>ShapeShift</h4>
              <p>
                This application allows the user to sign up for a health application that will calculate things like BMI, caloric intake, and more! It also allows users to create a new workout, which will then store it for later use.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Spikey1289/drink_vtt_ICA">
                {" "}
                <img
                  src={drinksImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="drink-voice"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Drink TTT</h4>
              <p>
                This application allows users to pick a cocktail from the menu. It will display the recipe and ingredients and a play button at the bottom of the page. If you hit play, a Text to Talk API will read the ingredients and recipes out loud.{" "}
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Portfolio;