import React from "react";
import myCV from "../../assets/images/MyCV.pdf";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";

// components
import { Cards, Blast } from "../../components";
import "./about.scss";

const About = () => {
  const [letterClass, setLetterClass] = React.useState("text-animate");
  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <Reveal>
        <div className="fake-big">About</div>
      </Reveal>
      <div className="section-about-wrapper section__padding">
        <article className="section-about-description">
          <div>
            <h2 arial-aria-label="About and skills">
              <Blast
                letterClass={letterClass}
                arrayStr={[
                  "A",
                  "b",
                  "o",
                  "u",
                  "t",
                  "",
                  "&",
                  "",
                  "S",
                  "k",
                  "i",
                  "l",
                  "l",
                  "s",
                ]}
                indexLetter={15}
              />
            </h2>
            <Fade bottom>
              <p>
                I'm an ambitious web developer with more than three years of
                experience, who is passionate about coding and looking for a
                position in a reputable IT company with the chance to work with
                the newest technology on difficult and varied projects.
              </p>
            </Fade>
            <Fade bottom>
              <p>
                I completed my high school IT requirements at the Nigerian
                National Petroleum Council (NNPC) in 2017, where I learned how
                to use programs like corel-draw, excel and the likes.
                thereafter, I got a job supervising job at @MetalMate Nig. Ltd.,
                a steel manufacturing company, where I discovered how to
                coordinate, record, and manage employees. I've been on the cusp
                of studying the technology behind web creation since my high
                school. I am constantly searching for and testing out new
                innovation possibilities and technologies.
              </p>
            </Fade>
            <Fade bottom>
              <p>
                My biggest strength has always been my ability to constantly be
                prepared for any challanges that may arise. I also enjoy
                learning about new chances that will allow me to hone my
                abilities and provide me the ability to collaborate with other
                programmers around the globe.
              </p>
            </Fade>
            <Fade left>
              <a
                style={{ marginTop: "2rem" }}
                href={myCV}
                download
                className="contact-button submit-button"
              >
                <div>
                  <span className="bg switch__bg"></span>
                  <span className="base switch__border-color"></span>
                  <a
                    href="https://docs.google.com/document/d/16vHieQnIjhuRtjgVZ3BxjjJ4OSnZI_fmVrwP7REuN58/edit#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="text">View CV</span>
                  </a>
                </div>
              </a>
            </Fade>
          </div>
        </article>
        {/* programming language cards */}
        <Cards />
      </div>
    </>
  );
};

export default About;
