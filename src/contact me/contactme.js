import { useEffect } from "react";
import "./contactmestyle.css";
import WhatsappPhoto from './whatsapp-logo.png';
import LinkedinPhoto from './linkedin-logo.png';
import GmailPhoto from './gmail-logo.png';
import {useInView} from 'react-intersection-observer';


function ContactMe() {
    const {ref:myRefContact , inView:myElementIsVisible } = useInView({
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
    triggerOnce: true, // optional: true if you want the animation to run only once
  });
    const {ref:myRefContact1 , inView:myElementIsVisible1 } = useInView({
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
    triggerOnce: true, // optional: true if you want the animation to run only once
  });
    const {ref:myRefContact2 , inView:myElementIsVisible2 } = useInView({
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
    triggerOnce: true, // optional: true if you want the animation to run only once
  });

     useEffect(() => {
        const script = document.createElement("script");
        script.src = process.env.PUBLIC_URL + "/script.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // clean up
        };
    }, []);

    return(
    <div className= "main-contact-container" id="contactmeSection">
    <div className= {` main-heading-box ${myElementIsVisible ? 'visible' : ''}`}  ref={myRefContact}>Contact Me</div>
    <div className="contact-container">     
        <div className= {` contact-left-box ${myElementIsVisible1 ? 'visible1' : ''}`}  ref={myRefContact1}>
            <div className="contact-method">
                <div className="img-box"><img src={WhatsappPhoto} alt=""></img></div>
                <div className="text-box">+91 7021131331</div>
            </div>
            <div className="contact-method">
                <div className="img-box"><img src={LinkedinPhoto} alt=""></img></div>
                <div className="text-box"><a href="https://www.linkedin.com/in/arya-mayekar">www.linkedin.com/in/arya-mayekar</a></div>
            </div>
            <div className="contact-method">
                <div className="img-box"><img src={GmailPhoto} alt=""></img></div>
                <div className="text-box"> <a href="mailto:aryamayekar123@gmail.com"> aryamayekar123@gmail.com</a></div>
            </div>
        </div>

        <div className={` contact-right-box ${myElementIsVisible2 ? 'visible2' : ''}`}  ref={myRefContact2}>
            <div className="heading">
            <h2>Get In Touch </h2>
            <div className="small-para">I will contact you as soon as possible</div>
            <hr></hr>
            </div>

            <div className="form-info">
                <form action="https://api.web3forms.com/submit" method="POST" className="user-details" id="form">
                   
                <input type="hidden" name="access_key" value="90a3264e-e1e4-46a4-83d9-2ec67c545d4c"/>
                <div className="user-names">
                    <input type="text" name="firstname" placeholder="First Name" className="user-inputs firstn" onKeyUp={(e) => window.alphabetonly(e.target)} required/>
                    <input type="text" name="lastname" placeholder="Last Name" className="user-inputs firstn" onKeyUp={(e) => window.alphabetonly(e.target)} required/>
                </div>
                   
                <div className="user-rest-details">
                    <input type="tel" name="phone" id="number" placeholder="Your Phone Number" minLength="10" maxLength="10" className="user-inputs" onKeyUp={(e) => window.numberonly(e.target)} required/>
                    <span id="verify_number"></span>
                    <input type="text" name="Affiliation" placeholder="Your Affiliation" className="user-inputs "  required/>
                    <input type="email" name="email" id="email" placeholder="Your Email ID" className="user-inputs" onKeyUp={() => window.verifyemail()} required/>
                    <span id="verify_email"></span>
                    <textarea name="message" placeholder="Message" className="user-inputs" required></textarea>
                    <button type="submit" className="user-details-submit-btn-contact">Submit</button>
                </div>
                
                </form>
            </div>
        </div>
    </div>
    </div>
    )
}

export default ContactMe;