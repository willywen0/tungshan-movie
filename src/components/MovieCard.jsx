import { FaHeart } from "react-icons/fa";
import { useMovieContext } from "../contexts/MovieContext";

const MovieCard = ({movie}) => {

    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()
    const favorite = isFavorite(movie.id)

    const handleFavorite = () => {
        console.log('clicked');
        if (favorite) {
            removeFromFavorites(movie.id)
        } else {
            addToFavorites(movie)
        }
    }

    return (
        <div className="card card-border border">
            <figure className="relative">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="image-overlay absolute top-1 right-1">
                    <button className={`btn btn-ghost btn-circle ${favorite && 'text-rose-500'}`} onClick={handleFavorite}><FaHeart className="size-6" /></button>
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{movie.title}</h2>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard