import { Link, NavLink } from "react-router-dom"
import { logo } from "../assets"

export const Header = () => {


    return (
        <header className="flex items-center justify-between px-4 h-16 bg-skin-fill bg-opacity-30 z-50 backdrop-blur-md">
            <Link className="flex gap-1 items-center font-black font-serif text-2xl group">
                <div>
                    <img
                        className="w-[60px] aspect-auto"
                        src={ logo }
                        alt="logo by logoipsum" />
                </div>
                <div className="font-thin">
                    <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-red-600 transition-colors font-thin">FLIX</span>
                    <span className="group-hover:font-black transition-all">forte</span>
                </div>
            </Link>
            <nav>
                <ul className="flex items-center">
                    <li className="h-16 grid items-center">
                        <NavLink to={ '/' }
                            className={ ({ isActive }) => isActive ? ' bg-red-500 px-4 grid place-items-center' : '' + 'bg-black' }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="h-16 grid items-center">
                        <NavLink to={ '/movies' }
                        >
                            Movies
                        </NavLink>
                    </li>
                    <li className="h-16 grid items-center">
                        <NavLink to={ '/tv' }
                        >
                            Series
                        </NavLink>
                    </li>

                </ul>
            </nav>
            <ul className="flex items-center gap-2">
                <li className="font-semibold hover:text-skin-muted">
                    <Link>Login</Link>
                </li>
                <li className="bg-skin-button-accent text-skin-inverted px-2 py-1 rounded hover:bg-skin-button-accent-hover">
                    <Link className="">Sign up</Link>
                </li>
                <li>
                    <Link>Profile</Link>
                </li>
            </ul>
        </header>
    )
}