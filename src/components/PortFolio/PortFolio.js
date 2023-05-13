import React from 'react'
import './PortFolio.css'

export default function PortFolio({projects}) {
  return (
    <div className='container'>
        <div className='grid1'>
        {projects.map((project) => (
        <div key={project.id} className="mw5 center grow bg-white br3 pa3 pa4-ns mv3 ba b--black-10  ccard">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
        </div>
        ))}
        </div>
    </div>
    
  )
}



