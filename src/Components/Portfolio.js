import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/gallery/" + projects.image;
      const styles = {
        height: "60%",
        padding: "10px",
        textAlign: "center",
      };

      return (
        <div key={id++} className="columns gallery-item">
          <div
            className="item-wrap"
            style={{
              height: "500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
              background: "linear-gradient(to right, #1cd8d2, #93edc7);",
            }}
          >
            <Zmage alt={projects.title} src={projectImage} style={styles} />
            <div style={{ textAlign: "center" }}>
              <b>{projects.title}</b>
            </div>
            <div style={styles}>{projects.description}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="gallery">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>
                Behold my gallery of riveting mundanity, a masterpiece in the
                art of boredom with no groundbreaking projects to steal the
                spotlight.
              </h1>

              <div
                id="gallery-wrapper"
                className="bgrid-halves s-bgrid-quarters cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
