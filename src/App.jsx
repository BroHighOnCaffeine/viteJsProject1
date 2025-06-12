import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'   // Importing this function from the Header.jsx
import Footer from './Components/Footer'
import ScrimbaLogo from './assets/Scrimbaimage.png' // Importing the image , here ScrimbaLogo is a name given to the image

function App() {

    const greeting = import.meta.env.VITE_GREETING   // Importing our Environmental Variable
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Header/>   {/* Add this line after importing */}

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        {/* placing our Scrimba image just like reactLogo */}

         <a href="https://ScrimbaLogo.com" target="_blank">
          <img src={ScrimbaLogo} className="logo Scrimba" alt="Scrimba logo" />
        </a>



      </div>
      <h1>Vite + React</h1>
       <h2>{greeting}</h2>   {/* calling our Environmental Variable. */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Calling the footer component  */}
      <Footer/>
    </>
  )
}

export default App
