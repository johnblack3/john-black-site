import './App.css'
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {

  return (
    <>
      <div>
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
      </div>
    </>
  )
}

export default App
