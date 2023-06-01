import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Main from './pages/Main'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Detail from './pages/Detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/note/:detail_id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
