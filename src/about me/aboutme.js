import "./aboutmestyle.css";
import LeftPhoto from './leftphoto.png';
import RightPhoto from './rightphoto.png';
import {useInView} from 'react-intersection-observer';

function AboutMe(){
  const {ref:myRef , inView:myElementIsVisible } = useInView({
    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
    triggerOnce: true, // optional: true if you want the animation to run only once
  });
   const {ref:myRefaboutme_info , inView:myElementIsVisible2 } = useInView({
    threshold: [ 0.25, 0.5, 0.75, 1.0],
    triggerOnce: true, // optional: true if you want the animation to run only once
  });
 
  
  return(
        <div className="aboutme" id="aboutSection">
          <div className={`aboutme_title ${myElementIsVisible ? 'visible' : ''}`}  ref={myRef}>About Me</div>
          <div className={`aboutme_info ${myElementIsVisible2 ? 'visible2' : ''}`} ref={myRefaboutme_info}>
            <div className="aboutme_leftphoto"><img src={LeftPhoto} alt=""></img></div>
             
            <div className="content_aboutme">
              <p>
              I'm <span className="highlighted-name">Arya Vivek Mayekar</span>, a tech enthusiast based in Mumbai with a strong passion for innovation, problem-solving, and clean code. Whether it’s a solo project or a collaborative effort,<span className="highlighted-name"> I bring curiosity, consistency, and a growth mindset</span> to every line of code I write.
              <br />
              <br />
              When I’m not coding, you’ll find me exploring new ideas, reading about emerging tech trends, or<span className="highlighted-name"> refining my skill set through hands-on projects.</span>
              </p>
            </div>
            <div className="aboutme_rightphoto"><img src={RightPhoto} alt=""></img></div>
          </div>
        </div>
    )
}

export default AboutMe