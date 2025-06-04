import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="body">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
