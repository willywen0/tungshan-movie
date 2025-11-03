import { Link } from "react-router";

const Navbar = () => {
    return (
        <div className="navbar max-w-6xl mx-auto">
            <div className="flex-1">
                <Link to={'/home'}>
                    <h1 className="text-2xl font-semibold btn btn-ghost">Movie App</h1>
                </Link>
            </div>
            <div className="space-x-3 ">
                <Link to={'/home'} className="btn btn-ghost text-xl">Home</Link>
                <Link to={'/favorites'} className="btn btn-ghost text-xl">Favorites</Link>
            </div>
        </div>
    )
}

export default Navbar
