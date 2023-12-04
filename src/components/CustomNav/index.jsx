import { TbDeviceTv, TbHome, TbMovie, TbX } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const navlinks = [
    { name: 'Home', path: '/', icon: <TbHome /> },
    { name: 'Movies', path: '/movies', icon: <TbMovie /> },
    { name: 'Series', path: '/series', icon: <TbDeviceTv /> },
]

export const CustomNav = () => {
    return (
        <>
            <nav className={ ` hidden transition-all md:bg-transparent md:flex-1 md:flex md:justify-center md:text-center z-10` }>
                <ul className={ `md:flex md:items-center space-x-2 ${''}` }>
                    {
                        navlinks.map(({ name, path }, index) => (
                            <li className="h-16 grid items-center" key={ index }>
                                <NavLink to={ path }
                                    className={ ({ isActive }) => (`uppercase mx-1 px-1 border-b ${isActive ? 'border border-b-accent border-accent text-accent hover:shadow-lg hover:shadow-accent transition-all' : 'border-b-transparent hover:border-b-accent'} transition-border`) }>
                                    { name }
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    )
}
