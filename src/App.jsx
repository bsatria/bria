import { Routes, Route } from 'react-router-dom'
import WelcomeCard from './components/WelcomeCard'
import Couples from './pages/Couples'
import Event from './pages/Event'
import Gift from './pages/Gift'
import Home from './pages/Home'
import Wishes from './pages/Wishes'

function App() {
  return (
    <>
      <iframe
        src="https://github.com/anars/blank-audio/blob/master/250-milliseconds-of-silence.mp3"
        allow="autoplay"
        id="audio"
        style={{
          display: 'none',
        }}
      ></iframe>
      <audio id="player" autoPlay loop>
        <source src="song.mp3" type="audio/mp3" />
      </audio>
      <Routes>
        <Route path="/" element={<WelcomeCard />} />
        <Route path="/:nama" element={<WelcomeCard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/couples" element={<Couples />} />
        <Route path="/event" element={<Event />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="*" element={<h1>NotFound</h1>} />
      </Routes>
    </>
  )
}

export default App
