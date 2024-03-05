import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import LoggedInHeader from './components/LoggedInHeader'
import LoggedOutHeader from './components/LoggedOutHeader'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
        
      <main>
        {/* {renderContent()} */}
        <Outlet />
      </main>
      <Footer />
    </>   
  )
}

export default App
