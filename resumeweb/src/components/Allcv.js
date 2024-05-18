import React from 'react'
import Resume1 from './Resume1.png';
import Resume2 from './Resume2.png';
import "./Allcv.css"
import { Link, Navigate } from 'react-router-dom';
import Resume5 from './Resume5.png';
import Resume6 from './Resume6.png';
import Resume from './Resume.png';
// import { color } from 'html2canvas/dist/types/css/types/color';


export const Allcv = () => {

  const frame1 = () =>{
    <Link to={Resume2}></Link>
  }

  const frame2 = () =>{
    Navigate("/Resume2")
  }

  let resume1= {
    "margin-top":"50px",
    "margin-left":"30px",
    "width" : "300px",
    "height" : "350px",
    "border-radius" : "50px",
  }

  let resume2= {
    "margin-top":"50px",
    "margin-left":"30px",
    "width" : "300px",
    "height" : "350px",
    "border-radius" : "50px",
    "border-color":"black"
  }

  let resume5= {
    "margin-top":"50px",
    "margin-left":"30px",
    "width" : "300px",
    "height" : "350px",
    "border-radius" : "50px",
  }

  let resume6= {
    "margin-top":"50px",
    "margin-left":"30px",
    "width" : "350px",
    "height" : "350px",
    "border-radius" : "50px",
  }
  return (
    <>
    <div>
      
      <a href='\Resume3'>
       <img src= {Resume2} style = {resume2} className='resume2' />
       </a>
       <a href='\Resume2'>
       <img src= {Resume} style = {resume1} className='resume1' />
      </a>
       <a href='\Resume5'>
       <img src= {Resume5} style = {resume5} className='resume2' />
       </a>
       <a href='\Resume6'>
       <img src= {Resume6} style = {resume6} className='resume2' />
       </a>
    </div>
    </>
  )
}
