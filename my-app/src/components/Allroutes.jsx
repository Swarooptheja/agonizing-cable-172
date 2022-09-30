
import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Makeup from "./makeup"
import News from "./News"
import Singlepage from "./Singlepage"
function Allroutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/makeup" element={<Makeup/>}></Route>
            <Route path="/news" element={<News/>}></Route>
            <Route path="/news/:newsid" element={<Singlepage/>}></Route>
        </Routes>
    )
}
export default Allroutes