import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { NewThread } from './pages/NewThread'
import { Thread } from './pages/Thread'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newThread" element={<NewThread />} />
        <Route path="/Thread" element={<Thread />} />
      </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
