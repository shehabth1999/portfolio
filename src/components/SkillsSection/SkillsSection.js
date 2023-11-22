import React, { useContext } from "react";
import { useState } from "react";
import "./SkillsStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pdf } from "../../Context/Skills";
import { skills } from "./SkillsData";
function SkillsSection() {
  const [skillsList, setSkillsList] = useState(skills);
  const {setPdf}= useContext(Pdf)
  const skillsToDownload = document.querySelector('#topdf')
  setPdf(skillsToDownload)

  return (
    <div className="skills" id="topdf" style={{backgroundColor:"#333"}}>
      <h1 className="h1">Skills</h1>
      <p className="p">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      <div id='download' className="row px-5 ">
        <div className="col-6 ">
          <h2 className="h2">MY FOCUS</h2>
          <hr className="hr" />
          <div className="list-skills">
            <div className="skills-listed">
              {skillsList.map((text, index) => {
                return <h2 className="h2">{text.text}</h2>;
              })}
            </div>
          </div>
        </div>
        <div className="col-6 d-flex flex-column">
          {skillsList.map((skill, index) => {
            return (
              <div
                className="row my-2"
                style={{
                  backgroundColor: "white",
                  width: "90%",
                  height: "45px",
                }}
              >
                <div className="col-2" style={{ backgroundColor: "green" }}>
                  <h5>{skill.title}</h5>
                </div>
                {index % 2 === 0 ? (
                  <>
                    <div
                      className="col-8"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                    ></div>
                    <div className="col-2"></div>
                  </>
                ) : (
                  <>
                   <div className="col-7" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}></div>
                    <div className="col-3"></div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
