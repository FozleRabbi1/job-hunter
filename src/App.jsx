import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './ComponentFile/NavbarFile/Navbar'
import { Outlet, useNavigation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './ComponentFile/FooterFile/Footer'

function App() {
  const [count, setCount] = useState(0)
  const navigation = useNavigation();

  return (
    <div className="App">
      <Navbar></Navbar>

      <div>
        {
          navigation.state === "loading" && "Loading..."
        }
      </div>

      <ToastContainer></ToastContainer>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  )
}

export default App
