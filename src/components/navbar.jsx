import { TbX } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const Navbar = ({ isOpen, setIsOpen }) => {
    const navClasses = ({ isActive }) => isActive ?
        'bg-blob bg-transparent bg-skin-button-muted font-semibold px-4 bg-center bg-no-repeat bg-cover h-1/2 place-items-center font-bold text-skin-muted' :
        'hover:text-skin-muted hover:underline font-semibold  h-1/2 px-4 '

    return (
        <>
            { isOpen &&
                <div className={ `bg-black left-0 inset-y-0 z-50 w-1/2  hidden ` }
                    onClick={ () => setIsOpen(false) }
                /> }
            <nav className={ `md:-translate-x-24 transition-all md:bg-transparent md:flex-1 md:flex md:justify-center md:text-center z-10` }>
                <ul className={ `md:flex md:items-center ${''}` }>

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
        </>
    )
}

export const MobileNav = () => {
    return (
        <div>Mobile</div>
    )
}