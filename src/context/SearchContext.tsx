import React, { createContext, useContext, useState } from 'react'

interface SearchContextType {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedFilters: Record<string, string[]>
  setSelectedFilters: (filters: Record<string, string[]>) => void
  clearFilters: () => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})

  const clearFilters = () => {
    setSelectedFilters({})
    setSearchQuery('')
  }

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedFilters,
        setSelectedFilters,
        clearFilters,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used within SearchProvider')
  }
  return context
}
