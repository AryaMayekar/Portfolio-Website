import "./skillsstyle.css";
import HTMLPhoto from './HTML-logo.png';
import CSSPhoto from './CSS-logo.png';
import JAVASCRIPTPhoto from './JAVASCRIPT-logo.png';
import FLASKPhoto from './FLASK-logo.png';
import N8NPhoto from './N8N-logo.png';
import REACTJSPhoto from './REACTJS-logo.png';
import NODEJSPhoto from './NODEJS-logo.png';
import {useInView} from 'react-intersection-observer';

function Skills(){
  const {ref:myRefSkills , inView:myElementIsVisible } = useInView({
    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
    triggerOnce: true, // optional: true if you want the animation to run only once
  });
  const {ref:myRefSkillCard1 , inView:myElementIsVisible1 } = useInView({
    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
    triggerOnce: true, // optional: true if you want the animation to run only once
  });
  const {ref:myRefSkillCard2 , inView:myElementIsVisible2 } = useInView({
    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
    triggerOnce: true, // optional: true if you want the animation to run only once
  });
  const {ref:myRefSkillCard3 , inView:myElementIsVisible3 } = useInView({
    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
    triggerOnce: true, // optional: true if you want the animation to run only once
  });
  const {ref:myRefSkillCard4 , inView:myElementIsVisible4 } = useInView({
   threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
    triggerOnce: true, // optional: true if you want the animation to run only once
  });
  const {ref:myRefSkillCard5 , inView:myElementIsVisible5 } = useInView({
    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
    triggerOnce: true, // optional: true if you want the animation to run only once
  });
  const {ref:myRefSkillCard6 , inView:myElementIsVisible6 } = useInView({
    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
    triggerOnce: true, // optional: true if you want the animation to run only once
  });
  const {ref:myRefSkillCard7 , inView:myElementIsVisible7 } = useInView({
    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
    triggerOnce: true, // optional: true if you want the animation to run only once
  });
  return(
        <div className= "Skills" id="skillsSection">
            <div className={`Skills_Main_Title ${myElementIsVisible ? 'visible' : ''}`}  ref={myRefSkills}>Skills</div>
            <div className="Cards_Box">
                <div className={`Skill_Card ${myElementIsVisible1 ? 'visible2' : ''}`}  ref={myRefSkillCard1}> 
                  <a href="https://html.com/">
                  <div className="Skill_Image"><img src={HTMLPhoto} alt=""></img></div>
                  <div className="Skill_Name">HTML</div>
                  </a>
                </div>
                <div className={`Skill_Card ${myElementIsVisible2 ? 'visible2' : ''}`}  ref={myRefSkillCard2}> 
                  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                  <div className="Skill_Image"><img src={CSSPhoto} alt=""></img></div>
                  <div className="Skill_Name">CSS</div>
                  </a>
                </div>
                <div className={`Skill_Card ${myElementIsVisible3 ? 'visible2' : ''}`}  ref={myRefSkillCard3}> 
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                  <div className="Skill_Image"><img src={JAVASCRIPTPhoto} alt=""></img></div>
                  <div className="Skill_Name">JAVASCRIPT</div>
                  </a>
                </div>
                <div className={`Skill_Card ${myElementIsVisible4 ? 'visible2' : ''}`}  ref={myRefSkillCard4}> 
                  <a href="https://www.geeksforgeeks.org/python/flask-tutorial/">
                  <div className="Skill_Image"><img src={FLASKPhoto} alt=""></img></div>
                  <div className="Skill_Name">FLASK</div>
                  </a>
                </div>
                <div className={`Skill_Card ${myElementIsVisible5 ? 'visible2' : ''}`}  ref={myRefSkillCard5}> 
                  <a href="https://docs.n8n.io/">
                  <div className="Skill_Image"><img src={N8NPhoto} alt=""></img></div>
                  <div className="Skill_Name">N8N</div>
                  </a>
                </div>
                <div className={`Skill_Card ${myElementIsVisible6 ? 'visible2' : ''}`}  ref={myRefSkillCard6}> 
                  <a href="https://react.dev/">
                  <div className="Skill_Image"><img src={REACTJSPhoto} alt=""></img></div>
                  <div className="Skill_Name">REACT JS</div>
                  </a>
                </div>
                <div className={`Skill_Card ${myElementIsVisible7 ? 'visible2' : ''}`}  ref={myRefSkillCard7}> 
                  <a href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs">
                  <div className="Skill_Image"><img src={NODEJSPhoto} alt=""></img></div>
                  <div className="Skill_Name">NODE JS</div>
                  </a>
                </div>
            </div>
        </div>
    )
}

export default Skills;