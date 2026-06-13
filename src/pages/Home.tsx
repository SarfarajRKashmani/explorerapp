import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Eye, TrendingUp } from 'lucide-react'
import ItemCard from '../components/ItemCard'
import Loader from '../components/Loader'
import { getItems, ExplorerItem } from '../services/api'
import './Home.css'

export default function Home() {
  const [featured, setFeatured] = useState<ExplorerItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadFeatured = async () => {
      const items = await getItems()
      setFeatured(items.filter((item) => item.featured).slice(0, 4))
      setIsLoading(false)
    }
    loadFeatured()
  }, [])

  const topRated = featured.slice(0, 3).sort((a, b) => b.rating - a.rating)
  const stats = [
    { icon: <Eye size={24} />, label: 'Total Views', value: '2.5M+' },
    { icon: <Star size={24} />, label: 'Avg Rating', value: '4.7★' },
    { icon: <TrendingUp size={24} />, label: 'Featured Items', value: '50+' },
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Discover Your Next Amazing Experience</h1>
          <p className="hero-subtitle">
            Explore curated collections of breathtaking destinations, stunning nature, vibrant
            culture, and more. Find inspiration in every corner of the world.
          </p>
          <Link to="/explore" className="cta-button">
            Start Exploring
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Featured Section */}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className="featured-section">
            <div className="section-header">
              <div>
                <h2>Featured Collections</h2>
                <p>Handpicked experiences and destinations you shouldn&apos;t miss</p>
              </div>
              <Link to="/explore" className="view-all-link">
                View All <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid-layout">
              {featured.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          {/* Top Rated Section */}
          <section className="top-rated-section">
            <div className="section-header">
              <div>
                <h2>Top Rated</h2>
                <p>The most loved experiences by our community</p>
              </div>
            </div>

            <div className="top-rated-list">
              {topRated.map((item, index) => (
                <Link key={item.id} to={`/item/${item.id}`} className="top-rated-item">
                  <div className="rank">{index + 1}</div>
                  <div className="top-rated-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="top-rated-info">
                    <h3>{item.title}</h3>
                    <div className="top-rated-stats">
                      <span>
                        <Star size={14} fill="currentColor" />
                        {item.rating}
                      </span>
                      <span>
                        <Eye size={14} />
                        {(item.views / 1000).toFixed(1)}k
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={18} />
                </Link>
              ))}
            </div>
          </section>
        </>
      )}

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Explore?</h2>
        <p>Browse thousands of amazing items and discover your next favorite</p>
        <Link to="/explore" className="cta-button">
          Explore Now
          <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  )
}
