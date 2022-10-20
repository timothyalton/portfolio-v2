import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/animatedLetter';
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
    </div>
  )
};

export default About;