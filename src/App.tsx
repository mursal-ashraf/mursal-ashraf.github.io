import { ThemeProvider } from './context/ThemeContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="body">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
