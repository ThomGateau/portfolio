import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">

            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Diploma</h5>
              <small>Full Stack Web Developer</small>
            </article>

            <article className="about_card">
              <FiUser className='about_icon'/>
              <h5>Quality</h5>
              <small>Patient - Curious</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Working with</h5>
              <small><a href="https://www.novasquare.io/fr">Novasquare</a></small>
            </article>
            </div>
            <p>
              After more than 4 years in the restaurant industry, I transitioned into web development, discovering a true passion. Now, I'm actively seeking an apprenticeship to further refine my skills and expand my knowledge in the field.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About