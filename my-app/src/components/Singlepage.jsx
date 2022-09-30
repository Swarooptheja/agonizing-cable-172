import {Link} from "react-router-dom"
import Footer from "./Footer"
import "./Home.css"
import "./Singlepage.css"
function Singlepage(){
    return(
        <div>

            <div >
                <h2 className="sectiontitlemakeup">
                    <Link to="/news/newsid" id="link"> CELEBRITY NEWS</Link>
                    
                </h2>
            </div>

            <div id="Homepagemakeupcontainer">
                <div>
                    <img id="Homepagemakeupcontainerimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2014/12/1143-Aishwarya-Rai-Beauty-Tips-And-Secrets-Revealed-720x810.jpg.webp" alt="" />
                </div>
                <div>
                    <h2 id="homepagemakeupcontainerimagesidetext">
                    Aishwarya Rai’s Beauty Tips And Secrets Revealed
                    </h2>
                    <p>
                    Aishwarya Rai is famously known for her exquisitely beautiful eyes and mesmerizing smile. Once known as the most beautiful woman globally, Aishwarya Rai’s beauty secrets are nothing less than a treasure. This ex-Miss World is a powerhouse of talent and […]
                    </p>
                </div>
            </div>

            <div id="Homepagemakeupbottom">
                <div>
                    <img className="Homepagemakeupbottomimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/3513-12-Models-who-turned-Bollywood-actresses.jpg.webp" alt="" />
                     <h2>12 Models who turned Bollywood actresses!!!</h2>
                </div>
                <div>
                    <img className="Homepagemakeupbottomimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/02/Sophia-Vergara%E2%80%99s-Beauty-Fitness-Secrets-REVEALED.jpg.webp" alt="" />
                    <h2>25 Celebrity Nose Jobs – Before and After Plastic Surgery</h2>
                </div>
                <div>
                    <img className="Homepagemakeupbottomimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/Top-25-Celebrities-Before-And-After-Plastic-Surgery-And-Nose-Jobs.jpg.webp" alt="" />
                    <h2>Sofia Vergara’s Beauty & Fitness Secrets REVEALED!</h2>
                </div>
            </div>

            <div id="Singlepagecontainertop">
                <div>
                    <h2 id="singlepageh2">Top 41 Bollywood Actresses Who Look Beautiful In A Saree</h2>
                    <p>The pretty actresses of B-Town adorn many avatars on-screen and off-screen, each carefully crafted to enhance the beauty of our lovely leading actresses. And, when they wrap themselves in seven yards of exquisite material, they look their best! Be it […]</p>
                </div>
                <div>
                    <img id="siglepagecontainertopimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/02/726-Top-41-Bollywood-Actresses-Who-Look-Beautiful-In-Saree-720x810.jpg.webp" alt="" />
                </div>
            </div>

                <div id="singlepagebottomcontainer">
                    <div>
                        <img className="bottomimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2018/03/25-Most-Famous-Short-Female-Celebrities.jpg.webp" alt="" />
                        <h2>25 Most Famous Short Female Celebrities</h2>
                    </div>
                    <div>  <img className="bottomimage"  src="https://cdn2.stylecraze.com/wp-content/uploads/2015/03/79-Top-10-Celebrities-With-Sexy-Eyebrows.jpg.webp" alt="" />
                        <h2>10 Famous Celebrities with Sexy Eyebrows – 2022</h2></div>
                    <div>  <img className="bottomimage"  src="https://cdn2.stylecraze.com/wp-content/uploads/2013/02/Top-30-Most-Beautiful-Girls-In-The-World-5.jpg.webp" alt="" />
                        <h2>Top 30 Most Beautiful Girls In The World</h2></div>
                    <div>  <img className="bottomimage"  src="https://cdn2.stylecraze.com/wp-content/uploads/2013/12/Top-10-Celebrity-Business-Woman-in-India.jpg.webp" alt="" />
                        <h2>10 Most Powerful Indian Business Women</h2></div>
                    <div>  <img className="bottomimage"  src="https://cdn2.stylecraze.com/wp-content/uploads/2014/02/1431-Revealed-Aishwarya-Rai%E2%80%99s-Weight-Loss-Success-Secrets-That-You-Can-Follow.jpg.webp" alt="" />
                        <h2>Revealed! Aishwarya Rai’s Weight Loss Success Secrets That You Can Follow</h2></div>
                    <div>  <img className="bottomimage"  src="https://cdn2.stylecraze.com/wp-content/uploads/2013/12/35-Most-Beautiful-Black-Female-Celebrities-1.jpg.webp" alt="" />
                        <h2>35 Most Beautiful Black Female Celebrities</h2>
                        </div>
                </div>

                <Footer/>
                
        </div>


            
    
    )
}
export default Singlepage