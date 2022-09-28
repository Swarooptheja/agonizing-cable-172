
import { Link } from "react-router-dom"
import "./Navbar.css"
function Navbar(){
    return (
        <div id="Navbarcontainer">
            <div id="Navtop">
                <div></div>
                <div>
                    <img src="https://cdn2.stylecraze.com/wp-content/themes/buddyboss-child/images/sc-logo.png" alt="navbar image" />
                </div>
                <div></div>
            </div>
            < div id="Navbottom">
              <div className="dropdown">
                <button className="dropdownbutton">MAKE UP</button>
                <div className="dropdowncontent">
                    <Link to="/makeup">MAKE UP</Link>
                    <Link to="/makeup">LIP MAKE UP</Link>
                    <Link to="/makeup">EYE MAKE UP</Link>
                    <Link to="/makeup"> BRIDAL MAKE UP</Link>
                   
                   
                </div>
              </div>
              <div className="dropdown">
                <button className="dropdownbutton">NEWS</button>
                <div className="dropdowncontent">
                    <Link to="/news">Collaboration</Link>
                    <Link to="/news">Women empowerment</Link>
                    <Link to="/news">Relationships</Link>
                    <Link to="/news">Celebrity news</Link>
                    <Link to="/news">Fashion</Link>
                   
                </div>
              </div>
              <div className="dropdown">
                <button className="dropdownbutton">HAIR CARE</button>
                <div className="dropdowncontent">
                    <a href="#">Basic hair care</a>
                    <a href="#">Dry hair care</a>
                    <a href="#">Dandruff</a>
                    <a href="#">Hair care ideas</a>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropdownbutton">SKIN CARE</button>
                <div className="dropdowncontent">
                    <a href="#">Face care tips</a>
                    <a href="#">Dry skin</a>
                    <a href="#">Face pack and masks</a>
                    <a href="#">acne</a>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropdownbutton">HAIR STYLES</button>
                <div className="dropdowncontent">
                    <a href="#">Bridal hair styles</a>
                    <a href="#">Bob hair styles</a>
                    <a href="#">curly hair styles</a>
                    <a href="#">Different hair styles</a>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropdownbutton">PRODUCTS</button>
                <div className="dropdowncontent">
                   
                </div>
              </div>
              <div className="dropdown">
                <button className="dropdownbutton">ABOUT US</button>
                <div className="dropdowncontent">
                   
                </div>
              </div>
            </div>

            

        </div>
    )
}
export default Navbar