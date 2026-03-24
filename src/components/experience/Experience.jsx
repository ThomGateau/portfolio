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
              <h4>Taillwind</h4>
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
              <h4>Node.JS</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>Typescript</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>Python</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>SQL / NoSql</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>API REST</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>API GraphQL</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>Java</h4>
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
              <h4>Sublime Merge</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>Jira</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>Confluence</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <h4>Docker</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience