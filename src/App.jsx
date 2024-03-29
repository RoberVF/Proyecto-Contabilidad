import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ProyectPage from './pages/ProyectPage'
import Range from './pages/Range'
import About from './pages/AboutPage'

//Levels
import Level1 from './pages/levels/Level1'
import Level2 from './pages/levels/Level2'
import Level3 from './pages/levels/Level3'
import LevelController from './pages/levels/LevelController'

//Components
import Navbar from './components/Navbar'
import Level from './components/Level'
import Challenge from './components/Challenge'

//Assets 
import Gradient from './assets/Gradient'
import ScrollToTop from './assets/ScrollToTop'

function App() {
  return (
    <BrowserRouter className="prose" basename="/">
      <ScrollToTop />
      <Navbar/>
      <Gradient />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/proyect" element={<ProyectPage />} />
        <Route path="/range" element={<Range />} />
        <Route path="/about" element={<About />} />

        {/* Levels */}
        <Route path="/level/:levelNumber" element={<Level />}/>
        <Route path="/level/:levelNumber/challenge/:challengeNumber" element={<Challenge />}/>


        {/* <Route path="/levels/level_1" element={<Level1 />} />
        <Route path="/levels/level_2" element={<Level2 />} />
        <Route path="/levels/level_3" element={<Level3 />} />
        <Route path="/levels/level_controller" element={<LevelController />} /> */}

      </Routes>
    </BrowserRouter>
  )
}

export default App