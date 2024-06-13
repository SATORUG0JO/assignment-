import { useState } from "react"
import { NavLink } from "react-router-dom"
// import Navbar from "./navbar";
const Task=()=>{
     
  const[theme,settheme]=useState("white")
  const[color,setcolor]=useState("black")

  const[data,setdata]=useState("light")
  const black =()=>{
      if(theme=="white"){
          settheme("black")
          setdata("dark")
          setcolor("white")
          
      }
      else{
          settheme("white")
          setdata("light")
          setcolor("black")

      }
  }
  const taskpage={
    textAlign:"center",
    fontFamily:"monospace",
  }

const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
}

    return(
        <div className="textpage"style={{backgroundColor:theme,color:color,height:"100vh"}}>
   <nav className="navbar" >
          <div className="logo" style={{backgroundColor:theme,color:color}}>ASSIGNMENT</div>
          <button className="menu-icon" onClick={toggleMenu}>
            &#9776;
          </button>
          <ul className={`menu ${isMenuOpen ? 'open' : ''}`} id="dfg"style={{backgroundColor:theme,color:color}}>
            <li > <NavLink to={"/"}  style={{backgroundColor:theme,color:color}}>Home</NavLink> </li>
            <li><NavLink to={"/contact"} style={{backgroundColor:theme,color:color}}>Contact</NavLink></li>
            <li><NavLink to={"/task"} style={{backgroundColor:theme,color:color}}>TaskPage</NavLink></li>
    <button onClick={black} >{data}</button>

          </ul>
        </nav>
        <h1 style={taskpage}>This is TaskPage</h1>
        </div>
    )
}
export default Task