import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard';
import './Container.css';
import 'tachyons';

function Container() {
  return (
    <div className='container'>
        <div className='grid'>
            <ProfileCard />
            <article className="mw8 grow  shadow-5 center  br3 pa2 pa4-ns mv3  pcard bg-lightest-blue">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna nec augue commodo ultrices id a leo. Nunc euismod metus vel diam sagittis, ac interdum velit ultricies. Donec varius turpis nisl, in sagittis nisi rhoncus ac. Nulla facilisi. In euismod, purus ac dapibus tristique, ipsum urna hendrerit nunc, ut fermentum nisi lorem vitae mi.     
                </p>
            </article>
        </div>   
    </div>
  )
}

export default  Container;
