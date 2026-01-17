import "./App.css"
import Header from "./Header.jsx";
import WelcomMessage from "./WelcomeMessage.jsx";



export default function App() {
  return (
    <div className="App">
      <Header
      name="App.jsx"
      stad="Lund"
      interest="fishing"
      breakfast="oat meal"
      />
      <p>Detta är från App.jsx – föräldern som skickar data!</p>
  
    </div>
    
  )
}

// export default App