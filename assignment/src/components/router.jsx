import { BrowserRouter,Routes,Route } from "react-router-dom"
import Contact from "../components/contact.jsx"
import Home from "../components/home.jsx"
import Task from "./taskpage.jsx"

const Rout=()=>{
    return(
        <>

    
        <BrowserRouter>
        <Routes>
<Route index element={<Home/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Task" element={<Task/>}></Route>


          


            <Route path="*" element={"Page not found"}></Route>

        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Rout