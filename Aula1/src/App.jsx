import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Lorrayne</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Raiva esta em {count}
        </button>
        <p>
          Bem Vindo ao MUNDO do Nunca
        </p>
      </div>
      <p className="read-the-docs">
       Clique no botão e nivele sua raiva
      </p>
    </>
  )
}

export default App
