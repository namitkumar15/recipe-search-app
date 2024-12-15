# Recipe Search App

This project is a Recipe Search Application that utilizes **Algolia** to allow users to search, filter, and explore a variety of recipes across different categories. The app uses **React** as the frontend framework and leverages Algolia's powerful search capabilities to provide fast, intuitive search results.

## Project Overview

The goal of the project was to build a recipe search application that enables users to explore various recipes by category, search by name or ingredients, and filter by different attributes like cuisine, rating, and more. The app also features a clean user interface where users can select categories, view recipes, and access detailed information for each recipe.

## Key Features

- **Search functionality**: Search for recipes by name, ingredients, and other attributes.
- **Category filtering**: Filter recipes based on predefined categories (e.g., Desserts, Side Dishes, Drinks).
- **Real-time filtering**: Filter results in real time using Algolia's search engine and faceting capabilities.
- **Recipe details**: View detailed information for each recipe, including ingredients, directions, prep time, and ratings.
- **Responsive design**: The app is designed to be fully responsive, providing a seamless experience on mobile and desktop devices.

## What Was Accomplished

This project integrates **Algolia** to enhance the search and filtering experience. The `cuisine_path` data is used to allow users to filter recipes based on categories such as Desserts, Side Dishes, Main Dishes, etc. I learned how to work with Algolia’s API and integrated its search capabilities into a React app. I also explored how to set up and deploy the app using **GitHub Pages**.

The project features a simple UI with checkboxes to filter recipes based on categories, as well as a search bar that helps users find recipes by name or ingredients. The app is fully functional and deployed on GitHub Pages for easy access.

## Feedback for Algolia

While working with Algolia, I found the setup and configuration process to be straightforward. The search engine is incredibly fast, and its integration with React was seamless. The ability to use faceting for categories and attributes made filtering and sorting the data very efficient.

I found the documentation to be generally helpful, but it could benefit from more detailed guidance, especially for beginners. For example, providing additional steps on how to configure facets and handle cases like multi-word category names could be useful. Some aspects of the functionality were a bit unclear initially, but with some experimentation and support from community forums, I was able to resolve these challenges.

## How to Run the Project Locally

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/namitkumar15/recipe-search-app.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the app:

    ```bash
    npm start
    ```

4. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the app.

## Deployment

This app has been deployed to **GitHub Pages**. You can view it at the following URL:

https://namitkumar15.github.io/recipe-search-app/


## Conclusion

Building this recipe search app was a great learning experience. I was able to implement powerful search and filtering functionalities with the help of **Algolia** and **React**. I look forward to further enhancing this project and exploring more features offered by Algolia to make the user experience even better.
