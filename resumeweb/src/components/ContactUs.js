import React from 'react'
import "./ContactUs.css"
const ContactUs = () => {
  return (
    <>
<body>    
<section class="section1">

    
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="row">

       
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

               
                <div class="row">

                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                        <label for="name" class="contact_Name" >Your name</label>
                            <input type="text" id="name" name="name" class="name_control"/>
                            
                        </div>
                    </div>
                
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                        <label for="email" class="contact_email">Your email</label>
                            <input type="text" id="email" name="email" class="name_control"/>
                            
                        </div>
                    </div>
                    

                </div>
                

                
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                        <label for="subject" class="contact_subject">Subject</label><br></br>
                            <input type="text" id="subject" name="subject" class="name_control"/>
                            
                        </div>
                    </div>
                </div>
                

                
                <div class="row">

                    
                    <div class="col-md-12">

                        <div class="md-form">
                        <label for="message" class = 'contact_texttitle'>Your message</label><br></br>
                            <textarea type="text" id="message" name="message" rows="2" class="contact_textarea"></textarea>
                            
                        </div>

                    </div>
                </div>
                

            </form>

            <br></br><div class="text-center text-md-left">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>
        

        
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Darshan Fulia</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+91 68454687854</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>www.darshanfulia@gmail.com</p>
                </li>
            </ul>
        </div>
     

    </div>

</section>
</body>
    </>
  )
}

export default ContactUs
