import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    fetch('/products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => console.error('Error loading products:', error));
  }, []);

  const filteredProducts = products.filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || product.categories.includes(selectedCategory))
    );
  });

  const popularProducts = products.filter(product => product.isPopular);

  const getCategories = (products) => {
    const categories = new Set();
    products.forEach(product => {
      product.categories.forEach(category => {
        categories.add(category);
      });
    });
    return Array.from(categories);
  };

  const categories = getCategories(products);

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          className="search-input"
        />
        <nav className="category-nav">
          <ul className="category-list">
            <li
              className={selectedCategory === '' ? 'active' : ''}
              onClick={() => setSelectedCategory('')}
            >
              All
            </li>
            {categories.map((category, index) => (
              <li
                key={index}
                className={category === selectedCategory ? 'active' : ''}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="content">
        <main>
          {selectedCategory === '' && searchTerm === '' && (
            <section className="popular-products">
              <h2>Popular Products</h2>
              <div className="product-list">
                {popularProducts.map(product => (
                  <div
                    key={product.id}
                    className="product-card"
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-downloaded">Downloaded: {product.downloaded}</p>
                    <a href={product.downloadLink} className="download-btn">Download Now</a>
                  </div>
                ))}
              </div>
            </section>
          )}
          <section className="product-list-section">
            <h2>{selectedCategory === '' ? 'All Products' : selectedCategory}</h2>
            <div className="product-list">
              {filteredProducts.map(product => (
                <div
                  key={product.id}
                  className="product-card"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <img src={product.image} alt={product.name} className="product-image" />
                  <h2 className="product-name">{product.name}</h2>
                  <p className="product-downloaded">Downloaded: {product.downloaded}</p>
                  <a href={product.downloadLink} className="download-btn">Download Now</a>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
