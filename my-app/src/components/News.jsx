import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Footer from "./Footer"
import "./news.css"
import Singlepage from "./Singlepage"


function News(){
    let [newsdata,setnewsdata]=useState([])
    let[page,setpage]=useState(1)
    let [firstimage,setfirstimage]=useState("")
    let [params,setparams]=useState("india")
    let [text1,settext1]=useState("")
    let [text2,settext2]=useState("")
    console.log(params)
   
    let getdata=()=>{
        axios.get(`
        https://newsapi.org/v2/everything?q=${params}&from=2022-08-30&sortBy=publishedAt&apiKey=d1b53b7024ed490fbdb47151694807b1`)
        .then((res)=>{
            console.log(res)
            console.log(res.data.articles,"theja")
           
            setnewsdata(res.data.articles)
            setfirstimage(res.data.articles[0].urlToImage)
            console.log(res.data.articles[0].urlToImage)
            settext1(res.data.articles[0].description)
            settext2(res.data.articles[0].title)
        })
    }
    useEffect(()=>{
        getdata()
    },[params])
    return <div>
        <h1>NEWS</h1>
        <div id="newscontainer">
            <div onClick={()=>setparams("Inspiration")}>Inspiration</div>
            <div onClick={()=>setparams("Trends")}>Trends</div>
            <div onClick={()=>setparams("IndiaRangoli")}>Rangoli</div>
            <div onClick={()=>setparams("flowers")}>Flowers</div>
            <div onClick={()=>setparams("Tattoos")}>Tattoos</div>
            <div onClick={()=>setparams("Aishwarya Rai")}>Celebrity news</div>
            <div onClick={()=>setparams("Fashion")}>Fashion</div>
            <div onClick={()=>setparams("Top 10's")}>Top 10's</div>

        </div>
        <div id="newstopcontainer">
            <div>
                <img id="newstopcontainerimage" src={firstimage} alt="" />
            </div>
            <div id="newstopcontainertext">
                
                <div>
                    <h1>{text2}</h1>
                    <p>{text1}</p>
                </div>
            
            </div>
        </div>

        <div id="newsbottomcontainer">
            {newsdata.map((el)=>(
                <div key={el.titie} id="newsimage"  >
                   <Link to="/news/newsid">
                    <img id="newsbottomcontainerimage" src={el.urlToImage} alt="image" />
                    <h3 id="newstitle">{el.title}</h3>
                    </Link>
                   
                </div>
            ))}
           
            

        </div>
        <div>
        <button disabled={page==1} onClick={()=>setpage(page-1)}>PREV</button>
            <button>{page}</button>
            <button onClick={()=>setpage(page+1)}>NEXT</button>
        </div>
        <Footer/>

    </div>
}
export default News