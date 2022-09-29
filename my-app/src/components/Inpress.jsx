import "./Inpress.css"
import {Link} from "react-router-dom"
function Inpress(){
    return (
        <div id="presscontainer">
            <div >
                <Link id="testlink" to="/">
                <h1>TESTIMONIALS</h1></Link>
            </div>
            <div id="pressmaincontainer">
                <div>
                    <p className="pressmaincontainerptag">"As an introvert,I have always found it hard to break the ice or to continue conversations.  The witty yet well-researched content of this website has helped me express myself better in various situations."</p>
                    <h2 className="pressmaincontainerhtag">-Gayatri Gogoi</h2>
                </div>
                <div>
                    <p className="pressmaincontainerptag">
                        "I tend to gravitate towards home remedies to resolve various skin and hair issues, and StyleCraze has a wonderful repository of at-home solutions. Excellent work!"
                    </p>
                    <h2 className="pressmaincontainerhtag">-Priya Dikshit</h2>
                </div>
                <div>
                    <p>"StyleCraze is my guilty pleasure. I have always struggled with weight management, but the tips and information on all the latest diet and fitness trends have helped me stay in shape! "</p>
                    <h2 className="pressmaincontainerhtag">-Priya Thawani</h2>

                </div>
                <div>
                    <p>"StyleCraze is my go-to site for updates on makeup and fahsion. From lipstick reviews to outfit ideas, it has it all!"</p>
                     <h2 className="pressmaincontainerhtag">-Renuka Thakur</h2>
                </div>
                <div>
                    <p>“I had damaged hair and wanted to get to the root cause of the issues. That was when I came across StyleCraze that has thoroughly researched solutions and tells why and how to go about them. Thank you for being my hair savior!”</p>
                     <h2 className="pressmaincontainerhtag">-Ananya Kataria</h2>
                </div>
            </div>

        </div>
    )
}
export default Inpress