import React, { Fragment } from 'react'
import './Skills.css';
const  Skills = () =>  {
  return (
    <Fragment>
        <div className='tc container-top'>
          <p>I am a software developer with below skills</p>
          <img  className="grow container-img" alt="html" src="https://img.freepik.com/free-icon/html-5_318-674234.jpg" />
          <img  className="grow container-img"  src='https://cdn-icons-png.flaticon.com/512/888/888847.png' alt='css' />
          <img  className="grow container-img" alt='javascript' src='https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png' />
          <img  className="grow container-img" alt='react' src='https://cdn-icons-png.flaticon.com/512/1183/1183672.png' />
          <img  className="grow container-img" alt='node' src='https://cdn-icons-png.flaticon.com/512/919/919825.png' />
          <img  className="grow container-img" alt='mongo' src='https://cdn.iconscout.com/icon/free/png-256/free-mongodb-5-1175140.png' />
        </div>
    </Fragment>
    
  )
}
export default Skills;