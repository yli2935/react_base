import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";

import Routes from './routes';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
