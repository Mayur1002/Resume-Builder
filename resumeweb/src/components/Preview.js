import React, { useRef } from 'react'
import Resume3 from './Resume3'
import { useLocation } from "react-router-dom";
import "./Preview.css"
import MayurPic from './MayurPic.jpg';
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
function Preview() {

  const pdfRef = useRef()

  // const downloadPDF = () => {
  //   const input = pdfRef.current
  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png')
  //     const pdf = new jsPDF('p', 'mm', 'a4', true)
  //     const pdfWidth = pdf.internal.pageSize.getWidth()
  //     const pdfHeight = pdf.internal.pageSize.getHeight()
  //     const imgWidth = canvas.width
  //     const imgHeight = canvas.height
  //     const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
  //     const imgX = (pdfWidth - imgWidth * ratio) / 2
  //     const imgY = 30
  //     pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
  //     pdf.save('invoice.pdf')
  //   }).catch(error => console.log("failed"))
  // }

  const downloadPDF = () => {
    const input = pdfRef.current;
    const pdfWidth = 210; // Width of the PDF page in millimeters (A4 size: 210mm)
    const pdfHeight = 297; // Height of the PDF page in millimeters (A4 size: 297mm)
    const targetImageWidth = 200; // Desired width of the image in millimeters

    html2canvas(input, { scale: 1 }).then((canvas) => {
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


  const location = useLocation();
  console.log(location.state)

  let imagereduce = {
    width: "200px",
    height: "200px"
  }
  let language1 = {
    width: `${location.state.lang1p}%`
  }
  let language2 = {
    width: `${location.state.lang2p}%`
  }

  let language3 = {
    width: `${location.state.lang3p}%`
  }
  let skillsPecent1 = {
    width: `${location.state.percent1}%`
  }
  let skillsPecent2 = {
    width: `${location.state.percent2}%`
  }
  let skillsPecent3 = {
    width: `${location.state.percent3}%`
  }
  let skillsPecent4 = {
    width: `${location.state.percent4}%`
  }

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <body>
        <div class='newcontainer' ref={pdfRef}>
          <div class='left_Side'>
            <div class='profileText'>
              <div class='imgBx'>
                <img src= {MayurPic} style={imagereduce} />
              </div>
              <h2 >{location.state.name}<br /><span>{location.state.role}</span></h2>
            </div>

            <div class='contactInfo'>
              <h3 class='titlecontact'>Contact Info</h3>
              <ul>
                <li>
                  <span class='icon'><i class="fa fa-phone" aria-hidden="true"></i></span>
                  <span class='text'>{location.state.contact}</span>
                </li>
                <li>
                  <span class='icon'><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                  <span class='text'>{location.state.email}</span>
                </li>
                <li>
                  <span class='icon'><i class="fa fa-globe" aria-hidden="true"></i></span>
                  <span class='text'>{location.state.website}</span>
                </li>
                <li>
                  <span class='icon'><i class="fa fa-linkedin" aria-hidden="true"></i></span>
                  <span class='text'>{location.state.linkdin}</span>
                </li>
                <li>
                  <span class='icon'><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                  <span class='text'>raigad, maharashtra ,india</span>
                </li>
              </ul>
            </div>

            <div class='contactInfo education'>
              <h3 class='titlecontact'>Educaional </h3>
              <ul>
                <li>
                  <h5>{location.state.master1}- {location.state.master2}</h5>
                  <h4>{location.state.masterin}</h4>
                  <h4>University Name</h4>
                </li><li>
                  <h5>{location.state.bach1} - {location.state.bach2}</h5>
                  <h4>{location.state.bachin} </h4>
                  <h4>University Name</h4>
                </li>
                <li>
                  <h5>{location.state.matric1}- {location.state.matric2}</h5>
                  <h4>Matriculation </h4>
                  <h4>University Name</h4>
                </li>
              </ul>
            </div>

            <div class='contactInfo languageresume1'>
              <h3 class='contactinfo'>Languages</h3>
              <ul>
                <li>
                  <span class='text'>{location.state.lang1}</span>
                  <span class='percent'>
                    <div style={language1}></div>
                  </span>
                </li>
                <li>
                  <span class='text'>{location.state.lang2}</span>
                  <span class='percent'>
                    <div style={language2}></div>
                  </span>
                </li>
                <li>
                  <span class='text'>{location.state.lang3}</span>
                  <span class='percent'>
                    <div style={language3}></div>
                  </span>
                </li>
              </ul>
            </div>


          </div>
          <div class='right_Side'>
            <div class='about'>
              <h2 class='title2'>Profile</h2>
              <p>{location.state.profile}</p>
            </div>

            <div class='about'>
              <h2 class='title2'>Experience</h2>
              <div class='box'>
                <div class='year_company'>
                  <h5>present</h5>
                  <h5>{location.state.company1}</h5><br></br>
                </div>
                <div class='text'>
                  <br></br><h4>{location.state.role1}</h4>
                  <p>{location.state.abexp1}</p>
                </div>
              </div>


              <div class='box'>
                <div class='year_company'>
                  <h5>{location.state.date1} - {location.state.date2}</h5>
                  <h5>{location.state.company2}</h5>
                </div>
                <div class='text'>
                  <h4>{location.state.role2}</h4>
                  <p>{location.state.abexp2}</p>
                </div>
              </div>

              <div class='box'>
                <div class='year_company'>
                  <h5>{location.state.date3}- {location.state.date4}</h5>
                  <h5>{location.state.company3}</h5>
                </div>
                <div class='text'>
                  <h4>{location.state.role3}</h4>
                  <p>{location.state.abexp3}</p>
                </div>
              </div>
            </div>
            <div class='about skills'>
              <h2 class='title2'>Professional skills</h2>
              <div class='box'>
                <h4>{location.state.skill1}</h4>
                <div class='percent'>
                  <div style={skillsPecent1}></div>
                </div>
              </div>

              <div class='box'>
                <h4>{location.state.skill2}</h4>
                <div class='percent'>
                  <div style={skillsPecent2}></div>
                </div>
              </div>

              <div class='box'>
                <h4>{location.state.skill3}</h4>
                <div class='percent'>
                  <div style={skillsPecent3}></div>
                </div>
              </div>

              <div class='box'>
                <h4>{location.state.skill4}</h4>
                <div class='percent'>
                  <div style={skillsPecent4}></div>
                </div>
              </div>

              <div class='about interest'>
                <h2 class='title2'>Interest</h2>
                <ul>
                  <li>{location.state.hobby1}</li>
                  <li>{location.state.hobby2}</li>
                  <li>{location.state.hobby3}</li>
                  <li>{location.state.hobby4}</li>
                </ul>
              </div>


            </div>
          </div>
        </div>
        <button className="btn btn-danger" type="submit" onClick={downloadPDF}>
            Download
          </button>
      </body>



      {/* 
      <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous" />

        <header class="bg-primary bg-gradient text-white py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-3 text-left text-md-center mb-3">
                <img class="rounded-circle img-fluid" src="https://i.pravatar.cc/175?img=32" alt="Profile Photo" />
              </div>
              <div class="col-md-9">
                <h1>Name: {location.state.name}</h1>
                <h5>role: {location.state.role}</h5>
                <p class="border-top pt-3">{location.state.bintro}</p>
              </div>
            </div>
          </div>
        </header>
      </div>

      <nav class="bg-dark text-white-50 mb-3">
        <div class="container">
          <div class="row p-3">
            <div class="col-md pb-2 pb-md-0">
              <svg width="1em" height="1.5em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
              </svg>
              <a href="#" class="text-white ml-2">{location.state.email}</a>
            </div>
            <div class="col-md text-md-center pb-2 pb-md-0">
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-globe" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4H2.255a7.025 7.025 0 0 1 3.072-2.472 6.7 6.7 0 0 0-.597.933c-.247.464-.462.98-.64 1.539zm-.582 3.5h-2.49c.062-.89.291-1.733.656-2.5H3.82a13.652 13.652 0 0 0-.312 2.5zM4.847 5H7.5v2.5H4.51A12.5 12.5 0 0 1 4.846 5zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5H7.5V11H4.847a12.5 12.5 0 0 1-.338-2.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12H7.5v2.923c-.67-.204-1.335-.82-1.887-1.855A7.97 7.97 0 0 1 5.145 12zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11H1.674a6.958 6.958 0 0 1-.656-2.5h2.49c.03.877.138 1.718.312 2.5zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12h2.355a7.967 7.967 0 0 1-.468 1.068c-.552 1.035-1.218 1.65-1.887 1.855V12zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5h-2.49A13.65 13.65 0 0 0 12.18 5h2.146c.365.767.594 1.61.656 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4H8.5V1.077c.67.204 1.335.82 1.887 1.855.173.324.33.682.468 1.068z" />
              </svg>
              <a href="#" class="text-white ml-2">{location.state.website}</a>
            </div>
            <div class="col-md text-md-right">
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z" />
              </svg>
              <a href="#" class="text-white ml-2">{location.state.contact}</a>
            </div>
          </div>
        </div>
      </nav>

      <main class="container">
        <div class="row">
          <div class="col-md mb-5">
      
          </div>
          <div class="col-md mb-5">
      
          </div>
        </div>
        <div class="row">
          <div class="col-md mb-5">
      
          </div>
          <div class="col-md">
      
          </div>
        </div>
      </main>

      <h3 class="mb-2">Work Experience</h3>
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
      </ul> */}


    </>
  )
}

export default Preview