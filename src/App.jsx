import './App.css'
import NavBar from './Components/NavBar'
import { Intro } from './Components/Intro'

function App() {
  
  return (
    <div className=''>
      <NavBar />
      <div className='content-container'>
          <Intro />
      </div>
    </div>
  )
}

export default App

//TODO: Scroll to Top