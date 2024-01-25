import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    const trainings = this.props.data.trainings.map(function (trainings) {
      return (
        <div key={trainings.course}>
          <h3>{trainings.course}</h3>
          <p className="info">
            {trainings.institute} <span>&bull;</span>
            <em className="date">{trainings.year}</em>
          </p>
        </div>
      );
    });
    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
    const softskills = this.props.data.softskills.map((softskill) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + softskill.name.toLowerCase();
      const width = softskill.level;

      return (
        <li key={softskill.name}>
          {" "}
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{softskill.name}</em>
        </li>
      );
    });
    const languages = this.props.data.languages.map((language) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + language.name.toLowerCase();
      const width = language.level;

      return (
        <li key={language.name}>
          {" "}
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{language.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="four columns header-col">
              <h1>
                <span>Intellectual Odyssey</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Skill Forges</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{trainings}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Career Chronicles</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Tech Wizardry</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>CharmCraft</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="bars">
                <ul className="skills">{softskills}</ul>
              </div>
            </div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Tongues</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="bars">
                <ul className="skills">{languages}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
