import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import LoginPage from './pages/Login/LoginPage'
function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
  )
}

export default App
