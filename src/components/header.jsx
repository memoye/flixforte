import { HeaderActions } from './header-actions';
import { Link } from "react-router-dom"
import { logo } from "../assets"
import { Navbar, SearchBox, MobileNav } from './index';
import { useEffect, useRef, useState } from "react"
import { TbMenu, TbSearch, TbX } from 'react-icons/tb';

export const Header = () => {

    const [searchOpen, setSearchOpen] = useState(false)
    const [navOpen, setNavOpen] = useState(true)
    const headerRef = useRef(null)

    function handleSearchBtn() {
        setSearchOpen(true)
    }


    // const handleScroll = () => {
    //     const { classList } = headerRef.current;
    //     const isScrolled = window.scrollY > 200;

    //     classList.toggle('fixed', isScrolled);
    //     classList.toggle('shadow', window.scrollY > 20);
    //     classList.toggle('-top-20', window.scrollY > 200);
    //     classList.toggle('backdrop-blur-sm', window.scrollY > 200);
    // };

    // const handleScrollEnd = () => {
    //     const { classList } = headerRef.current;
    //     classList.remove('-top-20');
    //     classList.add('top-0');
    // };

    // useEffect(() => {

    //     window.addEventListener('scroll', handleScroll);
    //     window.addEventListener('scrollend', handleScrollEnd);

    //     // Clean up event listeners on component unmount
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //         window.removeEventListener('scrollend', handleScrollEnd);
    //     };
    // }, [])

    useEffect(() => {
        // console.time()
        window.addEventListener('scroll', () => {
            headerRef.current.classList.remove('top-0')

            if (window.scrollY > 70) {
                headerRef.current.classList.add('fixed')
                headerRef.current.classList.add('backdrop-blur-sm')
                headerRef.current.classList.add('-top-20')
            } else {
                headerRef.current.classList.remove('fixed')
            }

            if (window.scrollY > 20) {
                headerRef.current.classList.add('shadow')
            } else {
                headerRef.current.classList.remove('shadow')
            }

            if (window.scrollY > 200) {
                headerRef.current.classList.add('-top-20')
                headerRef.current.classList.add('backdrop-blur-sm')
            }
        })

        window.addEventListener('scrollend', () => {
            headerRef.current.classList.remove('-top-20')
            headerRef.current.classList.add('top-0')
        })
        // console.timeEnd()
    }, [])

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
            { //mobile nav 
                navOpen &&
                <MobileNav setIsOpen={ setNavOpen } />
            }

            <header ref={ headerRef } className="flex items-center transition-[top]  justify-between px-4 h-16 z-30  w-full">
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


                <Navbar

                />


                <ul className="flex items-center gap-2 ">
                    <li className="flex items-center">
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
                        { navOpen ? <TbX /> : <TbMenu /> }
                    </button>
                </ul>
            </header>
        </>
    )
}