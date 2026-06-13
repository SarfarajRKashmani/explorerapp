import { useEffect, useState } from 'react'
import { ChevronDown, X } from 'lucide-react'
import ItemCard from '../components/ItemCard'
import Loader from '../components/Loader'
import { useSearch } from '../context/SearchContext'
import { searchItems, categories, allTags, ExplorerItem } from '../services/api'
import './Explore.css'

export default function Explore() {
  const { searchQuery, selectedFilters, setSelectedFilters } = useSearch()
  const [items, setItems] = useState<ExplorerItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const results = await searchItems(searchQuery, selectedFilters)
      setItems(results)
      setCurrentPage(1)
      setIsLoading(false)
    }
    fetchItems()
  }, [searchQuery, selectedFilters])

  const totalPages = Math.ceil(items.length / itemsPerPage)
  const startIdx = (currentPage - 1) * itemsPerPage
  const displayedItems = items.slice(startIdx, startIdx + itemsPerPage)

  const handleCategoryFilter = (category: string) => {
    setSelectedFilters({
      ...selectedFilters,
      category: selectedFilters.category?.includes(category)
        ? selectedFilters.category.filter((c) => c !== category)
        : [...(selectedFilters.category || []), category],
    })
  }

  const handleTagFilter = (tag: string) => {
    setSelectedFilters({
      ...selectedFilters,
      tags: selectedFilters.tags?.includes(tag)
        ? selectedFilters.tags.filter((t) => t !== tag)
        : [...(selectedFilters.tags || []), tag],
    })
  }

  const clearAllFilters = () => {
    setSelectedFilters({})
  }

  const hasActiveFilters = Object.values(selectedFilters).some((v) => v && v.length > 0)

  return (
    <div className="explore">
      <div className="explore-header">
        <h1>Explore</h1>
        <p>Discover {items.length} amazing items</p>
      </div>

      <div className="explore-container">
        {/* Sidebar Filters */}
        <aside className="filters-sidebar">
          <div className="filters-header">
            <h3>Filters</h3>
            {hasActiveFilters && (
              <button onClick={clearAllFilters} className="clear-filters">
                Clear All
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="filter-group">
            <h4 className="filter-title">Category</h4>
            <div className="filter-options">
              {categories.map((category) => (
                <label key={category} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedFilters.category?.includes(category) || false}
                    onChange={() => handleCategoryFilter(category)}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Tags Filter */}
          <div className="filter-group">
            <h4 className="filter-title">Tags</h4>
            <div className="filter-options">
              {allTags.slice(0, 8).map((tag) => (
                <label key={tag} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedFilters.tags?.includes(tag) || false}
                    onChange={() => handleTagFilter(tag)}
                  />
                  <span>{tag}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="explore-content">
          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="active-filters">
              {selectedFilters.category?.map((cat) => (
                <span key={cat} className="filter-chip">
                  {cat}
                  <button onClick={() => handleCategoryFilter(cat)}>
                    <X size={14} />
                  </button>
                </span>
              ))}
              {selectedFilters.tags?.map((tag) => (
                <span key={tag} className="filter-chip">
                  {tag}
                  <button onClick={() => handleTagFilter(tag)}>
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Items Grid */}
          {isLoading ? (
            <Loader />
          ) : items.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📭</div>
              <h2>No items found</h2>
              <p>Try adjusting your search or filters to find what you&apos;re looking for.</p>
              <button onClick={clearAllFilters} className="reset-button">
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid-layout">
                {displayedItems.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="pagination-btn"
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="pagination-btn"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  )
}
