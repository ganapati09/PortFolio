import React ,{ useState } from 'react';

import './Nav.css';
const Nav = (props) =>{
    const handleHomeClick =  () =>{
      props.onClickButton('home');
    }

    const handlePortClick = () => {
      props.onClickButton('portfolio');
    }

    const handleAboutClick = () => {
      props.onClickButton('About');
    }
    const handleSkillsClick = () => {
      props.onClickButton('Skills');
    }
    return (
      <div>
        <header className="bg-lightest-blue black-80 tc pv4 avenir">
            <nav className="justify-between items-right  mt0">
                  <button className=" dim white f6 f5-ns dib mr3" type='submit' id='home' onClick={handleHomeClick}>Home</button>
                  <button className=" dim white f6 f5-ns dib mr3" type='submit' onClick={handlePortClick}>Projects</button>
                  <button className=" dim white f6 f5-ns dib mr3" type='submit' onClick={handleSkillsClick}>Skills</button>
                  <button className=" dim white f6 f5-ns dib mr3" type='submit' onClick={handleAboutClick}>About</button>
            </nav>
            
        </header>
        
      </div>
    )

}

export default Nav;