import { fetchPopularMovies, fetchSearchMovies } from '../lib/api';
import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

const HomePage = () => {

    const [movies, setMovies] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [loading, setLoading] = useState(true)

    const loadPopularMovies = async () => {
        try {
            const popularMovies = await fetchPopularMovies()
            setMovies(popularMovies)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadPopularMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        console.log('clicked', searchQuery);
        console.log(loading);
        if (!searchQuery.trim()) return
        if (loading) return
        
        try {
            const searchResults = await fetchSearchMovies(searchQuery)
            setMovies(searchResults)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }
  
    

    console.log(movies);
    

    return (
        <div className="max-w-7xl mx-auto">
            <form className='flex justify-center items-center gap-1 my-10' onSubmit={handleSearch}>
                <input 
                    className='input input-bordered max-w-xs w-full'
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className='btn btn-primary' type='submit'>Search</button>
            </form>

            {loading && <div>Loading....</div>}

            {movies.length === 0 && (
                <div>Not found</div>
            )}

            {movies.length > 0 && (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {movies.map(movie => (
                            <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default HomePage