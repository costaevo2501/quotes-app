import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import QuotePage from './pages/QuotePage'
import AuthorPage from './pages/AuthorPage'
import NavbarDark from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
      <NavbarDark />
      <main className="flex-shrink-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quotes" element={<QuotePage />} />
          <Route path="/authors" element={<AuthorPage />} />
        </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
