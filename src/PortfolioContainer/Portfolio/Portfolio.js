import React from 'react'
import './Portfolio.css';
import figma from '../../Image/figma.jpg';
import portfolio from '../../Image/portfolio.PNG';
// import Demo from '../../page/demo';


function Portfolio() {
  return (
    <div >
      <div className='wavepORTFOLIOr'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#302f2f" fillOpacity="1" d="M0,160L48,154.7C96,149,192,139,288,149.3C384,160,480,192,576,208C672,224,768,224,864,192C960,160,1056,96,1152,80C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <p className='titleportfolio Portfolio'>
                  portfolio
       </p>

      <div className=' portfoliocon'>
        <div className='chartcontainer container col-12 '>
            
            <div className='col-3 box' >
                    <img src={portfolio} alt="box1" className='imagg' />
                 <div className='imagDiv'>
                    <button className='vst btn btn-primary'  >Visit</button>
                </div>
           
            </div>
             <div className='col-3 box' >
                  <img src={figma} alt="box2" className='imagg'/>
                 <div className='imagDiv'>
                    <button className='vst btn btn-primary'>Visit</button>
                 </div>
             </div>
          <div className='col-3 box'>
          <img src={figma} alt="box2" className='imagg'/>
             <div className='imagDiv'>
                    <button className='vst btn btn-primary'  >Visit</button>
                </div>
            </div>

        </div>

      </div>

    </div>



  )
}

export default Portfolio