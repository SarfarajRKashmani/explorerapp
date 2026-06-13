import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronLeft, Star, Eye, Share2 } from 'lucide-react'
import ItemCard from '../components/ItemCard'
import Loader from '../components/Loader'
import { getItemById, getRelatedItems, ExplorerItem } from '../services/api'
import './Details.css'

export default function Details() {
  const { id } = useParams<{ id: string }>()
  const [item, setItem] = useState<ExplorerItem | null>(null)
  const [related, setRelated] = useState<ExplorerItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const loadItem = async () => {
      if (!id) return
      const data = await getItemById(id)
      setItem(data)
      if (data) {
        setRelated(getRelatedItems(id))
      }
      setIsLoading(false)
    }
    loadItem()
  }, [id])

  const handleShare = async () => {
    const url = window.location.href
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      console.error('Failed to copy')
    }
  }

  if (isLoading) return <Loader />

  if (!item) {
    return (
      <div className="not-found">
        <div className="not-found-content">
          <h1>Item Not Found</h1>
          <p>The item you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/explore" className="back-link">
            <ChevronLeft size={20} /> Back to Explore
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="details">
      {/* Header */}
      <div className="details-header">
        <Link to="/explore" className="back-button">
          <ChevronLeft size={20} /> Back
        </Link>
      </div>

      {/* Main Content */}
      <div className="details-container">
        {/* Image Section */}
        <div className="details-image-section">
          <div className="image-wrapper">
            <img src={item.image} alt={item.title} className="main-image" />
            {item.featured && <span className="featured-badge">Featured</span>}
          </div>
        </div>

        {/* Info Section */}
        <div className="details-info-section">
          <div className="category-and-rating">
            <span className="category">{item.category}</span>
            <div className="rating">
              <Star size={18} fill="currentColor" />
              <span>{item.rating}</span>
            </div>
          </div>

          <h1 className="details-title">{item.title}</h1>

          <div className="details-stats">
            <div className="stat">
              <Eye size={20} />
              <div>
                <p className="stat-label">Views</p>
                <p className="stat-value">{(item.views / 1000).toFixed(1)}k</p>
              </div>
            </div>
            <div className="stat">
              <Star size={20} fill="currentColor" />
              <div>
                <p className="stat-label">Rating</p>
                <p className="stat-value">{item.rating}/5.0</p>
              </div>
            </div>
          </div>

          <p className="details-description">{item.description}</p>

          {/* Tags */}
          <div className="tags-section">
            <h3>Tags</h3>
            <div className="tags">
              {item.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="btn btn-primary">Learn More</button>
            <button onClick={handleShare} className={`btn btn-secondary ${copied ? 'copied' : ''}`}>
              <Share2 size={18} />
              {copied ? 'Copied!' : 'Share'}
            </button>
          </div>
        </div>
      </div>

      {/* Related Items */}
      {related.length > 0 && (
        <section className="related-section">
          <h2>Related Items</h2>
          <div className="related-grid">
            {related.map((relItem) => (
              <ItemCard key={relItem.id} item={relItem} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
