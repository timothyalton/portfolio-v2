import './home.scss';
import LogoTitle from '../../assets/images/3dm.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hello, <br /> I'm
        <img src={LogoTitle} alt="developer" />
        itchell Alton
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