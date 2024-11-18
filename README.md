# 📰 News Aggregator Website

Welcome to the News Aggregator! This project is a user-friendly, responsive web application that pulls articles from multiple news sources and displays them in a clean, easy-to-read format. It provides features for article search, filtering, and a personalized news feed with a dark mode toggle for enhanced user experience.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Data Sources](#api-data-sources)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Docker Support](#docker-support)
- [Dark Mode](#dark-mode)
- [Code Quality](#code-quality)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## ✨ Features

1. **Article Search and Filtering**
   - Users can search for articles by keyword.
   - Filter articles by date, category, and source.
2. **Personalized News Feed**
   - Customize your feed by selecting preferred sources, categories, and authors.
3. **Dark Mode Toggle**
   - Toggle between light and dark themes for a better reading experience.
4. **Mobile-Responsive Design**
   - Optimized for viewing on mobile devices.
5. **Docker Support**
   - Easily run the application in a Docker container.

## 🛠️ Tech Stack

- React.js
- Material-UI (MUI)
- Axios
- React Router
- Docker
- Node.js
- GitHub Actions (for CI/CD)

## 🌐 API Data Sources

This project uses the following APIs:

1. [NewsAPI](https://newsapi.org/)
2. [The Guardian API](https://open-platform.theguardian.com/)
3. [New York Times API](https://developer.nytimes.com/)

## 📂 Project Structure
```
news-aggregator/
├── public/                        # Public assets like HTML and icons
│   ├── index.html                 # Main HTML file
│   └── favicon.ico                # Favicon icon
├── src/                           # All source code files
│   ├── components/                # Reusable UI components
│   │   ├── ArticleCard.jsx        # Component for displaying individual articles
│   │   ├── Filters.jsx            # Component for filter options (category, date, etc.)
│   │   ├── SearchBar.jsx          # Search input component for querying articles
│   ├── pages/                     # Page-level components
│   │   └── HomePage.jsx           # Homepage component, displaying articles
│   ├── services/                  # Service layer for fetching data from APIs
│   │   ├── newsService.js         # Functions to fetch news from APIs (NewsAPI, Guardian, etc.)
│   ├── themes/                    # Theme-related files (light & dark mode)
│   │   ├── theme.js               # Custom Material UI theme settings (dark/light mode)
│   │   └── themeContext.js        # Context provider for theme toggling
│   ├── App.jsx                    # Main component wrapping all pages and logic
│   ├── index.js                   # Entry point for the React application
│   └── styles.css                 # Global styles for the app
├── Dockerfile                     # Dockerfile for containerization
├── .env                           # Environment variables file for API keys
├── .gitignore                     # Git ignore file for node_modules, build, etc.
├── package.json                   # npm package configuration with dependencies and scripts
├── README.md                      # Project documentation and instructions
└── node_modules/                  # Node modules (generated after running `npm install`)
```

## 🚀 Installation

### Prerequisites

- Node.js (>= 18.x)
- npm (>= 9.x)
- Docker (for containerization)

### Clone the Repository

```bash
git clone https://github.com/your-username/news-aggregator.git
cd news-aggregator
```

### Install Dependencies
```
npm install
```

### Environment Variables
Create a .env file in the root directory and add your API keys:

```
REACT_APP_NEWSAPI_KEY=your_newsapi_key
REACT_APP_GUARDIAN_KEY=your_guardian_key
REACT_APP_NYT_KEY=your_nyt_key
```

## 🖥️ Usage

### Run the Development Server
```
npm start
```
The application will be available at http://localhost:3000.

### Build for Production
```
npm run build
```

## 🐳 Docker Support
This project includes a Docker configuration. To run the application using Docker:

### Build Docker Image
```
docker build -t news-aggregator .
```

### Run Docker Container
```
docker run -p 3000:3000 news-aggregator
```

Alternatively, you can use Docker Compose:
```
docker-compose up
```
The app will be available at http://localhost:3000.

## 🌑 Dark Mode
This application includes a dark mode feature. Use the toggle switch at the top of the page to switch between light and dark themes.

## ✅ Code Quality
The project follows best practices, including:

- DRY (Don't Repeat Yourself)
- KISS (Keep It Simple, Stupid)
- SOLID Principles

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📝 Acknowledgements

NewsAPI
The Guardian API
New York Times API
Material-UI
