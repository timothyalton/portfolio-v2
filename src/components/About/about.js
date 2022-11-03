import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/animatedLetter';
import { faGitAlt, faSquareJs, faReact} from '@fortawesome/free-brands-svg-icons';
import ReactLogo from '../../assets/images/React-icon.png';
import RubyLogo from '../../assets/images/rubygem.png';
import RubyOnRailsLogo from '../../assets/images/ruby-on-rails.png';
import SQLLogo from '../../assets/images/sql-logo.png';




import './about.scss';



const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  

  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters 
            letterClass={letterClass}
            strArray={['About'.split(' '), ' ', 'Me'.split(' ')]}
            idx={15}
          />
        </h1>
        <p>
          I'm an ambitious, passionate Full Stack developer constantly looking to learn and develop innovative Tech.
          I am always open to new opportunities and looking for ways to advance my career as a Software Engineer.
        </p>
        <p>
          I graduated from the Flatiron School for Software Engineering and have had no regrets. I have always been interested in Tech,
          so this career transition for me was an incredible experience. I utilize my previous experience working in the Oil and Gas industry as a CAD Designer
          every day to complement my work as a Software Engineer.
        </p>
        <p>
          If I had to describe myself in one sentence it would be: I am a passionate, family-driven, software developer who loves to learn and wants to
          impact the Tech community by contributing to meaningful projects while offering the knowledge I have picked up along the way to anyone who shares the
          same passion. 
        </p>
      </div>
      <div className="stage-cube-container">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face2">
            <img src={RubyLogo} alt="Ruby" />
          </div>
          <div className="face3">
            <img src={RubyOnRailsLogo} alt="RubyOnRails" />
          </div>
          <div className="face4">
            <img src={SQLLogo} alt="SQL" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faSquareJs} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;