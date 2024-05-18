import React from 'react'
import './AboutUs.css'
import MayurPic from './MayurPic.jpg';
import bg2 from './bg2.jpg';

const AboutUs = () => {

    let imagereduce = {
        width: "500px",
        height: "200px"
      }
  return (
   <>
   

<body>
    <header>
        <h1>About Us</h1>
    </header>
    
    <main>
        <section id="about">
            <h2>Our Story</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, tellus in bibendum bibendum, ligula nisi suscipit leo.</p>
        </section>
        <section id="team">
            <h2>Our Team</h2>
            
            <ul>
            {/* <img src= {bg2} className='bg2img' /> */}
                <li><img src= {MayurPic} style={imagereduce} /><p>Mayur Dadas </p></li>
                <li><img src="team_member2.jpg" alt="Team Member 2"/><p>Darshan Fulia </p></li>
                <li><img src="team_member3.jpg" alt="Team Member 3"/><p>Kenil Chheda</p></li>
                <li><img src="team_member3.jpg" alt="Team Member 3"/><p>Yash Khandelwal</p></li>
               
            </ul>
        </section>
        
    </main>
    <footer className='aboutfooter'>
        <p>&copy; 2023 Your Company Name</p>
    </footer>
    
</body>

   </>
  )
}

export default AboutUs
