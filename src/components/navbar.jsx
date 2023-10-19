import { NavLink } from "react-router-dom";

export const Navbar = () => {

    const navClasses = ({ isActive }) => isActive ? 'bg-blob bg-center bg-no-repeat bg-cover px-4 h-1/2 grid place-items-center font-bold text-skin-muted' : 'hover:text-skin-muted hover:underline font-semibold px-4 h-1/2 grid place-items-center bg-opacity-5'

    return (
        <nav>
            <ul className="flex items-center">
                <li className="h-16 grid items-center">
                    <NavLink to={ '/' } className={ navClasses }>
                        Home
                    </NavLink>
                </li>
                <li className="h-16 grid items-center">
                    <NavLink to={ '/movies' } className={ navClasses }>
                        Movies
                    </NavLink>
                </li>
                <li className="h-16 grid items-center">
                    <NavLink to={ '/series' } className={ navClasses }>
                        Series
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}
