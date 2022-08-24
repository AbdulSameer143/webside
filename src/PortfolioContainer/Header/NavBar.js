/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './NavBar.css'

import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { Link } from 'react-scroll';


function NavBar() {

  return (
      <div className='Navbar '>
          <div className='menu-items'>
              <ul className='menu '>
   
                  <div className='mainDiv' >
                    <li ><Link to='main' className='link-btn' >Home</Link></li>
                     
                  </div>
                  <div className='mainDiv'>
                      <li><Link to='AboutMe' className='link-btn'>AboutMe</Link></li>
                      <div className='hrRow'></div>
                  </div>
                  <div >
                      <li><Link to='Skills' className='link-btn'>Skills</Link></li>
                      <div className='hrRow'></div>
                  </div>
                  <div>
                      <li><Link to='Portfolio' className='link-btn'>Portfolio</Link></li>
                      <div className='hrRow'></div>    
                 </div>
                  <div>
                      <li><Link to='ContactMe' className='link-btn'>ContactMe</Link></li>
                      <div className='hrRow'></div>
                 </div>
                  
                  
                  
                 
              </ul>
          </div>
          <div className='SocialMedia '>
              <div className='social'>
              <a href='#'className='link-btn'><FaFacebookF/></a>
              <a href='#'className='link-btn'><FaInstagram /></a>
              <a href='#'className='link-btn'><FaWhatsapp /></a>
              <a href='#'className='link-btn'><FaGithub /></a>
              <a href='#' className='link-btn'><FaLinkedinIn /></a>
              </div>
              <div className='bar'>
              <a href='#' className='link-btn'><FaBars /></a>
              </div>
             
              
          </div>
      </div>    
  )
     
}

export default NavBar;



 