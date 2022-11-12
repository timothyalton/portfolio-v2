import { render } from '@testing-library/react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/animatedLetter';
import './contact.scss';

import { useState, useEffect } from 'react';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  render(
    <>
    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters 
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I am always interested in hearing about new opportunities - especially ambitious and large projects. Feel free
          to reach out with any questions or requests using the form below. Thank you. 
        </p>
      </div>
    </div>
    <Loader type='line-scale-pulse-out' />
    </>
  )
}

export default Contact;