import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router'
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import { MovieProvider } from "./contexts/MovieContext";

const App = () => {
    return (
        <div>
            <MovieProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                    <Route path="/search-results" element={<SearchResultsPage />} />
                </Routes>
            </MovieProvider>
        </div>
    )
}

export default App