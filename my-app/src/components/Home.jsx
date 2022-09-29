import "./Home.css"
import{Link } from "react-router-dom"
import Inpress  from "./Inpress"
import Footer from "./Footer"
function Home(){
    return(
        <div>
            <div id="Homemaincontainer">
                <div>
                    <img className="topimages" src="https://cdn2.stylecraze.com/wp-content/uploads/2020/09/Top-40-Blonde-Hair-Color-Ideas-For-Every-Skin-Tone.jpg.webp" alt="image1" />
                </div>
                <div>
                    <img className="topimages"  src="https://cdn2.stylecraze.com/wp-content/uploads/2020/09/60-Most-Trending-Nail-Art-Designs-For-Short-Nails--2022.jpg.webp" alt="image2" />
                </div>
                <div>
                    <img className="topimages"  src="https://cdn2.stylecraze.com/wp-content/uploads/2020/09/How-To-Wear-A-Beret-Without-Looking-Ridiculous.jpg.webp" alt="image3" />
                </div>
            </div>
            <div id="Homemaincontainertext">
                <div>
                    <p className="imagetext">Top 40 Blonde Hair Color Ideas For Every Skin Tone</p>
                </div>
                <div>
                    <p className="imagetext">60 Most Trending Nail Art Designs For short Nails</p>
                </div>
                <div>
                    <p className="imagetext">How To Wear A Beret Without Looking Ridiculous</p>
                </div>
            </div>

            <div id="Homepagefollowers">
                <div className="boxes">
                    <div id="fbbox">
                        <h3>FACEBOOK</h3>
                    </div>
                    <div>
                        <h3 className="fb">8M Followers</h3>
                    </div>
                </div>
                <div className="boxes">
                    <div id="pinsetbox">
                        <h3>PINTEREST</h3>
                    </div>
                    <div>
                        <h3 className="pin">789K Followers</h3>
                    </div>
                </div>
                <div className="boxes">
                    <div id="instabox">
                        <h3>INSTAGRAM</h3>
                    </div>
                    <div>
                        <h3 className="insta">1M Followers</h3>
                    </div>
                </div>
            </div>

            <div >
                <h2 className="sectiontitlemakeup">
                    <Link to="/makeup" id="link"> MAKEUP</Link>
                    
                </h2>
            </div>

            <div id="Homepagemakeupcontainer">
                <div>
                    <img id="Homepagemakeupcontainerimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2021/04/How-To-Apply-Liquid-Foundation-With-Brush-Sponge-And-Fingers.jpg.webp" alt="" />
                </div>
                <div>
                    <h2 id="homepagemakeupcontainerimagesidetext">
                    How To Apply Liquid Foundation With Brush, Sponge, And Fingers 
                    </h2>
                    <p>
                    Foundation is the heart of a flawless makeup look. It is, thus, important to know how to apply liquid foundation to get a natural skin-like texture. The secret to a beautiful pay-off is the right tools and techniques. This article […]
                    </p>
                </div>
            </div>

            <div id="Homepagemakeupbottom">
                <div>
                    <img className="Homepagemakeupbottomimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2021/04/Eye-Makeup-Tips-For-Sensitive-Eyes.jpg.webp" alt="" />
                     <h2>Eye Makeup Tips For Sensitive Eyes</h2>
                </div>
                <div>
                    <img className="Homepagemakeupbottomimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2021/04/The-Best-Lighting-For-Makeup-Application.jpg.webp" alt="" />
                    <h2>The Best Lighting For Makeup Application</h2>
                </div>
                <div>
                    <img className="Homepagemakeupbottomimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2021/04/How-To-Wear-Red-Lipstick.jpg.webp" alt="" />
                    <h2>How To Wear Red Lipstick</h2>
                </div>
            </div>

            <div id="Homepagehaircarecontainertop">
                <Link id="haircarelink">
                <h1>HAIR CARE</h1>
                </Link>

                <div id="Homepagehaircarecontainermiddle">
                    <div>
                    <img className="Homepagehaircarecontainermiddleimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/16-Foods-To-Prevent-Hair-Fall-And-Stimulate-Hair-Growth.jpg.webp" alt="" />
               
                    </div>
                    <div id="middle">
                        <h2 id="middleh2" >16 Foods To Prevent Hair Fall And Stimulate Hair Growth</h2>
                        <p>If you are concerned about excessive hair fall, we have found a solution! You can eat these top foods to prevent hair fall. Hair requires important nutrients to be healthy and strong. We can restore hair strength by making a […]</p>

                    </div>
                </div>
                <div id="Homepagehaircontainerbottom">
                    <div id="lefthaircare">
                        <div>
                            <img id="lefthaircareimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/How-To-Take-A-Shower-The-Right-Way-To-Keep-Your-Hair-Healthy.jpg.webp" alt="" />
                        </div>
                        <div>
                            <h3>How To Take A Shower The Right Way To Keep Your Hair Healthy</h3>
                        </div>


                    </div>
                    <div id="righthaircare">
                        <div>
                            <img id="righthaircareimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/How-Do-You-Treat-A-Dry-Scalp-And-Oily-Hair.jpg.webp" alt="" />
                        </div>
                        <div>
                            <h3>How Do You Treat A Dry Scalp And Oily Hair?</h3>
                        </div>
                    </div>

                </div>
                
            </div>



            <div >
                <h2 className="sectiontitlemakeup">
                    <Link to="/makeup" id="link">HAIR STYLES</Link>
                    
                </h2>
            </div>

            <div id="Homepagemakeupcontainer">
                <div>
                    <img id="Homepagemakeupcontainerimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/25-Easy-And-Stylish-Hairstyles-For-Medium-Length-Hair.jpg.webp" alt="" />
                </div>
                <div>
                    <h2 id="homepagemakeupcontainerimagesidetext">
                    25 Easy And Stylish Hairstyles For Medium-Length Hair
                    </h2>
                    <p>
                    Styling your hair can be the most frustrating task before you step out of your house. Trying to do the simplest hairstyle can sometimes leave you in tears because it does not look the way you want it to. However, […]
                    </p>
                </div>
            </div>

            <div id="Homepagemakeupbottom">
                <div>
                    <img className="Homepagemakeupbottomimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/20-Amazing-Layered-Hairstyles-For-Curly-Hair.jpg.webp" alt="" />
                     <h2>20 Amazing Layered Hairstyles For Curly Hair</h2>
                </div>
                <div>
                    <img className="Homepagemakeupbottomimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/Top-30-Chocolate-Brown-Hair-Color-Ideas.jpg.webp" alt="" />
                    <h2>Top 30 Chocolate Brown Hair Color Ideas</h2>
                </div>
                <div>
                    <img className="Homepagemakeupbottomimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/How-Do-Celebrities-With-Diamond-Face-Shape-Style-Their-Hair-1.jpg.webp" alt="" />
                    <h2>How Do Celebrities With Diamond Face Shape Style Their Hair?</h2>
                </div>
            </div>


            <div id="Homepagehaircarecontainertop">
                <Link id="haircarelink">
                <h1>SKIN CARE</h1>
                </Link>

                <div id="Homepagehaircarecontainermiddle">
                    <div>
                    <img className="Homepagehaircarecontainermiddleimage"src="https://cdn2.stylecraze.com/wp-content/uploads/2018/12/How-To-Use-Retin-A-Tretinoin-For-Wrinkles-And-Skin-Aging-1.jpg.webp" alt="" />
               
                    </div>
                    <div id="middle">
                        <h2 id="middleh2" >How To Use Retin-A (Tretinoin) For Wrinkles And Skin Aging</h2>
                        <p>Tretinoin (Retin-A) is one of the most potent ingredients to fade signs of aging. You can never go wrong with Retin-A for wrinkles as it works to improve skin texture and tone to minimize the signs of aging and keep […]</p>

                    </div>
                </div>
                <div id="Homepagehaircontainerbottom">
                    <div id="lefthaircare">
                        <div>
                            <img id="lefthaircareimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/Korean-Skin-Care-Routine-For-Morning-Night--A-Complete-Guide.jpg.webp" alt="" />
                        </div>
                        <div>
                            <h3>Korean Skin Care Routine For Morning & Night – A Complete Guide</h3>
                        </div>


                    </div>
                    <div id="righthaircare">
                        <div>
                            <img id="righthaircareimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/Vitamin-E-For-Acne-Is-It-Effective.jpg.webp" alt="" />
                        </div>
                        <div>
                            <h3>Vitamin E For Acne: Is It Effective?</h3>
                        </div>
                    </div>

                </div>
                
            </div>




            <div >
                <h2 className="sectiontitlemakeup">
                    <Link to="/makeup" id="link"> HEALTH & WELLNESS</Link>
                    
                </h2>
            </div>

            <div id="Homepagemakeupcontainer">
                <div>
                    <img id="Homepagemakeupcontainerimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/09/20-Reasons-For-Weight-Gain-Tips-To-Manage-It-Effectively.jpg.webp" alt="" />
                </div>
                <div>
                    <h2 id="homepagemakeupcontainerimagesidetext">
                    20 Reasons For Weight Gain & Tips To Manage It Effectively
                    </h2>
                    <p>
                    There are many reasons for weight gain. You may wonder how this happened, especially if you are cautious about your weight. A variety of factors can contribute to weight gain, including taking medications, an inactive lifestyle, and not getting enough […]
                    </p>
                </div>
            </div>

            <div id="Homepagemakeupbottom">
                <div>
                    <img className="Homepagemakeupbottomimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/09/Post-workout-Meal-What-To-Eat-After-A-Workout.jpg.webp" alt="" />
                     <h2>Post-workout Meal: What To Eat After A Workout</h2>
                </div>
                <div>
                    <img className="Homepagemakeupbottomimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/09/Burn-500-Calories-A-Day-Fast-The-12-Best-Workouts.jpg.webp" alt="" />
                    <h2>Burn 500 Calories A Day Fast: The 12 Best Workouts</h2>
                </div>
                <div>
                    <img className="Homepagemakeupbottomimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/09/7-Amazing-Benefits-Of-Yellow-Tea-According-To-Science.jpg.webp" alt="" />
                    <h2>7 Amazing Benefits Of Yellow Tea, According To Science</h2>
                </div>
            </div>
            <Inpress/>
            <Footer/>


            
        </div>
    )
}
export default Home