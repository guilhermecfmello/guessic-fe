import { Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './Index'
import ArtistGame from './pages/ArtistGame'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Index />}></Route>
      <Route path="/artist-game" element={<ArtistGame />}></Route>
    </Routes>
  )
}

export default App
