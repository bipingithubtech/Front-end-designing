import React from "react";
import "./resume.css";
import { FaReact, FaBootstrap, FaPython } from "react-icons/fa";
import {
  BiLogoRedux,
  BiLogoJavascript,
  BiLogoHtml5,
  BiSolidFileCss,
} from "react-icons/bi";

const ResumePro = () => {
  return (
    <div className="resumepro">
      <div className="heads">
        <h1>
          Resume <i className="bi bi-file-earmark-person-fill" id="data"></i>
        </h1>
      </div>
      <div className="resume-container">
        <div className="information-left">
          <div className="name">
            <h4>BIPIN JOSHI</h4>
          </div>
          <div className="skill">
            <h2>Tools</h2>
            <ul className="list">
              <li>
                REACT JS <FaReact />
              </li>
              <li>
                java script <BiLogoJavascript />
              </li>
              <li>
                python <FaPython />
              </li>
              <li>
                html <BiLogoHtml5 />
              </li>
              <li>
                css <BiSolidFileCss />
              </li>
              <li>
                redux toolkit <BiLogoRedux />
              </li>
              <li>
                bootstrap <FaBootstrap />
              </li>
            </ul>
          </div>
          <div className="education">
            <h2>Education</h2>
            <h4>intermediate</h4>
            <ul>st paul's sr sec school kathgodam ,haldwani nainital</ul>
            <h4>Graduation</h4>
            <ul>B-tech /college of engineering roorkee</ul>
          </div>
        </div>
        <div className="information-right">
          <div className="experience">
            <h2>Experience</h2>
            <h4>technical committee coordinator/football captain</h4>
            <ul>
              <li>led a team of technical committee</li>
              <li>organized various event</li>
              <li>won major cup with college</li>
              <li>volunteer Agumented reality</li>
            </ul>
            <h4>summer internship</h4>
            <ul>
              <li>i did my summer intership from pwd haldwani</li>
              <li>work in contruction site and river embankment</li>
              <li>learned total-station </li>
              <li>Experienced DGPS technology</li>
            </ul>
            <h4>python full stack</h4>
            <ul>
              <li>i did 6 month python full stack program</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePro;
