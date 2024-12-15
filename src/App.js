import React, { useState } from "react";
import "./App.css";
import algoliasearch from "algoliasearch";
import { InstantSearch, SearchBox, Hits, Configure } from "react-instantsearch-dom";

// Algolia Configuration
const searchClient = algoliasearch(
  "EDQ8G4FCZB", // Your app ID
  "5e16e7e6c3b858582088447e3670e93b" // Your search-only API key
);

// Full list of categories
const categories = [
  { name: "Desserts", count: 396 },
  { name: "Side Dish", count: 133 },
  { name: "Salad", count: 90 },
  { name: "Drinks Recipes", count: 82 },
  { name: "Cuisine", count: 69 },
  { name: "Appetizers and Snacks", count: 68 },
  { name: "Bread", count: 67 },
  { name: "Breakfast and Brunch", count: 48 },
  { name: "Main Dishes", count: 43 },
  { name: "Meat and Poultry", count: 38 },
  { name: "Soups, Stews and Chili Recipes", count: 19 },
  { name: "Seafood", count: 11 },
  { name: "Everyday Cooking", count: 10 },
  { name: "Quick Bread Recipes", count: 3 },
  { name: "BBQ & Grilling", count: 2 },
  { name: "Fruits and Vegetables", count: 2 },
  { name: "Holidays and Events Recipes", count: 2 },
  { name: "Sauces and Condiments", count: 2 },
  { name: "Soup Recipes", count: 2 },
  { name: "Trusted Brands: Recipes and Tips", count: 2 },
  { name: "Mexican", count: 1 },
];

const App = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter((cat) => cat !== category);
      } else {
        return [...prevSelectedCategories, category];
      }
    });
  };

  const categoryFilter = selectedCategories
    .map((category) => `cuisine_path:"${category}"`)
    .join(" OR ");

  return (
    <InstantSearch searchClient={searchClient} indexName="recipes">
      <div className="app-container">
        <div className="sidebar">
          <h3 className="sidebar-title">Categories</h3>
          <div className="category-list">
            {categories.map((category) => (
              <div className="category-item" key={category.name}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.name)}
                  onChange={() => handleCategoryChange(category.name)}
                  className="category-checkbox"
                />
                <label>{category.name} ({category.count})</label>
              </div>
            ))}
          </div>
        </div>

        <div className="main-content">
          <h1>Recipe Search</h1>
          <SearchBox />
          <Configure filters={categoryFilter} />
          <div className="hits-container">
            <Hits hitComponent={Hit} />
          </div>
        </div>
      </div>
    </InstantSearch>
  );
};

const Hit = ({ hit }) => {
  return (
    <div className="hit-card">
      <img src={hit.img_src} alt={hit.recipe_name} className="hit-image" />
      <div className="hit-info">
        <h4>{hit.recipe_name}</h4>
        <p>{hit.ingredients}</p>
        <p><strong>Rating:</strong> {hit.rating}</p>
        <p><strong>Prep Time:</strong> {hit.prep_time}</p>
        <p><strong>Total Time:</strong> {hit.total_time}</p>
        <button className="view-recipe-btn">
          <a href={hit.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
        </button>
      </div>
    </div>
  );
};

export default App;
