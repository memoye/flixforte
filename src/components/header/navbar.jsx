import { TbDeviceTv, TbHome, TbMovie, TbX } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { movieNight } from "../../assets";
import { stopBubbling } from "../../utils/misc_utils";
import { useEffect } from "react";

const navlinks = [
    { name: 'Home', path: '/', icon: <TbHome /> },
    { name: 'Movies', path: '/movies', icon: <TbMovie /> },
    { name: 'Series', path: '/series', icon: <TbDeviceTv /> },
]


export const Navbar = () => {
    // const navClasses = ({ isActive }) => isActive ?
    //     'bg-blob bg-transparent bg-skin-button-muted font-semibold px-4 bg-center bg-no-repeat bg-cover h-1/2 place-items-center font-bold text-skin-muted' :
    //     'hover:text-skin-muted hover:underline font-semibold  h-1/2 px-4'

    return (
        <>
            <nav className={ ` hidden transition-all md:bg-transparent md:flex-1 md:flex md:justify-center md:text-center z-10` }>
                <ul className={ `md:flex md:items-center space-x-2 ${''}` }>
                    {
                        navlinks.map(({ name, path }, index) => (
                            <li className="h-16 grid items-center" key={ index }>
                                <NavLink to={ path } className={ ({ isActive }) => isActive ? 'btn btn-sm btn-neutral relative before:content-[""] before:block before:absolute before:w-8/12 before:border before:border-inherit before:bg-inherit before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:rounded-xl' : 'btn btn-sm btn-ghost' }>
                                    { name }
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav >

        </>
    )
}