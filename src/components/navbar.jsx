import classNames from "classnames";
import { TbDeviceTv, TbHome, TbMovie, TbX } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { movieNight } from "../assets";
import { stopBubbling } from "../utils";
import { useEffect } from "react";

const navlinks = [
    { name: 'Home', path: '/', icon: <TbHome /> },
    { name: 'Movies', path: '/movies', icon: <TbMovie /> },
    { name: 'Series', path: '/series', icon: <TbDeviceTv /> },
]


export const Navbar = () => {
    const navClasses = ({ isActive }) => isActive ?
        'bg-blob bg-transparent bg-skin-button-muted font-semibold px-4 bg-center bg-no-repeat bg-cover h-1/2 place-items-center font-bold text-skin-muted' :
        'hover:text-skin-muted hover:underline font-semibold  h-1/2 px-4'




    return (
        <>
            <nav className={ `md:-translate-x-20 hidden transition-all md:bg-transparent md:flex-1 md:flex md:justify-center md:text-center z-10` }>
                <ul className={ `md:flex md:items-center ${''}` }>
                    {
                        navlinks.map(({ name, path }, index) => (
                            <li className="h-16 grid items-center" key={ index }>
                                <NavLink to={ path } className={ navClasses }>
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

export const MobileNav = ({ setIsOpen, navOpen }) => {

    useEffect(() => {
        navOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll'
    }, [navOpen])

    return (

        <nav className="md:hidden fixed h-screen top-0 bg-gradient-to-r w-full custom-gradient bg-opacity-100 left-0 text-center grid place-items-center bg-transparent backdrop-blur-sm inset-0 z-40"
            onClick={ () => setIsOpen(false) }
        >

            <ul
                onClick={ stopBubbling }
            >

                {
                    navlinks.map(({ name, path, icon }, index) => (
                        <li key={ index }
                            onClick={ () => setTimeout(() => {
                                setIsOpen(false)
                            }, 500) }
                        >
                            <NavLink
                                to={ path }
                                className={ ({ isActive }) => {
                                    const defaults = 'bg-skin-fill-extreme my-[1px] max-w-sm w-[90vw] px-4 flex items-center justify-between active:scale-95 hover:rounded transition-transform hover:shadow hover:cursor-pointer shadow-lg bg-skin grayscale rounded-md font-bold '
                                    return isActive ? `${defaults} font-extra-bold filter-none shadow-xl scale-105 z-10` : `${defaults} hover:grayscale-[50%] bg-opacity-50`
                                } }
                            >
                                <span className="flex items-center gap-1"> { icon } { name }</span> <span className="h-fit  "> <img className=" h-fit w-20" src={ movieNight } alt="animated blob mark current page" /> </span>
                            </NavLink>
                        </li>
                    ))
                }
                <button className="flex items-center mx-auto bg-red-400 text-skin-base px-2 py-1 rounded-sm mt-2 hover:bg-opacity-100 bg-opacity-50"
                    onClick={ () => setIsOpen(false) }
                >
                    <TbX /> CLOSE
                </button>
            </ul>
        </nav >

    )
}