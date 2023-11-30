/*
 * @Description: temp
 */
import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routes from './routes';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
