import React from 'react'
import "./PortfolioBox.css";
import figma from '../../Image/figma.PNG';

function PortfolioBox() {
  return (

    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div style={{ padding: "20px" }}>


        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={figma} className="d-block w-100" alt="..."  height={550}/>
          </div>
          <div className="carousel-item">
            <img src={figma} className="d-block w-100" alt="..."  height={550}/>
          </div>
          <div className="carousel-item">
            <img src={figma} className="d-block w-100" alt="..." height={550} />
          </div>
        </div>
        <div style={{
          display: "flex",
          
        }}>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>
     
    </div>
  )
}

export default PortfolioBox;

