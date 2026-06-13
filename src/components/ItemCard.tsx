import { Link } from 'react-router-dom'
import { Star, Eye } from 'lucide-react'
import { ExplorerItem } from '../services/api'
import './ItemCard.css'

interface ItemCardProps {
  item: ExplorerItem
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <Link to={`/item/${item.id}`} className="item-card">
      <div className="item-card-image">
        <img src={item.image} alt={item.title} />
        {item.featured && <span className="featured-badge">Featured</span>}
      </div>
      <div className="item-card-content">
        <div className="item-category">{item.category}</div>
        <h3 className="item-title">{item.title}</h3>
        <p className="item-description">{item.description}</p>

        <div className="item-tags">
          {item.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="item-footer">
          <div className="item-stats">
            <div className="stat">
              <Star size={14} fill="currentColor" />
              <span>{item.rating}</span>
            </div>
            <div className="stat">
              <Eye size={14} />
              <span>{(item.views / 1000).toFixed(1)}k</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
