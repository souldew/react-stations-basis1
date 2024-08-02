import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { NewThread } from './pages/NewThread'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newThread" element={<NewThread />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
