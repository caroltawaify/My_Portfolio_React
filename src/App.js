// import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
// import Layout from './components/Layout'
// import Portfolio from './components/Portfolio'
// import Dashboard from './components/Dashboard'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Works from './components/Works/Works'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      {/* <Routes> */}
        {/* <Route path="/" element={<Layout />}> */}
        {/* <Layout /> */}
        <Navbar />
          <Home/>
          <Works />
          <Portfolio />
          <Contact />
          <Footer />
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* </Route> */}
      {/* </Routes> */}
    </div>
  )
}

export default App
