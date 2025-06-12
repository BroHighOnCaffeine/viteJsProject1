import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'   // Importing this function from the Header.jsx
import Footer from './Components/Footer'
import ScrimbaLogo from './assets/Scrimbaimage.png' // Importing the image , here ScrimbaLogo is a name given to the image

function App() {

    const greeting = import.meta.env.VITE_GREETING   // Importing our Environmental Variable
    // const apiUrl = import.meta.env.VITE_API_URL   // Importing the var. containing API URL[for IP Addr.]
  const [count, setCount] = useState(0)

  // using the UseEffect Hook
  const [ipAddress , SetIpAddress] = useState("")
  // ipAddress is a state Variable , SetIpAddress is SetStateVariable - It's concept of HOOk

  useEffect(() => {

    const fetchIpAddress =async() => {

    // Use the Environmental variable here
    const apiUrl = import.meta.env.VITE_API_URL;

    // Using the TRY-CATCH Block

    try{
      const response = await fetch('${apiUrl}?format=json');

        if(!response.ok){
          throw new Error('Api Error: ${response.status}');

        }

        const data = await response.json();
        SetIpAddress(data.ip);
    }
    catch(err){
      SetIpAddress("Not Available");
      console.log(err.message);
      
    };
  };

fetchIpAddress();
},[])

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
       <h3>Your IP Address is {ipAddress}</h3>          {/* Displaying the Ip Address - Challenge   */}

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
