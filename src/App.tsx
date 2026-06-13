import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { SearchProvider } from './context/SearchContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Details from './pages/Details'
import './styles/App.css'
import Watermark from "./components/Watermark";

export default function App() {
  return (
    <ThemeProvider>
      <SearchProvider>
        <Router>
          <div className="app-container">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/item/:id" element={<Details />} />
              </Routes>
              
            </main>
            <Footer />
            
          </div>
           <Watermark />
        </Router>
      </SearchProvider>
    </ThemeProvider>
    
  )
}
