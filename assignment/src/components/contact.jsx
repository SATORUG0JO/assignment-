import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './contact.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import Navbar from './navbar';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  address: Yup.string().required('Address is required'),
  dob: Yup.date().required('Date of Birth is required'),
  bio: Yup.string().required('Bio is required'),
  profilePic: Yup.mixed().required('Profile Picture is required'),
  bannerPic: Yup.mixed().required('Banner Image is required'),
})

const Contact = () => {
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  }
  
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

const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
}


  return (
<div className="body" style={{backgroundColor:theme,color:color}}>
<nav className="navbar" >
          <div className="logo" style={{backgroundColor:theme,color:color}}>ASSIGNMENT</div>
          <button className="menu-icon" onClick={toggleMenu}>
            &#9776;
          </button>
          <ul className={`menu ${isMenuOpen ? 'open' : ''}`} id="dfg" style={{backgroundColor:theme,color:color}}>
            <li > <NavLink to={"/"}  style={{backgroundColor:theme,color:color}}>Home</NavLink> </li>
            <li><NavLink to={"/contact"} style={{backgroundColor:theme,color:color}}>Contact</NavLink></li>
            <li><NavLink to={"/task"} style={{backgroundColor:theme,color:color}}>TaskPage</NavLink></li>
    <button onClick={black} >{data}</button>

          </ul>
        </nav>
    <div className="user-form-container"style={{backgroundColor:theme,color:color}}>
     
      <Formik
        initialValues={{
          name: '',
          email: '',
          address: '',
          dob: '',
          bio: '',
          profilePic: null,
          bannerPic: null,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="user-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <Field as="textarea" id="address" name="address" />
              <ErrorMessage name="address" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <Field type="date" id="dob" name="dob" />
              <ErrorMessage name="dob" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="bio">Bio:</label>
              <Field as="textarea" id="bio" name="bio" />
              <ErrorMessage name="bio" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="profilePic">Profile Picture:</label>
              <input
                type="file"
                id="profilePic"
                name="profilePic"
                onChange={(event) => {
                  setFieldValue('profilePic', event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage name="profilePic" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="bannerPic">Banner Image:</label>
              <input
                type="file"
                id="bannerPic"
                name="bannerPic"
                onChange={(event) => {
                  setFieldValue('bannerPic', event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage name="bannerPic" component="div" className="error" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
    </div>

  );
};




export default Contact;
