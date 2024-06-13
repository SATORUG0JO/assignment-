import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar=()=> {
  const[theme,settheme]=useState("white")
    const[data,setdata]=useState("light")
    const black =()=>{
        if(theme=="white"){
            settheme("black")
            setdata("dark")
            
        }
        else{
            settheme("white")
            setdata("light")
        }
    }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  
        return (
          <nav className="navbar">
          <div className="logo">ASSIGNMENT</div>
          <button className="menu-icon" onClick={toggleMenu}>
            &#9776;
          </button>
          <ul className={`menu ${isMenuOpen ? 'open' : ''}`} id="dfg">
            <li> <NavLink to={"/"}>Home</NavLink> </li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
            <li><NavLink to={"/task"}>TextPage</NavLink></li>
    <button onClick={black} style={{border:"none" ,borderRadius:"10px"}}>{data}</button>

          </ul>
        </nav>
          );
        }
        


  
  export default Navbar;