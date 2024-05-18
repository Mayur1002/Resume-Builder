import React from 'react'
import "./Home.css"
import Homeimage from "./Homeimage.jpg"
const Home = () => {
  return (
  <>
  <body className='first_body'>
  <div className='firstdiv'>
    <main>
       
      <section class="firstSection">
        <div class="leftSection">
          Hi, My name is Mayur
          You can pick one of our handcrafted resume templates above. You can start building your resume in less than 5 seconds, using predefined sections approved by recruiters worldwide. You can also customize it to your own needs and personality and hit 'Download'. It's THAT easy to use, even if you've never made a resume in your life before!
          <span id="element"></span>
          <div class="buttons">
            <button class="btn">Download</button>
            <button class="btn2">Github</button>
          </div>
        </div>
        <div class="rightSection">
          <img src={Homeimage} className='homeimage' />
        </div>
      </section>
      <hr />
      <section class="secondsection">
        <span class="text-grey"> What have done so far </span>
        <h1>Work Experience</h1>
        <div class="box">
          <div class="vertical">
            <div class="vertical-title">HTML Developer 2010-2012</div>
            <div class="vertical-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              dolor natus. Consequuntur explicabo nisi inventore quam ipsum,
              exercitationem beatae placeat? Rerum sapiente cumque aliquam
              fugit, quibusdam temporibus quasi beatae facilis?
            </div>
          </div>

          <div class="vertical">
            <div class="vertical-title">HTML Developer 2010-2012</div>
            <div class="vertical-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              dolor natus. Consequuntur explicabo nisi inventore quam ipsum,
              exercitationem beatae placeat? Rerum sapiente cumque aliquam
              fugit, quibusdam temporibus quasi beatae facilis?
            </div>
          </div>

          <div class="vertical">
            <div class="vertical-title">HTML Developer 2010-2012</div>
            <div class="vertical-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              dolor natus. Consequuntur explicabo nisi inventore quam ipsum,
              exercitationem beatae placeat? Rerum sapiente cumque aliquam
              fugit, quibusdam temporibus quasi beatae facilis?
            </div>
          </div>

          <div class="vertical">
            <div class="vertical-title">HTML Developer 2010-2012</div>
            <div class="vertical-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              dolor natus. Consequuntur explicabo nisi inventore quam ipsum,
              exercitationem beatae placeat? Rerum sapiente cumque aliquam
              fugit, quibusdam temporibus quasi beatae facilis?
            </div>
          </div>

          <div class="vertical">
            <div class="vertical-title">HTML Developer 2010-2012</div>
            <div class="vertical-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              dolor natus. Consequuntur explicabo nisi inventore quam ipsum,
              exercitationem beatae placeat? Rerum sapiente cumque aliquam
              fugit, quibusdam temporibus quasi beatae facilis?
            </div>
          </div>
        </div>
      </section>
    </main>
    </div>
    <footer>
      <div class="footer">
        <div class="footer-first">
          <h3>Mayur Developer Portfolio</h3>
        </div>
        <div class="footer-second">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
          </ul>
        </div>
        <div class="footer-third">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
          </ul>
        </div>
        <div class="footer-fourth">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
          </ul>
        </div>
      </div>
      <div class="footer-rights">www.mayurdadas.com | All Rights Reserverd</div>
    </footer>
  </body>

  </>
  )
}

export default Home
