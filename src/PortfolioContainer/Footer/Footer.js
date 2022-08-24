import React from 'react'
import './Footer.css'
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { IoMdMail } from "@react-icons/all-files/io/IoMdMail";


function Footer() {
    return (
        <div  className='Miandiv'>
            <div >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#302f2f" fill-opacity="1" d="M0,160L48,154.7C96,149,192,139,288,149.3C384,160,480,192,576,208C672,224,768,224,864,192C960,160,1056,96,1152,80C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>

            <div className='footer  '>
                    <div className='Headding col-12'>
                        Contact Me
                    </div>
                <div className='col-12  d-flex justify-content-between'>
          
                    <div  style={{marginLeft:"50px" ,marginTop:"30px"}}>
                       <p className='contact'> <IoMdMail className='icon'/> abdulsameer261299@gmail.com  </p>
                       <p className='contact'><FaPhoneAlt  className='icon'/> +91 63819 84080</p>
                       <p className='contact'><FaHome  className='icon'/> 29/C Maaniya Thottam -1, N.H Road Marakadai-Coimbatore-641001.</p>      
                    </div>
                    
                </div>
                
                </div>
            </div>
    )
}

export default Footer


//                             {/* 
//   <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

//     <div class="me-5 d-none d-lg-block">
//       <span>Get connected with us on social networks:</span>
//     </div>
 


//     <div>
//       <a href="" class="me-4 link-grayish">
//         <i class="fab fa-facebook-f"></i>
//       </a>
//       <a href="" class="me-4 link-grayish">
//         <i class="fab fa-twitter"></i>
//       </a>
//       <a href="" class="me-4 link-grayish">
//         <i class="fab fa-google"></i>
//       </a>
//       <a href="" class="me-4 link-grayish">
//         <i class="fab fa-instagram"></i>
//       </a>
//       <a href="" class="me-4 link-grayish">
//         <i class="fab fa-linkedin"></i>
//       </a>
//       <a href="" class="me-4 link-grayish">
//         <i class="fab fa-github"></i>
//       </a>
//     </div>

//   </section> */}