import "./makeup.css"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
function Makeup(){
    let [makeupdata,setmakeupdata]=useState([])
    let [page,setpage]=useState(1)
    let getdata=()=>{
        axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json`)
        .then((res)=>{
            console.log(res.data)
            setmakeupdata(res.data)
        })
       
    }
    useEffect(()=>{
        getdata()
    },[page])
    return <div>
        <h1>Makeup</h1>
        <div id="makeupcontainer">
            <div>Bridal Makeup</div>
            <div>Mehandi Designs</div>
            <div>Celebrity Makeup</div>
            <div>Face Makeup</div>
            <div>Nail Art</div>
            <div>Lip Makeup</div>
            <div>Makeup Ideas</div>
            <div>Eye Makeup</div>

        </div>
        <div id="makeuptopcontainer">
            <div>
                <img id="makeuptopcontainerimage" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/3900-Top-10-Cheek-Makeup-Tips-And-Tricks-SS-720x810.jpg.webp" alt="" />
            </div>
            <div id="makeuptopcontainertext">
                
                <div>
                    <h1>10 Easy Cheek Makeup Tips To Look  Fresh Throughout The Day </h1>
                    <p>If you are looking for some cheek makeup tips and tricks, look no more because we have got you covered.  Some of us are blessed with high cheekbones that add charm to our facial features. But we often ignore them</p>
                </div>
            
            </div>
        </div>

        <div id="makeupbottomcontainer">
            {makeupdata.map((el)=>(
                <div id={el.id}>
                    <img id="makeupbottomcontainerimage" src={el.image_link} alt="image" />
                    <h3>{el.name}</h3>
                </div>
            ))}
            <button disabled={page==1} onClick={()=>setpage(page-1)}>PREV</button>
            <button>{page}</button>
            <button onClick={()=>setpage(page+1)}>NEXT</button>
            

        </div>

    </div>
}
export default Makeup