import React,{ useRef, useState} from 'react'
import './Resume5.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import MayurPic from './MayurPic.jpg';
const Resume5 = () => {

    const [userinformation , setuserinformation] = useState({
        address:'',
        number:'',
        email:'',
        linkdin:'',
        firstname:'',
        lastname:'',
        position:'',
        role1:'',
        date2:'',
        company1:'',
    })

    let name, value
    const handledata = (e) =>{
        e.preventDefault()
        name = e.target.name
        value = e.target.value
        setuserinformation({...userinformation,[name]:value})
    }

    const [inputfield, setInputfield] = useState([
        {skills:''},  
    ])

    const [education, setEducation] = useState([
        {education:''},  
    ])

    const [experience, setExperience] = useState([
        {experience:''},  
    ])

    const [reference, setReference] = useState([
        {reference:''},  
    ])


    const handlechangeinput =(index, event) =>{
        const values = [...inputfield]
        event.preventDefault()
        values[index][event.target.name] = event.target.value
        setInputfield(values)
        // console.log(values)
      }
    
      const handleeducation =(index, event) =>{
        const values = [...education]
        event.preventDefault()
        values[index][event.target.name] = event.target.value
        setEducation(values)
        // console.log(values)
      }

      const handleexperience =(index, event) =>{
        const values = [...experience]
        event.preventDefault()
        values[index][event.target.name] = event.target.value
        setExperience(values)
        // console.log(values)
      }

        const handlereference =(index, event) =>{
        const values = [...reference]
        event.preventDefault()
        values[index][event.target.name] = event.target.value
        setReference(values)
        // console.log(values)
      }



    const handleaddfield = (e) =>{
        setInputfield([...inputfield, {skills:''}])
      }
    const handledeletefield  = (index) =>{
        const values = [...inputfield]
        values.splice(index, 1)
        setInputfield(values)
      }

      const handleaddeducation = (e) =>{
        setEducation([...education, {education1:''}])
      }

      const handledeleteeducation = (index) =>{
        const values = [...education]
        values.splice(index, 1)
        setEducation(values)
      }

      const handleaddexperience = (e) =>{
        setExperience([...experience, {experience:''}])
      }

      const handledeleteexperience = (index) =>{
        const values = [...experience]
        values.splice(index, 1)
        setExperience(values)
      }

      const handleaddreference = (e) =>{
        setReference([...experience, {experience:''}])
      }

      const handldedeletereference = (index) =>{
        const values = [...reference]
        values.splice(index, 1)
        setReference(values)
      }



      const [showButton, setShowButton] = useState(false);
      const inputRef = useRef(null);

      const handleInputClick = () => {
        setShowButton(true);
      } 
    
      const pdfRef = useRef()

      const downloadPDF = () => {
        const input = pdfRef.current;
        const pdfWidth = 210; // Width of the PDF page in millimeters (A4 size: 210mm)
        const pdfHeight = 350; // Height of the PDF page in millimeters (A4 size: 297mm)
        const targetImageWidth = 170; // Desired width of the image in millimeters
    
        html2canvas(input, { scale: 3 }).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const imgWidth = targetImageWidth;
          const imgHeight = (canvas.height / canvas.width) * imgWidth;
    
          const pdf = new jsPDF('p', 'mm', 'a4', true);
          const imgX = (pdfWidth - imgWidth) / 2;
          const imgY = 30;
    
          pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth, imgHeight);
          pdf.save('invoice.pdf');
        }).catch(error => console.log("failed"));
      };
      
      
  return (
<>
    <div >
    <section class="main-section" ref={pdfRef}>
        <div class="left-part">
            <div class="photo-container">
                <img src={MayurPic}/>
            </div>
            <div class="contact-container">
                <h2 class="title">Contact Me</h2>
                <div class="contact-list">
                    <div class="icon-container">
                        <i class="bi bi-geo-alt-fill"></i>
                    </div>
                    <div class="contact-text">
                        <input class="contact_text" placeholder='Enter Address' name='address' value={userinformation.address} onChange={handledata}></input>
                    </div>
                    
                </div>

                <div class="contact-list">
                    <div class="icon-container">
                        <i class="bi bi-geo-alt-fill"></i>
                    </div>
                    <div class="contact-text">
                        <input class="contact_text" placeholder='Enter Contact Number' name='number' value={userinformation.number} onChange={handledata}></input>
                    </div>
                    
                </div>

                <div class="contact-list">
                    <div class="icon-container">
                        <i class="bi bi-envelope-fill"></i>
                    </div>
                    <div class="contact-text">
                        <input class ='contact_text' placeholder='Enter Email'  name='email' value={userinformation.email} onChange={handledata}></input>
                    </div>
                </div>
                <div class="contact-list">
                    <div class="icon-container">
                        <i class="bi bi-laptop"></i>
                    </div>
                    <div class="contact-text">
                    <input class ='contact_text' placeholder='Linkedin link'  name='linkdin' value={userinformation.linkdin} onChange={handledata}></input>
                    </div>
                </div>
                <div class="contact-list">
                    <div class="icon-container">
                        <i class="bi bi-linkedin"></i>
                    </div>
                </div>
            </div>

            <div class="education-container">
                <h2 class="title">Education</h2>
                {education.map((education, index)=>(
                <div class="course" key = {index}>
                    { showButton && <AddCircleOutlineIcon onClick={() => handleaddeducation()}></AddCircleOutlineIcon>}
                    { showButton && <DeleteIcon onClick={() => handledeleteeducation(index)}></DeleteIcon>}
                <input class ='course_text' placeholder='Enter Course Studied' name='course' value={education.course}ref={inputRef} onChange={event => handleeducation(index,event)} onClick={handleInputClick}></input>
                <textarea class ='college_text' placeholder='Enter college Name' name='college' value={education.college} ref={inputRef} onChange={event => handleeducation(index,event)} onClick={handleInputClick}></textarea>
                <input class ='college_text' placeholder='Enter Date' name='date1' value={education.date1} ref={inputRef} onChange={event => handleeducation(index,event)} onClick={handleInputClick}></input>
                </div>
                ))}
            </div>

            <div class="skills-container">
                <h2 class="title">Skills</h2>
                {inputfield.map((inputfield, index)=>(
                
                <div key = {index}class="skill">
                    
                    <div class="left-skill">
                    { showButton && <AddCircleOutlineIcon onClick={() => handleaddfield()}></AddCircleOutlineIcon>}
                    { showButton && <DeleteIcon onClick={() => handledeletefield(index)}></DeleteIcon>}
                    <i id='button' class="fa fa-trash" aria-hidden="true"    ></i>
                        <input class ='skill_Name' placeholder='Enter Skills' name='skills' value={inputfield.skills} ref={inputRef} onChange={event => handlechangeinput(index,event)} onClick={handleInputClick}></input >
                    </div>
                </div>
                ))}
            </div>
        </div>
        <div class="right-part">
            <div class="banner">
                    
                <input class="firstname" placeholder='Enter First Name' name='firstname' value={userinformation.firstname} onChange={handledata}></input>
                <input class="lastname" placeholder='Enter Last Name'name='lastname' value={userinformation.lastname} onChange={handledata}></input>
                <input class="position" placeholder='Enter position'name='position' value={userinformation.position} onChange={handledata}></input>
            </div>

            <div class="work-container ">
                <h2 class="title_text">work experience</h2>
                {experience.map((experience, index)=>(
                <div class="work" key={index}>
                    { showButton && <AddCircleOutlineIcon onClick={() => handleaddexperience()}></AddCircleOutlineIcon>}
                    { showButton && <DeleteIcon onClick={() => handledeleteexperience(index)}></DeleteIcon>}
                    <div class="job-date">
                    <input class="job" placeholder='Enter Role' name='role1' value={experience.role1} ref={inputRef} onChange={event => handleexperience(index,event)} onClick={handleInputClick}></input>
                    <input class="date" placeholder='Enter Date' name='date2' value={experience.date2} ref={inputRef} onChange={event => handleexperience(index,event)} onClick={handleInputClick}></input>
                    </div>
                    <input class="company_name"placeholder='Enter Company Name' name='company1' value={experience.company1} ref={inputRef} onChange={event => handleexperience(index,event)} onClick={handleInputClick}></input>
                    <textarea class="work-text" placeholder='Enter your experience' name='experience1' value={experience.experience1} ref={inputRef} onChange={event => handleexperience(index,event)} onClick={handleInputClick}></textarea>
                </div>
                  ))}
            </div>

            <div class="references-container">
                <h2 class="title_text">References</h2>
                <div class="references">
                {reference.map((reference, index)=>(
                    <div class="left-references" key={index}>
                    {/* { showButton && <AddCircleOutlineIcon onClick={() => handleaddreference()}></AddCircleOutlineIcon>}
                    { showButton && <DeleteIcon onClick={() => handldedeletereference(index)}></DeleteIcon>} */}
                        <input class="name" placeholder='Enter Name' name='refername' value={reference.refername} ref={inputRef} onChange={event => handlereference(index,event)} onClick={handleInputClick}></input><br></br>
                        <input class="company-name" placeholder='Enter job position' name='referposition' value={reference.referposition} ref={inputRef} onChange={event => handlereference(index,event)} onClick={handleInputClick}></input>
                        <div class="phone">
                            <div class="phone-text">
                                <p>Phone:</p>
                                <input class='phone' placeholder='Enter Number' name='referephonenumber' value={reference.referephonenumber} ref={inputRef} onChange={event => handlereference(index,event)} onClick={handleInputClick}></input>
                                <p>Email:</p>
                                <input class='phone' placeholder='Enter Email' name='referemail' value={reference.referemail} ref={inputRef} onChange={event => handlereference(index,event)} onClick={handleInputClick}></input>
                                
                            </div>   
                        </div>
                         
                    </div>
                ))}
                </div>
            </div>
        </div>
    </section>


    </div>
    <button className="btn btn-danger" type="submit" onClick={downloadPDF}>
            Download
      </button>
    </>
  )
}

export default Resume5
