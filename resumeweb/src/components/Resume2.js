import React, { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "./Resume2.css";
import ReactDOM from "react-dom/client";
import axios from "axios";
import MayurPic from "./MayurPic.jpg";
const ContactForm = () => {
  const [userinfo, setuserinfo] = useState({
    name: "",
    email: "",
    address: "",
    contactno: "",
    website: "",
    facebook: "",
    twitter: "",
    linkdin: "",
  });

  let name, value;
  const handledata = (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;
    setuserinfo({ ...userinfo, [name]: value });
  };

  const [inputfield, setInputfield] = useState([{ skills: "" }]);

  const [experience, setexperience] = useState([{ experience1: "" }]);

  const [education, seteducation] = useState([{ education1: "" }]);

  const [certiificate, setcertificate] = useState([{ certiificate1: "" }]);

  const [hobby, sethobby] = useState([{ hobby1: "" }]);

  const [language, setlanguage] = useState([{ language1: "" }]);

  const [showButton, setShowButton] = useState(false);
  const inputRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (inputRef.current && !inputRef.current.contains(event.target)) {
  //       setShowButton(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  const handleInputClick = () => {
    setShowButton(true);
  };

  // const [formStatus, setFormStatus] = React.useState('Send')
  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   setFormStatus('Submitting...')
  //   const { name, email, message } = e.target.elements
  //   let conFom = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   }
  //   console.log(conFom)
  // }

  const pdfRef = useRef();

  const downloadPDF = () => {
    const input = pdfRef.current;
    const pdfWidth = 210; // Width of the PDF page in millimeters (A4 size: 210mm)
    const pdfHeight = 350; // Height of the PDF page in millimeters (A4 size: 297mm)
    const targetImageWidth = 170; // Desired width of the image in millimeters

    html2canvas(input, { scale: 3 })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const imgWidth = targetImageWidth;
        const imgHeight = (canvas.height / canvas.width) * imgWidth;

        const pdf = new jsPDF("p", "mm", "a4", true);
        const imgX = (pdfWidth - imgWidth) / 2;
        const imgY = 30;

        pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth, imgHeight);
        pdf.save("invoice.pdf");
      })
      .catch((error) => console.log("failed"));
  };
  // let name, value
  // const handlechange = (e) => {
  //   // console.log(e)
  //   name = e.target.name
  //   value = e.target.value
  //   setpf({ ...pinfo, [name]: value })
  // }

  let index;
  const handlechangeinput = (index, event) => {
    const values = [...inputfield];
    event.preventDefault();
    values[index][event.target.name] = event.target.value;
    setInputfield(values);
    
  };

  const handleexperience = (index, event) => {
    const values = [...experience];
    event.preventDefault();
    values[index][event.target.name] = event.target.value;
    setexperience(values);
    
  };

  const handleeducation = (index, event) => {
    const values = [...education];
    event.preventDefault();
    values[index][event.target.name] = event.target.value;
    seteducation(values);
    
  };

  const handlcertificate = (index, event) => {
    event.preventDefault();
    const values = [...certiificate];
    values[index][event.target.name] = event.target.value;
    setcertificate(values);
    // console.log(values)
  };

  const handlelanguage = (index, event) => {
    const values = [...language];
    event.preventDefault();
    values[index][event.target.name] = event.target.value;
    setlanguage(values);
    // console.log(values)
  };

  const handlehobby = (index, event) => {
    const values = [...hobby];
    event.preventDefault();
    values[index][event.target.name] = event.target.value;
    sethobby(values);
    // console.log(values)
  };

  

  // const handlesubmit = (e) =>{
  //   e.preventDefault()
  // console.log("Inputfield", inputfield)
  // }

  const handleaddfield = (e) => {
    setInputfield([...inputfield, { skills: "" }]);
  };

  const handleaddexperience = (e) => {
    setexperience([...experience, { experience1: "" }]);
  };

  const handleaddeducation = (e) => {
    seteducation([...education, { education1: "" }]);
  };

  const handleaddcertificate = (e) => {
    setcertificate([...certiificate, { certiificate1: "" }]);
  };

  const handleaddhobby = (e) => {
    sethobby([...hobby, { hobby1: "" }]);
  };

  const handleaddlanguage = (e) => {
    setlanguage([...language, { language1: "" }]);
  };

  const handledeletefield = (index) => {
    const values = [...inputfield];
    values.splice(index, 1);
    setInputfield(values);
  };

  const handledeleteexperience = (index) => {
    const values = [...experience];
    values.splice(index, 1);
    setexperience(values);
  };

  const handledeleteeducation = (index) => {
    const values = [...education];
    values.splice(index, 1);
    seteducation(values);
  };

  const handledeletehobby = (index) => {
    const values = [...hobby];
    values.splice(index, 1);
    sethobby(values);
  };

  
  const handledeletecertificate = (index) => {
    const values = [...certiificate];
    values.splice(index, 1);
    setcertificate(values);
  };

  const handledeletelanguage = (index) => {
    const values = [...language];
    values.splice(index, 1);
    setlanguage(values);
  };


  const SubmitData = async () => {
    const data = {
      skills: inputfield,
      education: education,
      experience: experience,
      hobby: hobby,
      userinfo: userinfo,
    };

    const res = await fetch("/resumewala", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        skills: inputfield,
      }),
    });
    console.log(res.body);
    const result = res.json();

    // if(res.status === 400 || !data)
    // {
    //   window.alert("Invalid Credentials")

    // }else{
    //   // window.alert("Login Succesfull")
    //   console.log("Login succesfull")
    //   // navigate("/Resume3")
    // }
  };

  // axios.post(
  //   `http://localhost:5000/resumewala`,
  //   data
  // );
  // const res = await fetch("/resumewala", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   params:"ganesh",
  //   body:
  //     JSON.stringify(
  //       {name:"name"}
  //       ),
  //   // body:JSON.stringify(
  //   // :{}  userinfo.name        )
  // });
  //   const result = res.json();

  //   if (res.status === 400 || !result) {
  //     window.alert("Invalid Credentials");
  //   } else {
  //     // window.alert("Login Succesfull")
  //     console.log("Login succesfull");
  //     // navigate("/Resume3");
  //   }
  //   console.log(data);

  return (
    <>
      <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div class="resume" ref={pdfRef}>
        <div class="resume_left">
          <div class="resume_profile">
            <img src={MayurPic} className="resume2img" />
            {/* <img src= {MayurPic} style={imagereduce} /> 	 */}
            {/* src="https://i.imgur.com/eCijVBe.png" alt="profile_pic" */}
          </div>
          <div class="resume_content">
            <div class="resume_item resume_info">
              <div class="titleprofile">
                {/* <p class="bold">stephen colbert</p> */}
                <input
                  type="text"
                  name="name"
                  value={userinfo.name}
                  placeholder="Enter Your Name"
                  class="input1"
                  onChange={handledata}
                />
                <p class="regular">Contact Details</p>
              </div>
              <ul>
                <li>
                  <div class="icon">
                    <i class="fas fa-map-signs"></i>
                  </div>
                  <div class="data">
                    <input
                      type="text"
                      name="address"
                      value={userinfo.address}
                      placeholder="Enter address"
                      class="address"
                      onChange={handledata}
                    />
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="fas fa-mobile-alt"></i>
                  </div>
                  <div class="data">
                    <input
                      type="text"
                      name="contactno"
                      value={userinfo.contactno}
                      placeholder="Enter contact number"
                      class="address"
                      onChange={handledata}
                    />
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="data">
                    <input
                      type="text"
                      name="email"
                      value={userinfo.email}
                      placeholder="Enter Email"
                      class="address"
                      onChange={handledata}
                    />
                  </div>
                </li>
              </ul>
              
            </div>
           
            <form>
              <p class="bold">skill's</p>
              {inputfield.map((inputfield, index) => (
                <div key={index} class="skill_name">
                  {showButton && (
                    <i
                      id="button"
                      class="fa fa-plus-circle"
                      aria-hidden="true"
                      onClick={() => handleaddfield()}
                    ></i>
                  )}
                  {showButton && (
                    <i
                      id="button"
                      class="fa fa-trash"
                      aria-hidden="true"
                      onClick={() => handledeletefield(index)}
                    ></i>
                  )}
                  <input
                    id="button"
                    type="text"
                    class="skill1"
                    placeholder="Enter skill"
                    name="skills"
                    value={inputfield.skills}
                    ref={inputRef}
                    onChange={(event) => handlechangeinput(index, event)}
                    onClick={handleInputClick}
                  ></input>
                </div>
              ))}
            </form>
            {/* <div class="title">
              </div>
              <ul>
                <li>
                  <div class="skill_progress">
                    <span style="width: 80%;"></span> 
                  </div>
                  <div class="skill_per">80%</div>
                </li>
                <li>
                  <div class="skill_name">
                    CSS
                  </div>
                  <div class="skill_progress">
                    <span style="width: 70%;"></span>
                  </div>
                  <div class="skill_per">70%</div>
                </li>
                <li>
                  <div class="skill_name">
                    SASS
                  </div>
                  <div class="skill_progress">
                    <span style="width: 90%;"></span>
                  </div>
                  <div class="skill_per">90%</div>
                </li>
                <li>
                  <div class="skill_name">
                    JS
                  </div>
                  <div class="skill_progress">
                    <span style="width: 60%;"></span>
                  </div>
                  <div class="skill_per">60%</div>
                </li>
                <li>
                  <div class="skill_name">
                    JQUERY
                  </div>
                  <div class="skill_progress">
                    <span style="width: 88%;"></span>
                  </div>
                  <div class="skill_per">88%</div>
                </li>
              </ul>
            </div>
               */}

            <div class="resume_item resume_social">
              <div class="titleprofile">
                <p class="bold">Social</p>
              </div>
              <ul>
                <li>
                  <div class="icon">
                    <i class="fab fa-facebook-square"></i>
                  </div>
                  <div class="data">
                    <p class="semi-bold">Facebook</p>
                    <input
                      type="text"
                      name="facebook"
                      value={userinfo.facebook}
                      placeholder="Enter Facebook Link"
                      class="address"
                      onChange={handledata}
                    />
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="fab fa-twitter-square"></i>
                  </div>
                  <div class="data">
                    <p class="semi-bold">Github</p>
                    <input
                      type="text"
                      name="twitter"
                      value={userinfo.twitter}
                      placeholder="Enter Github Link"
                      class="address"
                      onChange={handledata}
                    />
                  </div>
                </li>
                {/* <li>
                  <div class="icon">
                    <i class="fab fa-youtube"></i>
                  </div>
                  <div class="data">
                    <p class="semi-bold">Youtube</p>
                    <input type="text" placeholder="Enter contact number" class = 'address'/>
                  </div>
                </li> */}
                <li>
                  <div class="icon">
                    <i class="fab fa-linkedin"></i>
                  </div>
                  <div class="data">
                    <p class="semi-bold">Linkedin</p>
                    <input
                      type="text"
                      name="linkdin"
                      value={userinfo.linkdin}
                      placeholder="Enter Linkdin Link"
                      class="address"
                      onChange={handledata}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="resume_right">
          <div class="resume_item_resume_about">
            <div class="titleprofile">
              <p class="bold">Profile</p>
            </div>
            <textarea
              class="textarea1"
              cols={80}
              placeholder="enter brief about yourself"
            ></textarea>
          </div>

          <div class="resume_item resume_work">
            <form>
              <p class="bold">Education</p>
              {education.map((education, index) => (
                <div key={index} class="skill_name">
                  {showButton && (
                    <i
                      id="button"
                      class="fa fa-plus-circle"
                      aria-hidden="true"
                      onClick={() => handleaddeducation()}
                    ></i>
                  )}
                  {showButton && (
                    <i
                      id="button"
                      class="fa fa-trash"
                      aria-hidden="true"
                      onClick={() => handledeleteeducation(index)}
                    ></i>
                  )}
                  <br></br>
                  <input
                    id="button"
                    type="text"
                    class="experience1"
                    placeholder="Enter Date"
                    name="education1"
                    value={education.education1}
                    ref={inputRef}
                    onChange={(event) => handleeducation(index, event)}
                    onClick={handleInputClick}
                  ></input>
                  <br></br>
                  <input
                    id="button"
                    type="text"
                    class="role1"
                    placeholder="Enter eduaction"
                    name="education2"
                    value={education.education2}
                    ref={inputRef}
                    onChange={(event) => handleeducation(index, event)}
                    onClick={handleInputClick}
                  ></input>
                  <br></br>
                  <input
                    id="button"
                    type="text"
                    class="role1"
                    placeholder="Enter institute"
                    name="education3"
                    value={education.education3}
                    ref={inputRef}
                    onChange={(event) => handleeducation(index, event)}
                    onClick={handleInputClick}
                  ></input>
                  <br></br>
                </div>
              ))}
            </form>
          </div>

          <div class="resume_item resume_work">
            <form>
              <p class="bold">Work Experience</p>
              {experience.map((experience, index) => (
                <div key={index} class="skill_name">
                  {showButton && (
                    <i
                      id="button"
                      class="fa fa-plus-circle"
                      aria-hidden="true"
                      onClick={() => handleaddexperience()}
                    ></i>
                  )}
                  {showButton && (
                    <i
                      id="button"
                      class="fa fa-trash"
                      aria-hidden="true"
                      onClick={() => handledeleteexperience(index)}
                    ></i>
                  )}
                  <br></br>
                  <input
                    id="button"
                    type="text"
                    class="experience1"
                    placeholder="Enter company"
                    name="experience1"
                    value={experience.experience1}
                    ref={inputRef}
                    onChange={(event) => handleexperience(index, event)}
                    onClick={handleInputClick}
                  ></input>
                  <br></br>

                  <input
                    id="button"
                    type="text"
                    class="role1"
                    placeholder="Enter Role"
                    name="role1"
                    value={experience.role1}
                    ref={inputRef}
                    onChange={(event) => handleexperience(index, event)}
                    onClick={handleInputClick}
                  ></input>
                  <br></br>
                  <textarea
                    class="textarea2"
                    cols={80}
                    name="aboutexp"
                    value={experience.aboutexp1}
                    placeholder="enter brief about experience"
                  ></textarea>
                </div>
              ))}
            </form>
          </div>

          <div class="resume_item resume_work">
            <form>
              <p class="bold">Certifications</p>
              {certiificate.map((certiificate, index) => (
                <div key={index} class="skill_name">
                  {showButton && (
                    <i
                      id="button"
                      class="fa fa-plus-circle"
                      aria-hidden="true"
                      onClick={() => handleaddcertificate()}
                    ></i>
                  )}
                  {showButton && (
                    <i
                      id="button"
                      class="fa fa-trash"
                      aria-hidden="true"
                      onClick={() => handledeletecertificate(index)}
                    ></i>
                  )}
                  <br></br>
                  <input
                    id="button"
                    type="text"
                    class="experience1"
                    placeholder="Enter course or certification"
                    name="certificate1"
                    value={certiificate.certiificate}
                    ref={inputRef}
                    onChange={(event) => handlcertificate(index, event)}
                    onClick={handleInputClick}
                  ></input>
                  <br></br>

                  <input
                    id="button"
                    type="text"
                    class="role1"
                    placeholder="Enter Link"
                    name="role1"
                    value={certiificate.link1}
                    ref={inputRef}
                    onChange={(event) => handlcertificate(index, event)}
                    onClick={handleInputClick}
                  ></input>
                  <br></br>
                </div>
              ))}
            </form>
          </div>

          <div class="resume_item resume_work">
            <form>
              <p class="bold">Language Profiency</p>
              {language.map((language, index) => (
                <div key={index} class="skill_name">
                  {showButton && (
                    <i
                      id="button"
                      class="fa fa-plus-circle"
                      aria-hidden="true"
                      onClick={() => handleaddlanguage()}
                    ></i>
                  )}
                  {showButton && (
                    <i
                      id="button"
                      class="fa fa-trash"
                      aria-hidden="true"
                      onClick={() => handledeletelanguage(index)}
                    ></i>
                  )}
                  <br></br>
                  <input
                    id="button"
                    type="text"
                    class="experience1"
                    placeholder="Enter languages"
                    name="hobby1"
                    value={language.hobby1}
                    ref={inputRef}
                    onChange={(event) => handlelanguage(index, event)}
                    onClick={handleInputClick}
                  ></input>
                  <br></br>
                  {/* <input id = 'button' type='text' class = 'role1' placeholder='Enter eduaction' name='' value={education.education1} ref={inputRef} onChange={event => handleeducation(index,event)} onClick={handleInputClick} ></input><br></br>
                  <input id = 'button' type='text' class = 'role1' placeholder='Enter institute' name='role1' value={education.education1} ref={inputRef} onChange={event => handleeducation(index,event)} onClick={handleInputClick} ></input><br></br> */}
                </div>
              ))}
            </form>
          </div>


          <div class="resume_item resume_work">
            <form>
              <p class="bold">Hobby</p>
              {hobby.map((hobby, index) => (
                <div key={index} class="skill_name">
                  {showButton && (
                    <i
                      id="button"
                      class="fa fa-plus-circle"
                      aria-hidden="true"
                      onClick={() => handleaddhobby()}
                    ></i>
                  )}
                  {showButton && (
                    <i
                      id="button"
                      class="fa fa-trash"
                      aria-hidden="true"
                      onClick={() => handledeletehobby(index)}
                    ></i>
                  )}
                  <br></br>
                  <input
                    id="button"
                    type="text"
                    class="experience1"
                    placeholder="Enter Hobby"
                    name="hobby1"
                    value={hobby.hobby1}
                    ref={inputRef}
                    onChange={(event) => handlehobby(index, event)}
                    onClick={handleInputClick}
                  ></input>
                  <br></br>
                  {/* <input id = 'button' type='text' class = 'role1' placeholder='Enter eduaction' name='' value={education.education1} ref={inputRef} onChange={event => handleeducation(index,event)} onClick={handleInputClick} ></input><br></br>
                  <input id = 'button' type='text' class = 'role1' placeholder='Enter institute' name='role1' value={education.education1} ref={inputRef} onChange={event => handleeducation(index,event)} onClick={handleInputClick} ></input><br></br> */}
                </div>
              ))}
            </form>
          </div>

                

          {/* <div class="resume_item resume_hobby">
            <div class="title">
              <p class="bold">Hobby</p>
            </div>
            <ul>
              <li><i class="fas fa-book"></i></li>
              <li><i class="fas fa-gamepad"></i></li>
              <li><i class="fas fa-music"></i></li>
              <li><i class="fab fa-pagelines"></i></li>
            </ul>
          </div> */}
        </div>
      </div>

      <button className="btn btn-danger" type="submit" onClick={downloadPDF}>
        Download
      </button>
      {/* <button className="btn btn-danger" type="submit" onClick={SubmitData}>
        Submit
      </button> */}
    </>
  );
};
export default ContactForm;
