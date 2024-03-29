import React from "react";
import { connect } from "react-redux";
import "../styles/Portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = (props) => {
  const {
    portfolioState: { projects },
    portfolioRef,
    projectRefs
  } = props;
  return (
    <div ref={portfolioRef} className="Portfolio">
      {projects.map((project, index) => (
        <div className="project " key={index} ref={projectRefs[index]}>
          <div className="image portfolioProjectImage">
            <img src={project.imagePath} alt={project.heading} />
          </div>
          <div className="description">
            <div className="matter">
              <h2 className="heading portfolioProjectHeading">
                {project.heading}
              </h2>
              <p className="content portfolioProjectContent">
                {project.content}
              </p>
              <div className="technologies">
                {project.technologies.map((technology, index) => (
                  <div key={index} className="portfolioProjectTech">
                    {technology}
                  </div>
                ))}
              </div>
              <div className="more">
                <Link
                  to="/"
                  onClick={() => window.open(project.viewSite)}
                  className="portfolioProjectMore"
                >
                  View Site
                </Link>
                <Link
                  to="/"
                  onClick={() => window.open(project.viewCode)}
                  className="portfolioProjectMore"
                >
                  View Code
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const portfolioState = (state) => ({ portfolioState: state.portfolioState });

export default connect(portfolioState, null)(Portfolio);
