import React from 'react';
import './ProfileCard.css';
 function ProfileCard() {
  return (
    <div >
        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 card">
            <div className="tc">
                <img alt="ok" src="https://media.licdn.com/dms/image/D4D03AQGtvL5Lrt1bvA/profile-displayphoto-shrink_800_800/0/1679391010219?e=1687996800&v=beta&t=WsPlKF-IIhOHLZD7mf-vKU4CPmAestohRr9Ae8J4gQE" className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" />
                <h1 className="f4 mb1">Ganapati Hegde</h1>
                <h2 className="f5 fw4 gray mt0">Full Stack Developer</h2>
                <a href="https://www.linkedin.com/in/ganapati1999/"><button className='f6 f5-l br4 wr-50 link bg-animate white grow bg-lightest-blue  dib pa2 ph4-l'>Connect</button></a>
            </div>
        </article>
    </div>
  );
}

export default ProfileCard;
