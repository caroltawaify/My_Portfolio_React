import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Clogo from '../../assets/images/Clogo.png'
// import Logo from './Logo'
import './index.scss'
import Resume from './resume.pdf';


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['a', 'r', 'o', 'l']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page" id='Home'>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={Clogo}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Junior Full Stack Developer </h2>
          <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
          {/* <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link> */}
          <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
     
        </div>
        {/* <Logo /> */}
      </div>

    </>
  )
}

export default Home
