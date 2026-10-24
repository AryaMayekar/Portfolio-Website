import "./introductionstyle.css";
import IntroPhoto from './IntroPhoto.png';
import {useInView} from 'react-intersection-observer';


function Introduction(){
   const {ref:myRefInfoArea , inView:myElementIsVisible } = useInView({
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
    triggerOnce: true, // optional: true if you want the animation to run only once
  });
   const {ref:myRefPhotoArea , inView:myElementIsVisible2 } = useInView({
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
    triggerOnce: true, // optional: true if you want the animation to run only once
  });
   return(
    <div className="Main-box" id="ResumeSection">
      <div className="IntroductionBox" >
          <div className={`InfoArea ${myElementIsVisible ? 'visible' : ''}`} ref={myRefInfoArea}>
             <div className="Heading">Hey, Arya Vivek Mayekar here!</div>
             <div className="PersonalInfo">
                 I’m a passionate tech enthusiast from Mumbai, driven by curiosity and creativity. I enjoy building smart, meaningful solutions — clean, user-friendly interfaces. 
                 <br></br>
                 <br></br>
                 If you're interested in a deeper look at my journey, experience, and skill set, you’re just a click away.
             </div>
             <div className="Button"><a href="/Arya Mayekar Resume.pdf" download="Arya Mayekar Resume.pdf"><button>Download Resume</button></a></div>
          </div>
          <div className={`PhotoArea ${myElementIsVisible2 ? 'visible2' : ''}`} ref={myRefPhotoArea}><img src={IntroPhoto} alt=""></img></div>
      </div>
      </div>
   );
}

export default Introduction