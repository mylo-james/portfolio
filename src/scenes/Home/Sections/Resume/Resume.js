import Title from "../../../../components/Title";
import { resume_src, resume } from "../../../../data/contactInfo.json";
import ResumeSty from "./ResumeSty";

function Resume() {
  return (
    <ResumeSty>
      <div className="header">
        <Title title={"Resume"} id={"resume"} />
        <button onClick={() => window.open(resume)}>Download Resume</button>
      </div>
      <div id="resume">
        <iframe title="resume" src={resume_src} scrolling="no"></iframe>
      </div>
    </ResumeSty>
  );
}

export default Resume;
