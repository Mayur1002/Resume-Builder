import React, { useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './Resume6.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import html2pdf from 'html2pdf.js';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// import Html from 'react-p
const Resume6 = () => {
// Dynamic language input
  let index
  const language = {langauge:'', percent:''}

  const [languagelist, setlanguagelist] = useState([language]);

  const addlanguage =()=>{ 
    setlanguagelist([...languagelist,language])
  }
  const Removelanguage = (index)=>{
        const filterlanguage = [...languagelist]
        filterlanguage.splice(index,1)
        setlanguagelist(filterlanguage)
  }

  const experience = {company:'', date:'', aboutcompany:''}

  const [experiencelist,  setexperiencelist] = useState([experience]);

  const addexperience = () =>{
    setexperiencelist([...experiencelist, experience])
  }

  const Removeexperience = (index)=>{
    const filterexperience = [... experiencelist]
    filterexperience.splice(index,1)
    setlanguagelist(filterexperience)
}

 let handleinputchange = (e, event)=>{
    const {name, value}= e.target;
    const list = [...languagelist]
    list[index][name] = value
    setlanguagelist(list)
  }
  
// Download Pdf



// const downloadPDF = () => {
//   const input = pdfRef.current;
//   const pdfWidth = 210; // Width of the PDF page in millimeters (A4 size: 210mm)
//   const pdfHeight = 297; // Height of the PDF page in millimeters (A4 size: 297mm)
//   const targetImageWidth = 160; // Desired width of the image in millimeters

//   html2canvas(input, { scale: 3}).then((canvas) => {
//     const imgData = canvas.toDataURL('image/png');
//     const imgWidth = targetImageWidth;
//     const imgHeight = (canvas.height / canvas.width) * imgWidth;

//     const pdf = new jsPDF('p', 'mm', 'a4', true);
//     const imgX = (pdfWidth - imgWidth) / 2;
//     const imgY = 30;

//     pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth, imgHeight);
//     pdf.save('invoice.pdf');
//   }).catch(error => console.log("failed"));
// };

const pdfRef = useRef(null);

  // ... Rest of your component code ...

  const downloadPDF = async () => {
    try {
      const pdfDataUri = pdfRef.current.state.pdf;

      const pdf = await fetch(pdfDataUri);
      const pdfBlob = await pdf.blob();

      const url = window.URL.createObjectURL(pdfBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to generate PDF:', error);
    }
  };

  


  return (
    <>
    <div className="container" ref={pdfRef} >
      <div className="profileresume6">
        <div className="profile-photo"></div>
        <div className="profile-info">
          <h2 className="heading heading-light">Profile</h2>
          <textarea className="profile-text"rows={7}cols={35}>
        
          </textarea>
          <div>
            {/* <div className="contacts-item">
              <h3 className="contacts-title">
                <i className="fas fa-phone-volume"></i>
                Phone
              </h3>
              <input className='phone'></input>
              <a href="tel:+18001234567" className="contacts-text" >+(1800) 123 4567</a>
            </div> */}
            <div>
                <h5 className='Phoneh5'>Phone</h5>
                <input className='phone_number' size={400} placeholder='Enter your Number' ></input>
            </div>
            {/* <div className="contacts-item">
              <h3 className="contacts-title">
                <i className="fas fa-envelope"></i>
                Email
              </h3>
              <a href="mailto:Robertsmith@gamil.com" className="contacts-text">Robertsmith@gmail.com</a>
            </div> */}
            <div>
            <h5 className='Phoneh5'>Email</h5>
                <input className='phone_number' size={400} placeholder='Enter your Email' ></input>
            </div>
            {/* <div className="contacts-item">
              <h3 className="contacts-title">
                <i className="fas fa-globe-americas"></i>
                Web
              </h3>
              <a href="http://www.robertsmith.com" className="contacts-text">www.robertsmith.com</a>
            </div> */}
            <div>
            <h5 className='Phoneh5'>Website</h5>
                <input className='phone_number' size={400} placeholder='Enter website' ></input>
            </div><br></br>
            {/* <div className="contacts-item">
              <h3 className="contacts-title">
                <i className="fas fa-map-marker-alt"></i>
                Home
              </h3>
              <address className="contacts-text">
                24058, Belgium, Brussels, <br />Liutte 27, BE
              </address>
            </div> */}
          </div>
          <h2 className="heading heading-light">Languages</h2>
          
          {
            languagelist.map((inputfield,index)=>(  
          <div className="languages" key={index}>
            <div className="language">
              <input className="language-text" placeholder='Language' name='language1' ></input>
              <input className="languages-per" placeholder='percent' name='perecent' ></input>
            </div>
            <IconButton>
                <DeleteIcon onClick = {() => Removelanguage(index)}/>
            </IconButton>
            <IconButton>
                <AddCircleOutlineIcon onClick={addlanguage}/>
            </IconButton>
          </div>  
            ))
            }
            <div className="lines">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
        </div>
      </div>
      <div className="resume">
        <div className="resume-wrap">
          <div className="logo">
            <div className="logo-lines logo-lines_left">
              <span className="logo-line"></span>
              <span className="logo-line"></span>
              <span className="logo-line"></span>
            </div>
            <input className="logo-img"></input>
            <div className="logo-lines logo-lines_right">
              <span className="logo-line"></span>
              <span className="logo-line"></span>
              <span className="logo-line"></span>
            </div>
          </div>
          <div className="about">
            <input className="name" placeholder='Enter Name'></input><br></br>
            <input className="position" placeholder='Enter Role'></input>
            <textarea className="about-address" rows={2} cols={50} placeholder='Enter Address'></textarea>
            
          </div>

          
          {
            experiencelist.map((inputfield,index)=>(  
           
              <div className="experience" key={index}>
              <h2 className="heading heading_dark">Experience</h2>
              <IconButton>
                <DeleteOutlineIcon onClick = {() => Removeexperience(index)}/>
            </IconButton>
            <IconButton>
                <AddCircleIcon onClick={addexperience}/>
            </IconButton>
              <ul className="list">
                <li className="list-item">
                  <input className="list-item__title" placeholder='Enter Company name'></input><br></br>
                  <input className="list-item__date" placeholder='Enter Date'></input><br></br>
                </li>
              </ul>
            </div>
            
            
            ))
            }

          
            

          

          <div className="education">
            <h2 className="heading heading_dark">Education</h2>
            <ul className="list">
              <li className="list-item list-item_non-border">
                <input className="list-item__title" placeholder='Enter Company name'></input><br></br>
                <input className="list-item__date" placeholder='Enter Date'></input><br></br>
                <textarea className="list-item__text" placeholder='Enter Description' rows={3} cols={100}></textarea>
              </li>
            </ul>
          </div>
          <div className="skills">
            <h2 className="heading heading_dark heading_skills">Skills</h2>
            <ul className="skills-list">
              <li className="skills-list__item">
                Wordpress
                <div className="level level-80"></div>
              </li>
              <li className="skills-list__item">
                HTML
                <div className="level level-90"></div>
              </li>
              <li className="skills-list__item">
                Photoshop
                <div className="level level-50"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <button className="btn btn-danger" type="submit" onClick={downloadPDF}>
        Download
      </button>
    <div className="pdf-container">
        <Document file={{ data: 'data:application/pdf;base64,...' }}>
          <Page pageNumber={1} width={400} />
        </Document>
      </div>
    </>
  );
}

export default Resume6;
