import { HeaderActions } from './header-actions';
import { Link } from "react-router-dom"
import { logo } from "../assets"
import { Navbar, SearchBox, MobileNav, ThemeToggle } from './index';
import { useEffect, useRef, useState } from "react"
import { TbMenu, TbMenu2, TbSearch, TbX } from 'react-icons/tb';

export const Header = () => {
    const [searchOpen, setSearchOpen] = useState(false)
    const [navOpen, setNavOpen] = useState(false)
    const headerRef = useRef(null)

    function handleSearchBtn() {
        setSearchOpen(true)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            headerRef.current.classList.remove('top-0')

            if (window.scrollY > 70) {
                headerRef.current.classList.add('fixed', 'backdrop-blur-lg', 'backdrop-brightness-90', '-top-20')
            } else {
                headerRef.current.classList.remove('fixed', 'backdrop-brightness-90')
            }

            if (window.scrollY > 20) {
                headerRef.current.classList.add('shadow')
            } else {
                headerRef.current.classList.remove('shadow')
            }

            if (window.scrollY > 200) {
                headerRef.current.classList.add('-top-20')
                //     headerRef.current.classList.add('backdrop-blur-lg')
            }
        })

        window.addEventListener('scrollend', () => {
            headerRef.current.classList.remove('-top-20')
            headerRef.current.classList.add('top-0')
        })
    }, [])

    return (
        <>
            { searchOpen &&
                <div className='w-screen h-screen fixed z-40  '
                >
                    <SearchBox
                        setSearchOpen={ setSearchOpen }
                        searchOpen={ searchOpen }
                    />
                </div>
            }

            { navOpen &&
                <MobileNav
                    navOpen={ navOpen }
                    setIsOpen={ setNavOpen }
                />
            }

            <header ref={ headerRef } className="flex items-center transition-[top] justify-between px-4 h-16 z-30  w-full">
                <Link className="flex gap-1 items-center font-black font-serif text-2xl group">
                    <div>
                        <img
                            className="w-[60px] aspect-auto drop-shadow group-hover:drop-shadow-sm"
                            src={ logo }
                            alt="logo by logoipsum" />
                    </div>
                    <div className="font-thin">
                        <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-red-600 transition-colors font-thin">FLIX</span>
                        <span className="group-hover:font-black transition-all">forte.</span>
                    </div>
                </Link>

                {/* desktop nav */ }
                <Navbar />


                <ul className="flex items-center gap-2 ">

                    <ThemeToggle />

                    <li className="flex items-center ">
                        <button className="text-xl"
                            onClick={ handleSearchBtn }
                        >
                            <TbSearch />
                        </button>
                    </li>

                    <HeaderActions setSearchOpen={ setSearchOpen } />
                    <button className={ `focus:border border-skin-base p-1 rounded-sm md:hidden` }
                        onClick={ () => setNavOpen(!navOpen) }
                    >
                        { navOpen ? <TbX /> : <TbMenu2 /> }
                    </button>
                </ul>
            </header>
        </>
    )
}