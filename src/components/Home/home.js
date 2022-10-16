import './home.scss';
import LogoTitle from '../../assets/images/3dm.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/animatedLetter';

import { useState } from 'react';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['i', 't', 'c', 'h', 'e', 'l', 'l', ' ', 'a', 'l', 't', 'o', 'n']
  const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hello, <br /> I'm
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
        <br />
        <span className={letterClass}>I</span>
        <span className={letterClass}>'m</span>
        <img src={LogoTitle} alt="developer" />
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        idx={15}
        />
        <br />
        Software Engineer
        </h1>
        <h2>Full Stack Developer / Ruby Developer / Javascript Developer / Tech Enthusiast</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  )
}

export default Home;