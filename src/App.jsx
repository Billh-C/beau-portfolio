import './App.css'
import NavBar from './Components/NavBar'
import {Intro} from './Components/Intro'
import { Projects } from './Components/Projects'

function App() {
  
  return (
    <div className=''>
      <NavBar />
      <div className='content-container mb-96'>
          <Intro />
      </div>
      <div className='content-container'>
          <Projects />
      </div>
    </div>
  )
}

export default App

//TODO: Scroll to Top