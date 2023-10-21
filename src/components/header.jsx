import { HeaderActions } from './header-actions';
import { Link } from "react-router-dom"
import { logo } from "../assets"
import { Navbar, SearchBox } from './index';
import { useState } from "react"
import { TbMenu, TbSearch } from 'react-icons/tb';

export const Header = () => {

    const [searchOpen, setSearchOpen] = useState(false)
    const [navOpen, setNavOpen] = useState(false)

    function handleSearchBtn() {
        setSearchOpen(true)
    }

    return (
        <>
            { searchOpen &&
                <div className='w-screen h-screen fixed z-40'
                >
                    <SearchBox
                        setSearchOpen={ setSearchOpen }
                        searchOpen={ searchOpen }
                    />
                </div>

            }

            <header className="flex items-center justify-between px-4 h-16 z-30 fixed w-full backdrop-blur-sm shadow">
                <Link className="flex gap-1 items-center font-black font-serif text-2xl group">
                    <div>
                        <img
                            className="w-[60px] aspect-auto drop-shadow group-hover:drop-shadow-sm"
                            src={ logo }
                            alt="logo by logoipsum" />
                    </div>
                    <div className="font-thin">
                        <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-red-600  transition-colors font-thin">FLIX</span>
                        <span className="group-hover:font-black transition-all">forte.</span>
                    </div>
                </Link>


                <Navbar
                    isOpen={ navOpen }
                    setIsOpen={ setNavOpen }
                />

                <ul className="flex items-center gap-2">
                    <li className="flex items-center">
                        <button className="text-xl"
                            onClick={ handleSearchBtn }
                        >
                            <TbSearch />
                        </button>
                    </li>

                    <HeaderActions setSearchOpen={ setSearchOpen } />

                    <button className={ `focus:border border-skin-base p-1 rounded-sm md:hidden` }
                        onClick={ () => setNavOpen(true) }
                    >
                        <TbMenu />
                    </button>

                </ul>
            </header>
        </>
    )
}