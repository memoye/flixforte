import { useEffect, useRef, useState } from "react"
import { Logo } from './Logo';
import { HeaderActions } from './header-actions';
import { NavLink } from "react-router-dom"
import { Navbar, SearchBox, ThemeToggle } from '../index';
import { TbMenu2, TbSearch, TbX } from 'react-icons/tb';

export const Header = () => {
    const [searchOpen, setSearchOpen] = useState(false)
    const headerRef = useRef()

    function handleSearchBtn() {
        setSearchOpen(true)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            headerRef?.current?.classList?.remove('top-0')

            if (window.scrollY > 70) {
                headerRef.current.classList.add('fixed', 'backdrop-blur-lg', 'backdrop-brightness-90', '-top-20')
            } else {
                headerRef.current.classList.remove('fixed', 'backdrop-brightness-90', 'backdrop-blur-lg')
            }

            if (window.scrollY > 20) {
                headerRef.current.classList.add('shadow')
            } else {
                headerRef.current.classList.remove('shadow')
            }

            if (window.scrollY > 200) {
                headerRef.current.classList.add('-top-20')
            }
        })

        window.addEventListener('scrollend', () => {
            headerRef?.current?.classList?.remove('-top-20')
            headerRef?.current?.classList?.add('top-0')
        })
    }, [])

    return (
        <>
            { searchOpen &&
                <div className='w-screen h-screen fixed z-40'>
                    <SearchBox
                        setSearchOpen={ setSearchOpen }
                        searchOpen={ searchOpen }
                    />
                </div>
            }

            <header ref={ headerRef } className="flex items-center transition-[top] justify-between px-4 h-16 z-30  w-full">
                <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost p-2 md:hidden">
                    <TbMenu2 />
                </label>
                <Logo />

                {/* desktop nav */ }
                <Navbar />

                <ul className="flex items-center gap-2 z-10">


                    <li className="flex items-center">
                        <button className="text-xl"
                            onClick={ handleSearchBtn }
                        >
                            <TbSearch />
                        </button>
                    </li>

                    <HeaderActions setSearchOpen={ setSearchOpen } />



                    {/* <ThemeToggle /> */ }

                </ul>
            </header>
            <div className="drawer drawer-end z-50 lg:hidden">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */ }
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar md:hidden" className="drawer-overlay"></label>
                    <ul className="menu md:hidden p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */ }
                        <li><NavLink to={ '/' }>Home</NavLink></li>
                        <li><NavLink to={ '/movies' }>Movies</NavLink></li>
                        <li><NavLink to={ '/series' }>TV Shows</NavLink></li>
                        { <button className="btn">Log out</button> }
                    </ul>
                </div>
            </div>
        </>
    )
}