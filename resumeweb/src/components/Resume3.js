import React, { useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import "./Resume3.css"
import { useNavigate } from "react-router-dom";
// import { color } from 'html2canvas/dist/types/css/types/color';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Resume3 = () => {

  const [userdata, setData] = useState({

    name: '',
    role: '',
    bintro: '',
    email: '',
    website: '',
    contact: '',
    linkdin: '',
    address: '',
    matric1:'',
    matric2:'',
    bachin:'',
    bach1:'',
    bach2:'',
    masterin:'',
    master1:'',
    master2:'',
    lang1:'',
    lang1p:'',
    lang2:'',
    lang2p:'',
    lang3:'',
    lang3p:'',
    profile:'',
    company1:'',
    role1:'',
    abexp1:'',
    company2:'',
    company3:'',
    role2:'',
    role3:'',
    abexp2:'',
    abexp3:'',
    date1:'',
    date2:'',
    date3:'',
    date4:'',
    skill1:'',
    skill2:'',
    skill3:'',
    skill4:'',
    percent1:'',
    percent2:'',
    percent3:'',
    percent4:'',
    hobby1:'',    
    hobby2:'',    
    hobby3:'',    
    hobby4:'',    
    image:'',
  })
  let name, value
  const handledata = (e) => {
    e.preventDefault();
    name = e.target.name
    value = e.target.value
    setData({ ...userdata, [name]: value })
  }

  // const [image, setImage] = useState('') 
  // const handleimage = (e) =>{
  //   e.preventDefault()
  //   setImage(e.target.files[0])
  // }

  // function handleAPI(){
  //   const formData = new formData()
  //   formData.append('image', image)
  // }

  const navigate = useNavigate()
  function gotoPreview() {
    navigate("/preview", { state: { name: userdata.name, role: userdata.role, bintro: userdata.bintro, email: userdata.email, website: userdata.website, contact: userdata.contact , linkdin:userdata.linkdin , address:userdata.address,matric1:userdata.matric1, matric2: userdata.master2, bachin:userdata.bachin ,bach1:userdata.bach1, bach2:userdata.bach2,masterin:userdata.masterin, master1:userdata.master1, master2:userdata.master2 , lang1:userdata.lang1, lang1p:userdata.lang1p,lang2:userdata.lang2, lang2p:userdata.lang2p, lang3:userdata.lang3, lang3p:userdata.lang3p, profile:userdata.profile, company1:userdata.company1, role1:userdata.role1, abexp1:userdata.abexp1, company2:userdata.company2, company3:userdata.company3, role2:userdata.role2, role3:userdata.role3, date1:userdata.date1,date2:userdata.date2, date3:userdata.date3, date4:userdata.date4, abexp2:userdata.abexp2,abexp3:userdata.abexp3, skill1:userdata.skill1, skill2:userdata.skill2,skill3:userdata.skill3, skill4:userdata.skill4, percent1:userdata.percent1,percent2:userdata.percent2, percent3:userdata.percent3, percent4:userdata.percent4, hobby1:userdata.hobby1,hobby2:userdata.hobby2, hobby3:userdata.hobby3, hobby4:userdata.hobby4, image:userdata.image} })
  }

  const pdfRef = useRef()

  const downloadPDF = () => {
    const input = pdfRef.current
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4', true)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      const imgX = (pdfWidth - imgWidth * ratio) / 2
      const imgY = 30
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
      pdf.save('invoice.pdf')
    }).catch(error => console.log("failed"))
  }
  let div1style = {
    fontSize: '30px',
    color: 'white',
    backgroundColor: '#0d6efd',
    border: '#0d6efd',
    height: '50px'
  }
  let div2style = {
    backgroundColor: '#0d6efd',
    color: 'black',
    border: '#0d6efd',
    height: '30px'
  }

  let div3style = {
    backgroundColor: '#0d6efd',
    color: 'white',
    border: '#0d6efd',
    width: '800px',
    height: '35px'
  }

  let emails = {
    backgroundColor: '#343a40',
  }

  let web = {
    backgroundColor: '#343a40',
  }


  // let bintro = {

  // }

  return (
    <>
      <div className="container mt-5" ref={pdfRef}>
        <h2 className="mb-3">Personal Information</h2>
        <form >
          <div className="mb-3">
            {console.log("User", userdata)}
            <label className="form-label" >
              Enter Name
            </label>
            <input className="form-control" id="name" required name='name' value={userdata.name} type='text' onChange={handledata} />
          </div>
          <div className="mb-3">
            <label className="form-label"  >
              Enter Role
            </label>
            <input className="form-control" type="text" name='role' value={userdata.role} id="role" onChange={handledata} />
          </div>
          <div>
          <label className="form-label"  >
              Enter Profile Picture
            </label>
            <input type = 'file' name= 'image'  value = {userdata.image} onChange={handledata}></input>
            {/* <button onClick={handledata}> Submit </button> */}
          </div>
          {/* <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Enter brief about Yourself
            </label>
            <textarea className="form-control" id="message"  type = 'text' name='bintro' value={userdata.bintro}/>
            <input className="form-control" type="text" name='bintro' value={userdata.bintro} id="role" onChange={handledata} />
          </div> */}
          <h2 className="mb-3">Contact Details</h2>
          <div>
            <label >Email :  </label>
            <input type="email" id="email" placeholder="Enter email" name="email" value={userdata.email} onChange={handledata} />
            <label >website:</label>
            <input type="text" placeholder="Enter website" name="website" value={userdata.web} onChange={handledata} />
            <label >Phone No:</label>
            <input type="text" placeholder="Enter Phone Number" name="contact" value={userdata.contact} onChange={handledata} /><br></br><br></br>
            <label >linkdin:</label>
            <input type="text" placeholder="Enter linkdin link" name="linkdin" value={userdata.linkdin} onChange={handledata} />
            <label >Adress</label>
            <input type="text" placeholder="Enter adress" name="address" value={userdata.address} onChange={handledata} />
            <br></br>
            <br></br>

          </div>

          <h2 className="mb-3">Educational Details </h2>
          <div>
            <label >Matriculational  :  </label>
            <input type="email" id="email" placeholder="Enter year" name="matric1" value={userdata.matric1} onChange={handledata} /><h7>to</h7>
            <input type="email" id="email" placeholder="Enter year" name="matric2" value={userdata.matric2} onChange={handledata} /><br></br><br></br>
            <label >Bachelors In:</label>
            <input type="text" placeholder="Enter course" name="bachin" value={userdata.bachin} onChange={handledata} /><h7>from</h7>
            <input type="text" placeholder="Enter year" name="bach1" value={userdata.bach1} onChange={handledata} /><h7>to</h7>
            <input type="text" placeholder="Enter year" name="bach2" value={userdata.bach2} onChange={handledata} /><br></br><br></br>
            <label >Masters:</label>
            <input type="text" placeholder="Enter course" name="masterin" value={userdata.masterin} onChange={handledata} /><h7>from</h7>
            <input type="text" placeholder="Enter year" name="master1" value={userdata.master1} onChange={handledata} /><h7>to</h7>
            <input type="text" placeholder="Enter year" name="master2" value={userdata.master2} onChange={handledata} /><br></br><br></br>

          </div> 
          <h2 className="mb-3">Languages</h2>
          <div>
          <label >Language1 : </label>
            <input type="email" id="email" placeholder="Enter Language" name="lang1" value={userdata.lang1} onChange={handledata}/><h7>percentage:</h7>
            <input type="email" id="email" placeholder="Enter in percentage" name="lang1p" value={userdata.lang1p} onChange={handledata}/><br></br>
          <label >Language2 : </label>
            <input type="email" id="email" placeholder="Enter Language" name="lang2" value={userdata.lang2} onChange={handledata}/><h7>percentage:</h7>
            <input type="email" id="email" placeholder="Enter in percentage" name="lang2p" value={userdata.lang2p} onChange={handledata}/><br></br>
          <label >Language3 : </label>
            <input type="email" id="email" placeholder="Enter Language" name="lang3" value={userdata.lang3} onChange={handledata}/><h7>percentage:</h7>
            <input type="email" id="email" placeholder="Enter in percentage" name="lang3p" value={userdata.lang3p} onChange={handledata}/><br></br>
          </div>

          <h2>Profile</h2>
          <textarea id="w3review" name="profile" value={userdata.profile} rows="4" cols="100" placeholder='Enter brief about yourself' onChange={handledata}></textarea> <br></br><br></br>
          <h2>Experience</h2><br></br>
          <div>
            <label >Currently Working : </label>
            <input type="text" id="email" placeholder="" name="company1" value={userdata.company1} onChange={handledata}/>
            <label >Enter Role:</label>
            <input type="text" id="email" placeholder="Enter role" name="role1" value={userdata.role1} onChange={handledata}/>
            <textarea id="w3review" name="abexp1" value={userdata.abexp1} rows="2" cols="100" placeholder='Enter your experience' onChange={handledata}></textarea> <br></br><br></br>

            <label >Recently worked: </label>
            <input type="text" id="email" placeholder="Enter company name" name="company2" value={userdata.company2} onChange={handledata}/>
            <label >Enter Role</label>
            <input type="text" id="email" placeholder="Enter role" name="role2" value={userdata.role2} onChange={handledata}/><br></br><h7>from</h7>
            <input type="text" id="email" placeholder="Enter date" name="date1" value={userdata.date1} onChange={handledata}/><h7>to</h7>
            <input type="text" id="email" placeholder="Enter date" name="date2" value={userdata.date2} onChange={handledata}/><br></br><br></br>
            <textarea id="w3review" name="abexp2" value={userdata.abexp2} rows="2" cols="100" placeholder='Enter your experience' onChange={handledata}></textarea> <br></br><br></br>

            <label >Recently worked: </label>
            <input type="text" id="email" placeholder="Enter company name" name="company3" value={userdata.company3} onChange={handledata}/>
            <label >Enter Role</label>
            <input type="text" id="email" placeholder="Enter role" name="role3" value={userdata.role3} onChange={handledata}/><br></br><h7>from</h7>
            <input type="text" id="email" placeholder="Enter date" name="date3" value={userdata.date3} onChange={handledata}/><h7>to</h7>
            <input type="text" id="email" placeholder="Enter date" name="date4" value={userdata.date4} onChange={handledata}/><br></br><br></br>
            <textarea id="w3review" name="abexp3" value={userdata.abexp3} rows="2" cols="100" placeholder='Enter your experience' onChange={handledata}></textarea> <br></br><br></br>
          </div>
          
          <h2>Experience</h2><br></br>
          <div>
            <label >Enter Skill 1 :</label>
            <input type="text" id="email" placeholder="Enter Skill" name="skill1" value={userdata.skill1} onChange={handledata}/>
            <label >Enter percentage :</label>
            <input type="text" id="email" placeholder="Enter % out of 100" name="percent1" value={userdata.percent1} onChange={handledata}/><br></br>

            <label >Enter Skill 2 :</label>
            <input type="text" id="email" placeholder="Enter Skill" name="skill2" value={userdata.skill2} onChange={handledata}/>
            <label >Enter percentage :</label>
            <input type="text" id="email" placeholder="Enter % out of 100" name="percent2" value={userdata.percent2} onChange={handledata}/><br></br>

            <label >Enter Skill 3 :</label>
            <input type="text" id="email" placeholder="Enter Skill" name="skill3" value={userdata.skill3} onChange={handledata}/>
            <label >Enter percentage :</label>
            <input type="text" id="email" placeholder="Enter % out of 100" name="percent3" value={userdata.percent3} onChange={handledata}/><br></br>

            <label >Enter Skill 4 :</label>
            <input type="text" id="email" placeholder="Enter Skil" name="skill4" value={userdata.skill4} onChange={handledata}/>
            <label >Enter percentage :</label>
            <input type="text" id="email" placeholder="Enter % out of 100" name="percent4" value={userdata.percent4} onChange={handledata}/>
          </div>

          <br></br><h2>Interest</h2><br></br>
          <div>
            <label >Enter Hobby 1 :</label>
            <input type="text" id="email" placeholder="Enter Hobby" name="hobby1" value={userdata.hobby1} onChange={handledata}/><br></br>
            <label >Enter Hobby 2 :</label>
            <input type="text" id="email" placeholder="Enter Hobby" name="hobby2" value={userdata.hobby2} onChange={handledata}/><br></br>
            <label >Enter Hobby 3 :</label>
            <input type="text" id="email" placeholder="Enter Hobby" name="hobby3" value={userdata.hobby3} onChange={handledata}/><br></br>
            <label >Enter Hobby 4 :</label>
            <input type="text" id="email" placeholder="Enter Hobby" name="hobby4" value={userdata.hobby4} onChange={handledata}/><br></br>
          </div>


          <button className="btn btn-danger" type="submit" onClick={downloadPDF}>
            Download
          </button>
          <br></br>
          <br></br>
          <button className="btn btn-danger" type="submit" onClick={gotoPreview}>
            Preview
          </button>
        </form>
        {/* <h3>Name: </h3> */}
      </div>

      
      










      {/* <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous"></link>
        <header class="bg-primary bg-gradient text-white py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-3 text-left text-md-center mb-3">
                <img class="rounded-circle img-fluid" src="https://i.pravatar.cc/175?img=32" alt="Profile Photo" />
              </div>
              <div class="col-md-9"  >
                {console.log("UserData",userdata)}
                <h6>Enter Name</h6>
                <input type="text" id="fname" name="name" style={div1style}  value={userdata.name} onChange={handledata}/>
                <h1>Laura Collins</h1>
                <h5>Enter preffered role</h5>
                <input type="text" id="fname" name="role" style={div2style}  value={userdata.role} onChange={handledata}/>  <br></br>
                <h6>Enter brief about Yourself</h6>
                <textarea style={div3style} name='bintro' value={userdata.bintro} onChange={handledata}></textarea>
                <p class="border-top pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio lacus, sollicitudin in dolor at, consequat volutpat ante. Integer quis consequat turpis, quis porta orci. Proin tincidunt volutpat faucibus. Suspendisse ac nisl purus suspendisse eleifend interdum orci non pharetra. </p>
              </div>
            </div>
          </div>
        </header>
      </div>
      <nav class="bg-dark text-white-50 mb-5">
        <div class="container">
          <div class="row p-3">
            <div class="col-md pb-2 pb-md-0">
              <svg width="1em" height="1.5em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
              </svg>

              <input type="text" id="fname" name="mail" style={emails} value={userdata.mail} onChange={handledata}/>

              <a href="#" class="text-white ml-2">lcollins@email.com</a>
            </div>
            <div class="col-md text-md-center pb-2 pb-md-0">
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-globe" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4H2.255a7.025 7.025 0 0 1 3.072-2.472 6.7 6.7 0 0 0-.597.933c-.247.464-.462.98-.64 1.539zm-.582 3.5h-2.49c.062-.89.291-1.733.656-2.5H3.82a13.652 13.652 0 0 0-.312 2.5zM4.847 5H7.5v2.5H4.51A12.5 12.5 0 0 1 4.846 5zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5H7.5V11H4.847a12.5 12.5 0 0 1-.338-2.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12H7.5v2.923c-.67-.204-1.335-.82-1.887-1.855A7.97 7.97 0 0 1 5.145 12zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11H1.674a6.958 6.958 0 0 1-.656-2.5h2.49c.03.877.138 1.718.312 2.5zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12h2.355a7.967 7.967 0 0 1-.468 1.068c-.552 1.035-1.218 1.65-1.887 1.855V12zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5h-2.49A13.65 13.65 0 0 0 12.18 5h2.146c.365.767.594 1.61.656 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4H8.5V1.077c.67.204 1.335.82 1.887 1.855.173.324.33.682.468 1.068z" />
              </svg>
              <input type="text" id="fname" name="web" style={web} value={userdata.web} onChange={handledata} />
              <a href="#" class="text-white ml-2">www.lauracollins.com</a>
            </div>
            <div class="col-md text-md-right">
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z" />
              </svg>
              <input type="text" id="fname" name="contact" style={contact} value={userdata.contact} onChange={handledata}/>
              <a href="#" class="text-white ml-2">+12 3456 7890</a>
            </div>
          </div>
        </div>
      </nav>

      <h2 class="mb-5">Work Experience</h2>
      <ul>
        <li>
          <h6 class="text-primary">Senior Web Developer / Digital Agency 2016-2020</h6>
          <p>Phasellus et tellus iaculis, interdum augue vel, luctus nulla. Aenean viverra, magna a ultricies elementum, dui mi tristique ligula, non euismod leo mauris ac metus.</p>
        </li>
        <li>
          <h6 class="text-primary">Web Developer / Big Firm 2010-2015</h6>
          <p>Mauris volutpat, ex condimentum fringilla imperdiet, nulla turpis semper diam, ac semper risus urna quis libero. Fusce non nunc quam. Ut vulputate, magna eget molestie luctus, elit est posuere lorem, quis dapibus dolor felis id mi.</p>
        </li>
        <li>
          <h6 class="text-primary">Junior Web Developer / Websites 'R' Us 2004-2009</h6>
          <p>Sed eu turpis placerat, posuere odio a, viverra velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </li>
        <div>
        <button className="btn btn-danger" type="submit" onClick={gotoPreview}>
          Preview
        </button>
        </div>
      </ul>




      <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous" />
        <h1>Preview</h1>
        <header class="bg-primary bg-gradient text-white py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-3 text-left text-md-center mb-3">
                <img class="rounded-circle img-fluid" src="https://i.pravatar.cc/175?img=32" alt="Profile Photo" />
              </div>
              <div class="col-md-9">
                <h1>Name: {userdata.name}</h1>
                <h5>role: {userdata.role}</h5>
                <p class="border-top pt-3">{userdata.bintro}</p>
              </div>
            </div>
          </div>
        </header>
      </div> */}


    </>
  );
};

export default Resume3;
