import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>JavaScript</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>React</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>Next-Js</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>TypeScript</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>HTML</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>CSS</h4>
            </article>
          </div>
        </div>

        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>Kotlin</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>PHP</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>Spring Boot</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>MySql</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>MongoDB</h4>
            </article>
          </div>
        </div>

        <div className="experience_backend">
        <h3>Tools</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>Git</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>VSCode</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>IntelliJ</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>Linux</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>Sublime Merge</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience