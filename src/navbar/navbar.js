import "./navbarstyle.css";
import { Link } from "react-scroll";
import MenuPhoto from './menu.png';
import ClosePhoto from './close.png';
import TargetPhoto from './target.png';
import { useEffect } from "react";
import { scrollSpy } from "react-scroll";


function Navbar(){

   useEffect(() => {
   // Force scrollSpy to run once after load
   scrollSpy.update();
   }, []);
   
  window.showmobilenavbar = function () {
  var actualnavbar = document.getElementById("mobile_navbar");
  var contentsofnavbar = document.getElementById("mobile_nav_elements");

  actualnavbar.style.display = "flex";
  contentsofnavbar.style.transition = "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
  requestAnimationFrame(() => {
    contentsofnavbar.style.transform = "translateX(0)";
  });
  };

  window.hidemobilenavbar = function () {
  var actualnavbar = document.getElementById("mobile_navbar");
  var contentsofnavbar = document.getElementById("mobile_nav_elements");
  // Step 1: Trigger transition
  contentsofnavbar.style.transition = "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
  contentsofnavbar.style.transform = "translateX(100%)";

  // Step 2: Wait for transition to finish before hiding
  setTimeout(() => {
    actualnavbar.style.display = "none";
  }, 800); // Match the transition duration in ms
  };

    
   return(
     <div>
     <nav className="navbar">
            <div className="NameLogo">
               <div className="Logokadibba">
                  <div className="Logo">AM</div>
               </div>
               <div className="Name">ARYA VIVEK MAYEKAR</div>
            </div>

            <div className="navElements">
                <ul className="nav-links">
                    <li><Link to="ResumeSection" smooth={true} duration={150} offset={-100} spy={true} activeClass="active-link">Resume</Link></li>
                    <li><Link to="aboutSection" smooth={true} duration={150} offset={-100} spy={true} activeClass="active-link">About Me</Link></li>
                    <li><Link to="projectSection" smooth={true} duration={150} offset={-100} spy={true} activeClass="active-link">Projects</Link></li>
                    <li><Link to="skillsSection" smooth={true} duration={150} offset={-100} spy={true} activeClass="active-link">Skills</Link></li>
                    <li><Link to="contactmeSection" smooth={true} duration={150} offset={-100} spy={true} activeClass="active-link">Contact Me</Link></li>
                </ul>
            </div>
            
            <div className="Mobile-nav" id="Mobile-nav" ><img src={MenuPhoto} alt="" onClick={() => window.showmobilenavbar()} ></img></div>
       </nav>

       <div className="mobile_navbar" id="mobile_navbar">
           <div className="mobile_nav_elements" id="mobile_nav_elements">
            <div className="faltu_div">
             <div className="mobile_nav_cross"><img src={ClosePhoto} alt="" onClick={() => window.hidemobilenavbar()}></img></div>
             <ul className="nav-links-mobile">
                <li><Link to="ResumeSection" smooth={true} duration={150} offset={-100} spy={true} activeClass="active-link-mobile" className="full-link" onClick={() => window.hidemobilenavbar()}>Resume</Link></li>
                <li><Link to="aboutSection" smooth={true} duration={150} offset={-100} spy={true} activeClass="active-link-mobile" className="full-link"onClick={() => window.hidemobilenavbar()}>About Me</Link></li>
                <li><Link to="projectSection" smooth={true} duration={150} offset={-100} spy={true} activeClass="active-link-mobile" className="full-link" onClick={() => window.hidemobilenavbar()}>Projects</Link></li>
                <li><Link to="skillsSection" smooth={true} duration={150} offset={-100} spy={true} activeClass="active-link-mobile-mobile" className="full-link" onClick={() => window.hidemobilenavbar()}>Skills</Link></li>
                <li><Link to="contactmeSection" smooth={true} duration={150} offset={-100} spy={true} activeClass="active-link-mobile" className="full-link" onClick={() => window.hidemobilenavbar()}>Contact Me</Link></li>
             </ul>
            </div>
            <div className="tpdiv"> 
                <div className="motivation">
                    <p>Dream. Build. Achieve.</p>
                    <img src={TargetPhoto} alt=""></img>
                </div>
             </div>
           </div>
       </div>


      </div>
   );
}

export default Navbar