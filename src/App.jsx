import './App.css'
import Nav from './components/Nav'
import Overlay from './components/Overlay'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Edu from './components/Edu'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Overlay />
      <Nav />
      <About />
      <Skills />
      <Hero />
      <Edu />
      <Project />
      <Contact />
      <Footer />

    </>
  )
}
