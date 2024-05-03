/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
const HeaderSocials=() =>{
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com' target='_blank'><FaGithub/></a>
        <a href='https://dribble.com' target='_blank'></a>
   
    </div>
  )
}

export default HeaderSocials