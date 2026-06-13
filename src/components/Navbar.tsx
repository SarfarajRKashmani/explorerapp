import { Link } from 'react-router-dom'
import { Moon, Sun, Search } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useSearch } from '../context/SearchContext'
import './Navbar.css'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { searchQuery, setSearchQuery } = useSearch()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">✨</span>
          SleekScope
        </Link>

        <div className="navbar-search">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search anything..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/explore" className="nav-link">
            Explore
          </Link>
        </div>

        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </nav>
  )
}
