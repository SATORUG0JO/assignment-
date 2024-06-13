import styled from "styled-components"
import IMG from "../images/web1.webp"
import "../components/home.css"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {FaRegBuilding } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import Like from "../images/like.jpg";
import Shop from "../images/shopping.png";
import Thunder from "../images/thunder1.jpg";
import Navbar from "./navbar";
const Home = () => {
//   const Main=styled.div`
// width:100%;
// display:flex;
  
//   `

  const Left=styled.div`
  min-width:50%;
  // min-height:10vh;
  
    `

    const Right=styled.div`
  min-width:50%;
    // height:90vh;
      `
      const Img=styled.img`
      height:90vh;
  width:100%;

      `

      const Button=styled.button`
      height:55px;

      width:200px;
      border-radius:25px;
      border:none;
      background:blue;
      color:white;
      font-size:1em;
      
      `


      const Card=styled.div`
height:200px;
max-width:200px

      `
   const Para=styled.p`
   font-size:15px;
   color:#333;
   margin-top:10px;
   `
   const Cardd=styled.div`
   height:500px;
   width:430px;
   `

   const Imgg=styled.img`
   height:100%;
   width:100%;
   border-radius:10px;
   background-color:white;

   `
  
  
   const[theme,setTheme]=useState("white")
  //  const[color,setcolor]=useState("black")

  //  const[data,setdata]=useState("light")
   const black =()=>{
       if(theme=="white"){
           setTheme("black")
          //  setdata("dark")
          //  setcolor("white")
           
       }
       else{
           setTheme("white")
          //  setdata("light")
          //  setcolor("black")

       }
   }

 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const toggleMenu = () => {
   setIsMenuOpen(!isMenuOpen);
 }


   const currentColor = theme === 'white'?'black':'white'
   const currentDataColor = theme === 'white'?'dark':'light'
  return (

    // #NAVBAR 

<div className="body" style={{backgroundColor:theme,color:currentColor}}>
<nav className="navbar" >
          <div className="logo" style={{backgroundColor:theme,color:currentColor}}>ASSIGNMENT</div>
          <button className="menu-icon" onClick={toggleMenu} >
            &#9776;
          </button>
          <ul className={`menu ${isMenuOpen ? 'open' : ''}`} id="dfg" style={{backgroundColor:theme,color:currentColor}}>
            <li > <NavLink to={"/"}  style={{backgroundColor:theme,color:currentColor}}>Home</NavLink> </li>
            <li><NavLink to={"/contact"} style={{backgroundColor:theme,color:currentColor}}>Contact</NavLink></li>
            <li><NavLink to={"/task"} style={{backgroundColor:theme,color:currentColor}}>TaskPage</NavLink></li>
    <button onClick={black} >{currentDataColor}</button>

          </ul>
        </nav>
 




<div className="main">
<Left className="left" > 
  

  <h2 className="eren">LET'S CREATE</h2>
  <h1 className="eren2">What is in your mind</h1>
 <p className="eren3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam nam a voluptates
   quo sequi accusantium necessitatibus laudantium.</p>
   <Button>Create a website</Button>
  

 
</Left>
<Right className="right" >
  <Img className="image" id="iko" src={IMG} alt="" />
</Right>

</div>
<div className="cards">
<Card className="card">
        <FaRegBuilding className="icon"/>
        <h3 className="head">Local Bussiness</h3>
        <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Para>
      </Card>
      <Card className="card">

      <IoBagCheckOutline className="icon"/>
        <h3 className="head">Online Store</h3>
        <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Para>

        </Card>
      <Card className="card">

      <FaRegEdit className="icon"/>
        <h3 className="head">Blogging</h3>
        <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Para>

        </Card>
      <Card className="card">

      <GoVerified className="icon"/>
        <h3 className="head">Portfolio</h3>
        <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Para>

        </Card>
        </div>

<h1 className="sdfg">Our Services</h1>
<div className="cards2">
<Cardd className="card1">
  <Imgg src={Like} alt="" />

</Cardd>
<Cardd className="card1">
<Imgg src={Shop} alt="" />

</Cardd>
<Cardd className="card1">
<Imgg  src={Thunder} alt="" />

</Cardd>
</div>

<div className="footer">
  <ul>
    <li>About</li>
    <li>News</li>

    <li>Hostling</li>
    <li>Privacy</li>

  </ul>
  <ul>
    <li>About</li>
    <li>News</li>

    <li>Hostling</li>
    <li>Privacy</li>

  </ul>
  <ul>
    <li>About</li>
    <li>News</li>

    <li>Hostling</li>
    <li>Privacy</li>

  </ul>
  <ul>
    <li>About</li>
    <li>News</li>

    <li>Hostling</li>
    <li>Privacy</li>

  </ul>
 
 </div>


    </div> 

  )
}


export default Home