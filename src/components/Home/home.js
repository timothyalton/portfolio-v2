import './home.scss';
import LogoTitle from '../../assets/images/3dm.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/animatedLetter';
import Typed from 'react-typed';
import Logo from './Logo/logo';

import { useState, useEffect } from 'react';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [ typeStart, setTypeStart ] = useState(false)
  const nameArray = ['i', 't', 'c', 'h', 'e', 'l', 'l', ' ', 'A', 'l', 't', 'o', 'n']
  const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']
  const typedArray = ['Full Stack Developer', 'Ruby Developer', 'JavaScript Developer', 'Tech Enthusiast', 'May the Force be with you!']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setTypeStart(true)
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _13`}>i,</span>
        <br />
        <span className={`${letterClass} _14`}>I</span>
        <span className={`${letterClass} _15`}>'m</span>
        <img src={LogoTitle} alt="developer" />
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        idx={15} />
        <br />
        <AnimatedLetters letterClass={letterClass} 
        strArray={jobArray}
        idx={28}
        />
        </h1>
        <br />
        { typeStart &&
        <Typed
        className='typed-text'
        strings={typedArray}
        typeSpeed={50}
        backSpeed={75}
        loop
        /> } 
        <h2></h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
      <Logo />
    </div>
  )
};

export default Home;