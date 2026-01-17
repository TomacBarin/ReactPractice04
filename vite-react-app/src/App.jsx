import { useState } from 'react'          // ← Ny import!
import './App.css'
import Header from './Header.jsx'

export default function App() {
  // Skapar två stycken "state-variabler"
  const [name, setName] = useState("Tomac")
  const [interests, setInterests] = useState([
    "musik",
    "trummaskiner",
    "unfiltered audio",
    "modulärsynthesis",
    "haom"
  ])

  // Funktion för att lägga till nytt intresse
  const addInterest = () => {
    const newInterest = prompt("Vad är ditt nya intresse?")
    if (newInterest && newInterest.trim() !== "") {
      setInterests([...interests, newInterest.trim()])
    }
  }

  return (
    <div className="App">
      <Header 
        name={name}
        stad="Lund"
        breakfast="oat meal"
        extraMessage="Min mitt heter Kattens!"
        lastProp="Detta är sista testet."
        interests={interests}
      />

      {/* Kontroller för att ändra namn */}
      <div style={{ margin: '20px 0' }}>
        <label>
          Ditt namn: 
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: '10px', padding: '6px' }}
          />
        </label>
      </div>

      <button 
        onClick={addInterest}
        style={{ padding: '10px 16px', fontSize: '16px' }}
      >
        Lägg till nytt intresse
      </button>

      <p>Detta är från App.jsx – här bor state och logiken! 🌟</p>
    </div>
  )
}