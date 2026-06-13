export interface ExplorerItem {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
  image: string
  rating: number
  views: number
  featured: boolean
  color: string
}

const COLORS = ['#06b6d4', '#ec4899', '#f59e0b', '#10b981', '#8b5cf6', '#f97316']

export const items: ExplorerItem[] = [
  {
    id: '1',
    title: 'Aurora Borealis',
    description: 'Witness the magical Northern Lights dancing across the Arctic sky in breathtaking vivid colors.',
    category: 'Nature',
    tags: ['nature', 'arctic', 'lights'],
    image: 'https://i.ytimg.com/vi/rLK5StH_zFM/hqdefault.jpg?v=68d1fca4',
    rating: 4.9,
    views: 15420,
    featured: true,
    color: '#06b6d4',
  },
  {
    id: '2',
    title: 'Tokyo Neon',
    description: 'Experience the electric energy of Tokyo&#39;s vibrant neon streets and urban landscape at night.',
    category: 'Urban',
    tags: ['city', 'neon', 'urban'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTz-DdlJj5B_n93virJ4bf1eNIQvC6CF9TAQ&s',
    rating: 4.8,
    views: 12800,
    featured: true,
    color: '#ec4899',
  },
  {
    id: '3',
    title: 'Mountain Peak',
    description: 'Discover pristine mountain peaks covered in snow with breathtaking panoramic views.',
    category: 'Nature',
    tags: ['mountains', 'nature', 'landscape'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    rating: 4.7,
    views: 10200,
    featured: false,
    color: '#f59e0b',
  },
  {
    id: '4',
    title: 'Ocean Sunset',
    description: 'Immerse yourself in the serene beauty of golden hour over the vast, tranquil ocean.',
    category: 'Nature',
    tags: ['ocean', 'sunset', 'nature'],
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&h=400&fit=crop',
    rating: 4.9,
    views: 18500,
    featured: true,
    color: '#10b981',
  },
  {
    id: '5',
    title: 'Forest Path',
    description: 'Wander through enchanting forest paths surrounded by ancient trees and natural beauty.',
    category: 'Nature',
    tags: ['forest', 'trees', 'nature'],
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=400&fit=crop',
    rating: 4.6,
    views: 9300,
    featured: false,
    color: '#8b5cf6',
  },
  {
    id: '6',
    title: 'Desert Dunes',
    description: 'Experience the golden expanse of endless sand dunes under a star-filled desert sky.',
    category: 'Landscape',
    tags: ['desert', 'landscape', 'nature'],
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=500&h=400&fit=crop',
    rating: 4.5,
    views: 7800,
    featured: false,
    color: '#f97316',
  },
  {
    id: '7',
    title: 'Waterfall Flow',
    description: 'Marvel at the thunderous power and grace of cascading waterfalls in tropical paradise.',
    category: 'Nature',
    tags: ['waterfall', 'nature', 'water'],
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=500&h=400&fit=crop',
    rating: 4.8,
    views: 14200,
    featured: true,
    color: '#06b6d4',
  },
  {
    id: '8',
    title: 'City Lights',
    description: 'Gaze upon the glittering metropolis with millions of twinkling lights illuminating the night.',
    category: 'Urban',
    tags: ['city', 'night', 'lights'],
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&h=400&fit=crop',
    rating: 4.7,
    views: 11500,
    featured: false,
    color: '#ec4899',
  },
  {
    id: '9',
    title: 'Coral Reef',
    description: 'Dive into the vibrant underwater world of coral reefs teeming with colorful marine life.',
    category: 'Water',
    tags: ['ocean', 'underwater', 'coral'],
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop',
    rating: 4.9,
    views: 13400,
    featured: true,
    color: '#f59e0b',
  },
  {
    id: '10',
    title: 'Northern Lights',
    description: 'Capture the ethereal beauty of the Aurora Borealis in all its magnificent glory.',
    category: 'Nature',
    tags: ['aurora', 'lights', 'sky'],
    image: 'https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?w=500&h=400&fit=crop',
    rating: 4.8,
    views: 16300,
    featured: true,
    color: '#10b981',
  },
  {
    id: '11',
    title: 'Ancient Ruins',
    description: 'Explore the mysterious remnants of ancient civilizations with breathtaking architectural heritage.',
    category: 'Culture',
    tags: ['history', 'architecture', 'culture'],
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=400&fit=crop',
    rating: 4.6,
    views: 8900,
    featured: false,
    color: '#8b5cf6',
  },
  {
    id: '12',
    title: 'Lavender Fields',
    description: 'Wander through endless purple lavender fields in full bloom, fragrant and serene.',
    category: 'Nature',
    tags: ['flowers', 'field', 'nature'],
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=500&h=400&fit=crop',
    rating: 4.7,
    views: 10800,
    featured: false,
    color: '#f97316',
  },
  {
    id: '13',
    title: 'Ice Cave',
    description: 'Discover the otherworldly beauty of crystalline ice caves glowing with ethereal blue light.',
    category: 'Nature',
    tags: ['ice', 'cave', 'nature'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    rating: 4.9,
    views: 12100,
    featured: true,
    color: '#06b6d4',
  },
  {
    id: '14',
    title: 'Urban Architecture',
    description: 'Marvel at modern architectural marvels and innovative urban design reaching toward the sky.',
    category: 'Urban',
    tags: ['architecture', 'buildings', 'urban'],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=400&fit=crop',
    rating: 4.5,
    views: 7200,
    featured: false,
    color: '#ec4899',
  },
  {
    id: '15',
    title: 'Starry Night',
    description: 'Gaze up at a brilliant night sky filled with countless stars and the Milky Way.',
    category: 'Sky',
    tags: ['stars', 'night', 'sky'],
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=400&fit=crop',
    rating: 4.8,
    views: 15600,
    featured: true,
    color: '#f59e0b',
  },
  {
    id: '16',
    title: 'Green Valley',
    description: 'Explore lush green valleys with rolling hills and pristine natural landscapes.',
    category: 'Landscape',
    tags: ['landscape', 'nature', 'valley'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    rating: 4.6,
    views: 9500,
    featured: false,
    color: '#10b981',
  },
  {
    id: '17',
    title: 'Tokyo Street',
    description: 'Experience the bustling energy and unique culture of Tokyo&#39;s vibrant street markets.',
    category: 'Urban',
    tags: ['city', 'street', 'culture'],
    image: 'https://images.ctfassets.net/dsbipkqphva2/kIY2qRWvZ6H6Ogp7yUpIA/cc36fcaf1eda6a3338c3f4a11a253fa2/best-shopping-streets-in-tokyo-pelago-lead-min-1.jpg?fm=webp&w=800',
    rating: 4.7,
    views: 11200,
    featured: false,
    color: '#8b5cf6',
  },
  {
    id: '18',
    title: 'Bioluminescent Bay',
    description: 'Experience the magical glow of bioluminescent organisms lighting up the dark waters.',
    category: 'Water',
    tags: ['ocean', 'night', 'bioluminescence'],
    image: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?w=500&h=400&fit=crop',
    rating: 4.9,
    views: 14800,
    featured: true,
    color: '#f97316',
  },
  {
    id: '19',
    title: 'Autumn Forest',
    description: 'Immerse in the warm colors of autumn as leaves transform the forest into a golden wonderland.',
    category: 'Nature',
    tags: ['autumn', 'forest', 'nature'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    rating: 4.7,
    views: 10400,
    featured: false,
    color: '#06b6d4',
  },
  {
    id: '20',
    title: 'Volcanic Landscape',
    description: 'Witness the dramatic power of nature with volcanic peaks and otherworldly terrain.',
    category: 'Landscape',
    tags: ['volcano', 'landscape', 'nature'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    rating: 4.6,
    views: 8600,
    featured: false,
    color: '#ec4899',
  },
]

export const categories = ['All', 'Nature', 'Urban', 'Landscape', 'Water', 'Culture', 'Sky']
export const allTags = [...new Set(items.flatMap((item) => item.tags))]

export async function getItems(): Promise<ExplorerItem[]> {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => resolve(items), 300)
  })
}

export async function getItemById(id: string): Promise<ExplorerItem | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items.find((item) => item.id === id) || null)
    }, 200)
  })
}

export async function searchItems(
  query: string,
  filters: Record<string, string[]>,
): Promise<ExplorerItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      let results = items

      // Filter by search query
      if (query.trim()) {
        const lowerQuery = query.toLowerCase()
        results = results.filter(
          (item) =>
            item.title.toLowerCase().includes(lowerQuery) ||
            item.description.toLowerCase().includes(lowerQuery) ||
            item.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)),
        )
      }

      // Filter by category
      if (filters.category && filters.category.length > 0) {
        results = results.filter((item) => filters.category.includes(item.category))
      }

      // Filter by tags
      if (filters.tags && filters.tags.length > 0) {
        results = results.filter((item) =>
          filters.tags.every((tag) => item.tags.includes(tag)),
        )
      }

      // Filter by rating
      if (filters.rating && filters.rating.length > 0) {
        const minRating = Math.min(...filters.rating.map((r) => parseFloat(r)))
        results = results.filter((item) => item.rating >= minRating)
      }

      resolve(results)
    }, 250)
  })
}

export function getRelatedItems(itemId: string, limit: number = 4): ExplorerItem[] {
  const item = items.find((i) => i.id === itemId)
  if (!item) return []

  return items
    .filter((i) => i.id !== itemId && i.category === item.category)
    .slice(0, limit)
}
