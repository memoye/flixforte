import { HeaderActions } from './header-actions';
import { Link } from "react-router-dom"
import { logo } from "../assets"
import { Navbar, SearchBox } from './index';
import { useState } from "react"

export const Header = () => {

    const [searchOpen, setSearchOpen] = useState(true)



    return (
        <header className="flex items-center justify-between px-4 h-16 z-50 border-b border-skin-base">
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
            { searchOpen && <SearchBox setSearchOpen={ setSearchOpen } /> }

            <Navbar />

            <HeaderActions setSearchOpen={ setSearchOpen } />
        </header>
    )
}