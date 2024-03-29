import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaGitlab} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/thomas-gateau" target='_blank'><BsLinkedin /></a>
      <a href="https://gitlab.com/thom.gateau" target='_blank'><FaGitlab /></a>
      <a href="https://github.com/ThomGateau" target='_blank'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials