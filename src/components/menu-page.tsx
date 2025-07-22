"use client"

import { useState } from "react"
import CustomButton from "./custom-button"
import "./menu-page.css"

const menuCategories = ["All", "Top Sellers", "Coffee", "Tea & Others", "Food", "Desserts"]

const menuItems = [
  // Top Sellers
  {
    id: 1,
    name: "Signature Espresso Blend",
    category: "Top Sellers",
    price: 4.5,
    description: "Our house blend with rich chocolate notes and smooth finish",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300&h=300&fit=crop",
    popular: true,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Caramel Macchiato",
    category: "Top Sellers",
    price: 5.25,
    description: "Vanilla syrup, steamed milk, espresso, and caramel drizzle",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
    popular: true,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Avocado Toast",
    category: "Top Sellers",
    price: 8.95,
    description: "Fresh avocado on artisan sourdough with cherry tomatoes",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=300&h=300&fit=crop",
    popular: true,
    rating: 4.7,
  },

  // Coffee
  {
    id: 4,
    name: "Americano",
    category: "Coffee",
    price: 3.75,
    description: "Rich espresso shots with hot water",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=300&fit=crop",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Cappuccino",
    category: "Coffee",
    price: 4.25,
    description: "Equal parts espresso, steamed milk, and milk foam",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=300&fit=crop",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Latte",
    category: "Coffee",
    price: 4.75,
    description: "Espresso with steamed milk and light foam",
    image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=300&h=300&fit=crop",
    rating: 4.4,
  },
  {
    id: 7,
    name: "Mocha",
    category: "Coffee",
    price: 5.5,
    description: "Espresso, chocolate syrup, steamed milk, and whipped cream",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
    rating: 4.7,
  },

  // Tea & Others
  {
    id: 8,
    name: "Earl Grey Tea",
    category: "Tea & Others",
    price: 3.25,
    description: "Classic bergamot-flavored black tea",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop",
    rating: 4.3,
  },
  {
    id: 9,
    name: "Green Tea Latte",
    category: "Tea & Others",
    price: 4.5,
    description: "Matcha powder with steamed milk",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300&h=300&fit=crop",
    rating: 4.5,
  },
  {
    id: 10,
    name: "Hot Chocolate",
    category: "Tea & Others",
    price: 4.25,
    description: "Rich chocolate with steamed milk and marshmallows",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=300&h=300&fit=crop",
    rating: 4.6,
  },

  // Food
  {
    id: 11,
    name: "Croissant Sandwich",
    category: "Food",
    price: 7.5,
    description: "Ham, cheese, and scrambled eggs in a buttery croissant",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop",
    rating: 4.4,
  },
  {
    id: 12,
    name: "Bagel with Cream Cheese",
    category: "Food",
    price: 5.25,
    description: "Fresh bagel with house-made cream cheese",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop",
    rating: 4.2,
  },
  {
    id: 13,
    name: "Quinoa Salad Bowl",
    category: "Food",
    price: 9.75,
    description: "Quinoa, mixed greens, cherry tomatoes, and vinaigrette",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop",
    rating: 4.5,
  },

  // Desserts
  {
    id: 14,
    name: "Chocolate Brownie",
    category: "Desserts",
    price: 4.95,
    description: "Fudgy chocolate brownie with walnuts",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=300&fit=crop",
    rating: 4.8,
  },
  {
    id: 15,
    name: "Cheesecake Slice",
    category: "Desserts",
    price: 5.5,
    description: "New York style cheesecake with berry compote",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300&h=300&fit=crop",
    rating: 4.7,
  },
]

interface MenuPageProps {
  cart: any[]
  setCart: (cart: any[]) => void
}

export default function MenuPage({ cart, setCart }: MenuPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      }
      return [...prevCart, { ...item, quantity: 1 }]
    })
  }

  const filteredItems =
    selectedCategory === "All" ? menuItems : menuItems.filter((item) => item.category === selectedCategory)

  const topSellers = menuItems.filter((item) => item.popular)

  return (
    <div className="menu-page">
      {/* Hero Section */}
      <section className="menu-hero">
        <div className="menu-hero-content">
          <h1>Our Menu</h1>
          <p>Discover our carefully crafted beverages and delicious food options</p>
        </div>
      </section>

      {/* Top Sellers Highlight */}
      <section className="top-sellers">
        <div className="container">
          <h2>⭐ Top Sellers</h2>
          <div className="top-sellers-grid">
            {topSellers.map((item) => (
              <div key={item.id} className="top-seller-card">
                <div className="item-image">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} />
                  <div className="popular-badge">Popular</div>
                </div>
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                  <div className="item-rating">
                    {"⭐".repeat(Math.floor(item.rating))}
                    <span>({item.rating})</span>
                  </div>
                  <div className="item-footer">
                    <span className="item-price">${item.price}</span>
                    <CustomButton name="Add to Cart" onPress={() => addToCart(item)} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="menu-filter">
        <div className="container">
          <h2>Full Menu</h2>
          <div className="category-buttons">
            {menuCategories.map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="menu-items">
        <div className="container">
          <div className="menu-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="menu-item-card">
                <div className="item-image">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} />
                  {item.popular && <div className="popular-badge">Popular</div>}
                </div>
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p className="item-category">{item.category}</p>
                  <p className="item-description">{item.description}</p>
                  <div className="item-rating">
                    {"⭐".repeat(Math.floor(item.rating))}
                    <span>({item.rating})</span>
                  </div>
                  <div className="item-footer">
                    <span className="item-price">${item.price}</span>
                    <CustomButton name="Add to Cart" onPress={() => addToCart(item)} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
