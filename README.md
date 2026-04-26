# 🎬 Netflix GPT

Netflix GPT is a modern, fully responsive web application that merges the classic Netflix UI with an intelligent AI-powered movie search engine. Built with React and tailored with Tailwind CSS, this project leverages the TMDB API for extensive movie data and Firebase for secure user authentication.

## 🚀 Live Demo
[Check out the live demo here!](https://netflix-gpt-333l.vercel.app/browse)

## ✨ Key Features

- **🔐 Authentication**: Secure user login, signup, and signout flows powered by Firebase Authentication. Route protection ensures only authenticated users can access the browse page.
- **🎞️ Dynamic Content**: Seamlessly fetches and displays categorised movie data (Now Playing, Popular, Top Rated, Upcoming) from the TMDB API.
- **🎥 Hero Section**: An immersive main movie feature with an embedded, auto-playing, and muted YouTube trailer serving as the background.
- **🤖 GPT Search**: A dedicated search page where users can discover specific movie recommendations through an intuitive search interface.
- **📱 Responsive UI**: A fully responsive, mobile-first design crafted meticulously with Tailwind CSS to ensure a great experience across all screen sizes.
- **🗃️ State Management**: Robust, predictable global state management handled via Redux Toolkit.

## 🛠️ Tech Stack

- **Frontend**: React, React Router DOM
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit, React-Redux
- **Backend/Auth**: Firebase Authentication
- **APIs**: TMDB (The Movie Database) API

## 🏗️ Architecture & Concepts Used

- **Custom Hooks**: Created multiple custom hooks (e.g., `useMovieTrailer`, `useNowPlayingMovies`) to abstract away complex data-fetching logic and keep components clean.
- **Redux Slices**: Modularized state into slices (e.g., `userSlice`, `movieSlice`) for scalable state management.
- **Performance Optimization**: Efficient form handling using the `useRef` hook to prevent unnecessary component re-renders.
- **Component-Driven Design**: Highly reusable component architecture with separated logic for lists (`MovieList`), individual items (`MovieCard`), and media presentation (`VideoBackground`).

## 💻 Running Locally

To run this project on your local machine, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/SuhaniKapasiya/netflix-gpt.git
   cd netflix-gpt
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add your API keys:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   # Add other required Firebase config keys
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   # If you use OpenAI for the GPT Search:
   REACT_APP_OPENAI_KEY=your_openai_api_key
   ```

4. **Start the Development Server**
   ```bash
   npm start
   ```

## 🤝 Contact
- **Author**: Suhani Kapasiya
- **LinkedIn**: [Your LinkedIn Profile URL]
- **GitHub**: [https://github.com/SuhaniKapasiya](https://github.com/SuhaniKapasiya)

---
*If you find this project interesting, feel free to ⭐ the repository!*