import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard";

const FavoritesPage = () => {

    const { favorites } = useMovieContext()
    console.log(favorites);

    if (favorites.length > 0) {
        return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {favorites.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        )
    }

    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-center">No Favorite Movies Yet</h2>
            {/* {movies.length === 0 && (
                <div>Not found</div>
            )}

            {movies.length > 0 && (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {movies.map(movie => (
                            <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )} */}
        </div>
    )
}

export default FavoritesPage