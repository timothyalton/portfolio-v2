import './logo.scss';
import LogoMA from '../../../assets/images/logo-s.png';
import { useEffect, useRef } from 'react';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial';


const Logo = () => {

  const bgRef = useRef();
  const outlineLogoRef1 = useRef();
  const outlineLogoRef2 = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap.timeline().to(bgRef.current, {
      duration: 1,
      opacity: 1
    })
    .from(outlineLogoRef1.current, {
      drawSVG: 0,
      duration: 20,
    })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin)

  //   gsap.timeline().to(bgRef.current, {
  //     duration: 1,
  //     opacity: 1
  //   })
  //   .from(outlineLogoRef2.current, {
  //     drawSVG: 0,
  //     duration: 20,
  //   })

  //   gsap.fromTo(
  //     solidLogoRef.current,
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       delay: 4,
  //       duration: 4,
  //     }
  //   )
  // }, [])

  return(
    <div className='logo-container' ref={bgRef}>
      <img ref={solidLogoRef} className='solid-logo' src={LogoMA} alt="MA"/>   
    </div>
  )
}

export default Logo;