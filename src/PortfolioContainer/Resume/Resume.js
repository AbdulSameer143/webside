import React from 'react';

import education from '../../Image/education.png'
import hr from "../../Image/hrImg.png";
import './Resume.css';
import shadow from '../../Image/shadow1.png'


function Resume() {
    return (
        <div className="main-container container">
            <div className='title'>
                Resume
                <div className='subTitle'>
                    <div>
                        My Formal Bio Details
                    </div>

                    <img src={hr} className="hr-line" alt="underline" />
                </div>

            </div>

            <div className='conteine-Box container'>

                <div style={{height:"400px" ,width:"27%",display:"flex",alignItems:"center"}}>
                    <div className='left-Container'>

                        <div className='resume-left-icon-section'>
                            <img src={education} alt='education' className='imageEducation'/>
                            <img src={education} alt='education' className='imageEducation' />
                            <img src={education} alt='education' className='imageEducation' />
                            <img src={education} alt='education' className='imageEducation' />
                            <img src={education} alt='education' className='imageEducation'/>
                        </div>
                        <div className='resume-left-title-section'>
                            <div className='resumeHeading'> Education </div>
                            <div className='resumeHeading'> Work History </div>
                            <div className='resumeHeading'> Technology Skills </div>
                            <div className='resumeHeading'> Software Skills </div>
                            <div className='resumeHeading'> Education </div>
                        </div>
                    </div>


                </div>

                <img className='shadow-image' src={shadow} alt="shadow" />

                <div className='right-Container'>
                    gffdsgfgfgfdggd
                    <h1>sdfsdf</h1>
                </div>

            </div>
        </div>
    )
}

export default Resume;