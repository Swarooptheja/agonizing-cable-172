
import {Routes,Route} from "react-router-dom"
import Makeup from "./makeup"
import News from "./News"
function Allroutes(){
    return(
        <Routes>
            <Route path="/makeup" element={<Makeup/>}></Route>
            <Route path="/news" element={<News/>}></Route>
        </Routes>
    )
}
export default Allroutes