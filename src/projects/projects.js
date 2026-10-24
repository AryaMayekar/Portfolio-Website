import "./projectstyle.css";
import UltraQuizPhoto from './UltraQuiz.png';
import EngineerifyPhoto from './Engineerify.png';
import FitflarePhoto from './FitFlare.png';
import SnapPriceBotPhoto from './Snap Price Bot.png';
import {useInView} from 'react-intersection-observer';

function Projects() {
      const {ref:myRefProjects , inView:myElementIsVisible } = useInView({
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
    triggerOnce: true, // optional: true if you want the animation to run only once
  });
      const {ref:myRefSoloProjects , inView:myElementIsVisible2 } = useInView({
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
    triggerOnce: true, // optional: true if you want the animation to run only once
  });
      const {ref:myRefGroupProjects , inView:myElementIsVisible3 } = useInView({
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
    triggerOnce: true, // optional: true if you want the animation to run only once
  });
      const {ref:myRefCardProjects , inView:myElementIsVisible4 } = useInView({
    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
    triggerOnce: true, // optional: true if you want the animation to run only once
  });
      const {ref:myRefCardProjects2 , inView:myElementIsVisible5 } = useInView({
    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
    triggerOnce: true, // optional: true if you want the animation to run only once
  });
      const {ref:myRefCardProjects3 , inView:myElementIsVisible6 } = useInView({
    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
    triggerOnce: true, // optional: true if you want the animation to run only once
  });
      const {ref:myRefCardProjects4 , inView:myElementIsVisible7 } = useInView({
    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
    triggerOnce: true, // optional: true if you want the animation to run only once
  });
    return(
        <div className= "ProjectMainBox" id="projectSection" >
             <div className={`Project_Title ${myElementIsVisible ? 'visible' : ''}`}  ref={myRefProjects}>Projects</div>
             <div className="Solo_Projects">
                <div className= {`Project_Type_Heading ${myElementIsVisible2 ? 'visible2' : ''}`} ref={myRefSoloProjects}>
                    <div className="Heading_Name" >Solo Projects</div>
                    <hr></hr>
                </div>
                <div className="Project_Cards_Container">
                    <div className={`Card ${myElementIsVisible4 ? 'visible3' : ''}`}ref={myRefCardProjects}>
                      <div className="Project_Photo"><img src={UltraQuizPhoto} alt=""></img></div>
                      <div className="All_Project_Info">
                          <div className="Project_Name">Ultra Quiz</div>
                          <div className="Project_Details">Ultra Quiz is a simple yet engaging quiz platform that offers mock tests along with a leaderboard to track top scores. Designed to help users assess their knowledge and stay motivated, it provides a competitive environment where users can compare their performance with others in real time.</div>
                          <div className="Github_Link"><a href="https://github.com/AryaMayekar/Ultra-Quiz"> <button  className="user-details-submit-btn">View Source Code</button></a></div>
                      </div>
                    </div>
                </div>
             </div>
             <div className="Solo_Projects">
                <div className= {`Project_Type_Heading ${myElementIsVisible3 ? 'visible2' : ''}`} ref={myRefGroupProjects}>
                    <div className="Heading_Name">Group Projects</div>
                    <hr></hr>
                </div>
                <div className="Project_Cards_Container" >
                    <div className={`Card ${myElementIsVisible5 ? 'visible3' : ''}`}ref={myRefCardProjects2}>
                      <div className="Project_Photo"><img src={EngineerifyPhoto} alt=""></img></div>
                      <div className="All_Project_Info">
                          <div className="Project_Name">Engineerify</div>
                          <div className="Project_Details">ENGINEERIFY is a web platform designed to guide 12th standard students toward engineering careers. It offers insights into various engineering branches, details about entrance exams, and information on colleges offering engineering programs. With a built-in mock test system and leaderboard, students can assess their performance and track how they rank among peers.</div>
                          <div className="Github_Link"><a href=" https://github.com/AryaMayekar/engineerify"> <button  className="user-details-submit-btn">View Source Code</button></a></div>
                      </div>
                    </div>
                    <div className={`Card ${myElementIsVisible6 ? 'visible3' : ''}`}ref={myRefCardProjects3}>
                      <div className="Project_Photo"><img src={FitflarePhoto} alt=""></img></div>
                      <div className="All_Project_Info">
                          <div className="Project_Name">FitFlare</div>
                          <div className="Project_Details">FitFlare is a smart fitness platform designed to automate and simplify workout and diet planning for gyms and fitness enthusiasts.The website offers personalized weekly workout schedules that repeat automatically, along with tailored diet plans to support users’ fitness goals. This reduces the need for additional trainers while ensuring consistent guidance and motivation for users.</div>
                          <div className="Github_Link"><a href=" https://github.com/AryaMayekar/Fitness-app"> <button  className="user-details-submit-btn">View Source Code</button></a></div>
                      </div>
                    </div>
                    <div className={`Card ${myElementIsVisible7 ? 'visible3' : ''}`}ref={myRefCardProjects4}>
                      <div className="Project_Photo"><img src={SnapPriceBotPhoto} alt=""></img></div>
                      <div className="All_Project_Info">
                          <div className="Project_Name">Snap Price Bot</div>
                          <div className="Project_Details">Snap Price Bot is a Telegram-based price comparison tool built using n8n and web scraping. Users can search for any product, and the bot fetches live data from Amazon and Flipkart, showing the product title, image, features, and prices directly in chat. It also shares past comparison links to help users track price trends—all without relying on official APIs.</div>
                          <div className="Github_Link"><a href=" https://github.com/AryaMayekar/Snap-Price-price-comparision-using-n8n-">  <button  className="user-details-submit-btn">View Source Code</button></a></div>
                      </div>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Projects;