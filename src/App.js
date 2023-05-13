import React, { useState } from 'react';
import 'tachyons';
import Nav from './Nav';
import './App.css';
import Container from './components/Container/Container';
import PortFolio from './components/PortFolio/PortFolio';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
const projects = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg',
    title: 'Todo App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://ganapati09.github.io/todolist',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/500x300',
    title: 'Robofriends',
    description: 'Sed ut magna nec augue commodo ultrices id a leo.',
    link: 'https://ganapati09.github.io/robofriends',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/500x300',
    title: 'Project 3',
    description: 'Nunc euismod metus vel diam sagittis, ac interdum velit ultricies.',
    link: '#',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/500x300',
    title: 'Project 3',
    description: 'Nunc euismod metus vel diam sagittis, ac interdum velit ultricies.',
    link: '#',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/500x300',
    title: 'Project 3',
    description: 'Nunc euismod metus vel diam sagittis, ac interdum velit ultricies.',
    link: '#',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/500x300',
    title: 'Project 3',
    description: 'Nunc euismod metus vel diam sagittis, ac interdum velit ultricies.',
    link: '#',
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/500x300',
    title: 'Project 3',
    description: 'Nunc euismod metus vel diam sagittis, ac interdum velit ultricies.',
    link: '#',
  },
  {
    id: 7,
    image: 'https://via.placeholder.com/500x300',
    title: 'Project 3',
    description: 'Nunc euismod metus vel diam sagittis, ac interdum velit ultricies.',
    link: '#',
  },
];



function App(props) {
  const [content , setContent] = useState([<Container />]);
  const renderContainer = (id) => {
    if(id === 'home'){

    setContent(<Container />);

    }else if(id === 'portfolio'){

      setContent(<PortFolio projects={projects} />);

    }else if(id === 'Skills'){
      setContent(<Skills />);
    }else if(id === 'Skills'){
      setContent(<About />);
    }
  }

  return (
    <div className='rainbow-border bg-lightest-blue'>
      <Nav onClickButton={renderContainer}  />
      {content}
    </div>
  );
}

export default App;
