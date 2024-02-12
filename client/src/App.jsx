import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from "./components/contact"
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
   <>

<Router><Contact/></Router>
   
   </>
  )
}

export default App
